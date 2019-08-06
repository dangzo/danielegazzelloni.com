if (typeof HRB == "undefined" || !HRB) { var HRB = {}; }

HRB.currentPage = {};
HRB.runTime = {
  execFuncs: function() {
    this.dockFooter();
    this.bootstrapTooltips();
    this.bootstrapPopovers();
    this.triggerResizeOnTab();
    this.largestLabel();
    this.modalContentHeight();
    this.resizeOnOrientationChange();
    this.hideMobileURL();
    this.preparePrettyPrint();
  },

  preparePrettyPrint: function() {
    $('pre').addClass('prettyprint linenums');
    if (typeof prettyPrint === 'function') prettyPrint();
  },

  dockFooter: function() {

    if ($('.layout-content').hasClass('minimal')) { // unncessary in minimal layout
      return; 
    }

    var header  = $('.layout-header')
      , content = !!$('.layout-content.manage > .content-area').length ? $('.layout-content.manage > .content-area') : $('.layout-content')
      , footer  = $('.layout-footer')
      , sideNav = $('.layout-side-nav')
      , screenHeight = window.innerHeight
      , contentHeight = content.outerHeight(true)
      , totalHeight = (header.outerHeight(true) + content.outerHeight(true) + footer.outerHeight(true))
      , difference = screenHeight - totalHeight; 


    if (screenHeight > totalHeight) {
      content.css('min-height', contentHeight + difference);
      sideNav.css('min-height', contentHeight + difference);
    }

    if (content.is('.content-area')){
      if (!!sideNav.length) {
        if (contentHeight > sideNav.outerHeight()) {
          sideNav.css('min-height', contentHeight);
        }
        if (sideNav.outerHeight() > contentHeight) {
          content.css('min-height', sideNav.outerHeight());
        }
      } else {
        content.css('margin-left', '0px');
      }
    }

    // redoes the whole dockFooter thing on resize
    if (!HRB.runTime.dockFooter.resizeBound) { // if the resize event handler isn't already bound, bind it
      $(window).on('resize', function() {
        content.css('min-height','0px');
        sideNav.css('min-height','0px');
        HRB.runTime.dockFooter();
      });
      HRB.runTime.dockFooter.resizeBound = true; // sets a flag that the resize event is already bound
    }

  },

  bootstrapTooltips: function() {
    $('[data-js-hook="tooltip"]').tooltip();
  },

  bootstrapPopovers: function() {
    $('[data-js-hook="popover"]').each(function() {
      $(this).popover({trigger: 'hover'});
    });
  },

  triggerResizeOnTab: function() {
    $('a[data-toggle="tab"]').on('show shown', function (e) {
      $(window).trigger('resize');
    });
  },

  largestLabel: function() {
    var largest = 0
      , $form = $('[data-largest-label="true"]')
      , $controls = $form.find('.controls')
      , $formActions = $form.find('.form-actions')
      , $labels = $form.find('label');

    if (!$form.length) {
      return;
    }

    if ($(window).width() <= 768) {
      $controls.css('margin-left', 0);
      $formActions.css('padding-left', 0);
      return;
    }

    $labels.css('width', 'auto');

    $labels
      .each(function() {
        $this = $(this);
        if ($this.width() > largest) {
          largest = $this.width();
        }
      })
      .width(largest);

    $controls.css('margin-left', largest + 20);

    $formActions.css('padding-left', largest + 20);

    if (!$form.data('resize-bound')) {
      $(window).on('resize.largestLabel', function() {
        HRB.runTime.largestLabel();
      });

      $form.data('resize-bound', true);
    }
  },

  modalContentHeight: function() {
    $('.modal').on('show', function() {
      var $modal = $(this)
        , modalHeight = $modal.outerHeight()
        , windowHeight = $(window).height()
        , difference = modalHeight - windowHeight
        , baseMaxHeight = 380;

      $modal.find('.modal-body').css('max-height', baseMaxHeight);

      if (difference > 0) {
        baseMaxHeight -= difference;
        $modal.find('.modal-body').css('max-height', baseMaxHeight);
      }
    });
  },

  resizeOnOrientationChange: function() {
    $(window).on('orientationchange', function() {
      $(window).trigger('resize');
    })
  },

  hideMobileURL: function() {
    /mobile/i.test(navigator.userAgent) && setTimeout(function () {
      window.scrollTo(0, 1);
    }, 750);
  }
};


HRB.utils = {
  djshook: function(val) {
    return $('[data-js-hook="' + val + '"]');
  }
}

$(function() {
  HRB.runTime.execFuncs();
});