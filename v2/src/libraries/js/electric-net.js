export default {
  /* eslint-disable */
  startAnimation: () => {
    let width, height, targetElement, canvas, ctx, points, target, animateHeader = true;

    const targetElementID = 'electric-net-container';
    const canvasID = 'canvas-container';
    const wiresConcentration = window.innerWidth < 600 ? 10 : 20;
    const moveSpeed = 2.5;

    const netColor = {
      r: '8',
      g: '253',
      b: '216',
    };

    // Main
    initCanvas();
    initAnimation();
    addListeners();

    // Move net
    window.setInterval(function () { moveNet(); }, 50*moveSpeed);

    function initCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {
        x: randomInt(100, width - 100),
        y: randomInt(100, height - 100),
      };

      targetElement = document.getElementById(targetElementID);
      targetElement.style.height = height + 'px';

      canvas = document.getElementById(canvasID);
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // create points
      points = [];
      for(let x = 0; x < width; x = x + width/wiresConcentration) {
        for(let y = 0; y < height; y = y + height/wiresConcentration) {
          const px = x + Math.random()*width/wiresConcentration;
          const py = y + Math.random()*height/wiresConcentration;
          const p = {x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // for each point find the 5 closest points
      for(let i = 0; i < points.length; i++) {
        const closest = [];
        var p1 = points[i];
        for(var j = 0; j < points.length; j++) {
          var p2 = points[j]
          if(!(p1 == p2)) {
            var placed = false;
            for(var k = 0; k < 5; k++) {
              if(!placed) {
                if(closest[k] == undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for(var k = 0; k < 5; k++) {
              if(!placed) {
                if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // assign a circle to each point
      for(const i in points) {
        const c = new Circle(points[i], 2+Math.random()*4, 'rgba(255,255,255,1)');
        points[i].circle = c;
      }
    }

    // Event handling
    function addListeners() {
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    }

    function moveNet() {
      if (target.x >= window.innerWidth || target.x <= 0) {
        window.electricNetDirectionX *= -1;
      }
      if (target.y >= window.innerHeight || target.y <= 0) {
        window.electricNetDirectionY *= -1;
      }

      const distanceX = randomInt(0, 15) * window.electricNetDirectionX;
      const distanceY = randomInt(0, 15) * window.electricNetDirectionY;

      target.x = target.x + distanceX;
      target.y = target.y + distanceY;
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      targetElement.style.height = height+'px';
      canvas.width = width;
      canvas.height = height;
    }

    // animation
    function initAnimation() {
      window.electricNetDirectionX = randomInt(0, 1) ? -1 : 1;
      window.electricNetDirectionY = randomInt(0, 1) ? -1 : 1;

      animate();
      for (const i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for(const i in points) {
          // detect points in range
          if(Math.abs(getDistance(target, points[i])) < 4000) {
              points[i].active = 0.4;
              points[i].circle.active = 0.6;
          } else if(Math.abs(getDistance(target, points[i])) < 20000) {
              points[i].active = 0.1;
              points[i].circle.active = 0.4;
          } else if(Math.abs(getDistance(target, points[i])) < 40000) {
              points[i].active = 0.02;
              points[i].circle.active = 0.1;
          } else {
              points[i].active = 0;
              points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      TweenLite.to(p, moveSpeed + 3*Math.random(), {
        x: p.originX-50+Math.random()*100,
        y: p.originY-50+Math.random()*100,
        ease: Circ.easeInOut,
        onComplete: () => {
          shiftPoint(p);
        }
      });
    }

    // Canvas manipulation
    function drawLines(p) {
      if(!p.active) return;
      for(const i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(${netColor.r},${netColor.g},${netColor.b},`+ p.active+')';
        ctx.stroke();
      }
    }

    function Circle(pos,rad,color) {
      var _this = this;

      // constructor
      (function() {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function() {
        if(!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(${netColor.r},${netColor.g},${netColor.b},`+ _this.active+')';
        ctx.fill();
      };
    }

    // Util x1
    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    // Util x2
    function randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  /* eslint-enable */
};
