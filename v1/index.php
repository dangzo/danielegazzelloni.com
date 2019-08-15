<?php
function getLastUpdateDate() {
    $dateFile = fopen("update_at.date", "r") or die("Unable to open file!");
    $updateAtTimestamp = fgets($dateFile);
    fclose($dateFile);
    return date('F jS, Y', $updateAtTimestamp);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Resume and professional website of Daniele Gazzelloni: a remote front-end developer with focus on React and JavaScript based technologies.">
    <meta name="keywords" content="Daniele Gazzelloni, Remote, React, Redux, Vue, Vuex, Vuetify, Muxt, Meteor, Freelance, Frontend Developer, web app, Front-end, Fullstack developer, Full-stack, JavaScript, resume, CV" />
    <meta name="author" content="Daniele Gazzelloni">
    <meta name="index" content="index, follow">

    <title>Daniele Gazzelloni | JavaScript Developer, Remote | React, Vue, Node.js | JavaScript ES8</title>

    <!-- hreflang: Google language identification service -->
    <!--<link rel="alternate" hreflang="x-default" href="http://www.danielegazzelloni.com/" />
    <link rel="alternate" hreflang="it" href="http://www.danielegazzelloni.com/it/" />
    <link rel="alternate" hreflang="es" href="http://www.danielegazzelloni.com/es/" />-->

    <!-- CSS -->
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">

    <!-- Owl Carousel -->
    <link href="css/owl.theme.css" rel="stylesheet">
    <link href="css/owl.carousel.css" rel="stylesheet">

    <!-- Simple text rotator -->
    <link href="css/simpletextrotator.css" rel="stylesheet">

    <!-- Font Awesome CSS -->
    <link href="css/font-awesome.min.css" rel="stylesheet" media="screen">

    <!-- Animate css -->
    <link href="css/animate.css" rel="stylesheet">

    <!-- Custom styles CSS -->
    <link href="css/style.css" rel="stylesheet" media="screen">

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}
    </style>
</head>
<body id="top">
<div class="wrapper">

    <!-- Preloader -->

    <div id="preloader" style="display: none;">
        <div id="status" style="display: none;">
            <div class="status-mes"><h4>Daniele Gazzelloni</h4></div>
        </div>
    </div>

    <!-- Navigation start -->

    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">

            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#top">Daniele Gazzelloni</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="#intro">home</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <!--<li><a href="#portfolio">Portfolio</a></li>-->
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </div>
    </nav>

    <!-- Navigation end -->

    <!-- Intro section start -->

    <section id="intro" class="section" style="position: relative; z-index: 0; background: none;">

        <div class="container">

            <div class="row">

                <div class="col-md-12">

                    <div class="hello animated" style="visibility: visible; -webkit-animation:;">
                        <h1>Hello, I'm Daniele Gazzelloni</h1>
                        <h3>
                          <span class="rotate" style="text-shadow: black 0px 0px 18px; opacity: 0.0728612841503524;">
                            Vue, React, Node.js. | Frontend Developer. | Full-Stack Background.
                          </span>
                        </h3>
                    </div>

                    <a href="#profile">
                        <div class="mouse-icon">
                            <div class="wheel"></div>
                        </div>
                    </a>

                </div>

            </div><!-- .row -->

        </div><!-- .container -->

        <div class="container"><p class="lastUpdated">Last update: <?php echo getLastUpdateDate(); ?></p></div>

        <div class="backstretch" style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; z-index: -999998; position: absolute; width: 1280px; height: 692px;"><img src="images/_1992.png" style="position: absolute; margin: 0px; padding: 0px; border: none; max-height: none; max-width: none; z-index: -999999; width: 1280px; height: 853.333333333333px; left: 0px; top: -80.6666666666667px;" alt=""></div></section>

    <!-- Intro section end -->

    <!-- Profile contact callout section -->

    <section id="profile-contact">

        <div class="container">

            <div class="row">

                <div class="col-sm-4">
                    <div class="profile-item">
                        <i class="fa fa-github"></i>
                        <h5><a href="https://github.com/dangzo">
                        github.com/dangzo</a></h5>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="profile-item">
                        <i class="fa fa-linkedin"></i>
                        <h5><a href="https://www.linkedin.com/in/danielegazzelloni">
                        LinkedIn profile</a></h5>
                    </div>
                </div>

                 <div class="col-sm-4">
                    <div class="profile-item">
                        <i class="fa fa-envelope-o"></i>
                        <h5><a href="mailto:hello@danielegazzelloni.com">hello@danielegazzelloni.com</a></h5>
                    </div>
                </div>

            </div><!-- .row -->

        </div> <!-- .container -->

    </section>

    <!-- Profile contact callout section -->

    <!-- Profile section start -->

    <section id="profile" class="section">

        <div class="container">

            <div class="row long-down">

                <div class="col-md-12 headline">
                    <h2>Daniele Gazzelloni</h2>
                    <p>Frontend developer, full-stack JavaScript background.</p>
                </div>

                <div class="col-md-3 col-sm-6 hidden-xs">
                    <img class="avatar" src="images/forte_village.jpg" alt="">

                    <div class="social-profiles">

                        <div class="profile-widget">
                            <ul class="widget-social">
                                <li><a href="https://github.com/dangzo"><i class="fa fa-github fa-fw"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/danielegazzelloni"><i class="fa fa-linkedin fa-fw"></i></a></li>
                                <li><a href="mailto:daniele@danielegazzelloni.com"><i class="fa fa-envelope fa-fw"></i></a></li>
                            </ul>
                        </div>

                    </div>

                </div><!-- .col-md-3 -->

                <div class="col-md-9 col-sm-12" style="padding-top: 0.5em">
                    <p>Hello!</p>
                    
                    <p>I'm an Italian frontend developer with focus on <strong>JavaScript</strong> technologies like <strong>React</strong>, <strong>Vue.js</strong> and <strong>TypeScript</strong>.

                    <h4 class="quick-facts">Quick facts about me:</h4>
                    
                    <ul class="quick-facts">
                      <li>I graduated in Computer Engineering in 2012 and <em><strong>I work remotely</strong></em> since then.</li>
                      <li>In the last 4 years I built and maintained a business web/mobile app as a single product developer.</li>
                      <li>I have a full-stack background (<strong>Node.js</strong>) but I’m addicted to <strong>Vue.js</strong> and <strong>TypeScript</strong></li>
                      <li>I put huge efforts in delivering high quality code following common best practices
                      (KISS, DRY, good code organisation and readability, etc.)</li>
                      <li>I have experience working in small teams and <strong>startup environments</strong>.</li>
                      <li>I fluently speak <strong>English</strong>, <strong>Spanish</strong> and <strong>Italian</strong>.</li>
                    </ul>

                </div>
            </div><!-- .row -->

            <div class="row">

                <div class="col-md-3 col-sm-6">

                    <div class="profile-widget">
                        <h3 class="with-content">Core</h3>

                        <h5>JavaScript (ES8)</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                        <h5>Vue.js / Vuex</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                        <h5>React.js / Redux</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-off"></div>
                        </div>

                        <h5>Node.js / Express</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-off"></div>
                        </div>

                        <h5>Meteor.js</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                    </div>

                </div><!-- .col-md-3 -->

                <div class="col-md-3 col-sm-6">

                    <div class="profile-widget">
                        <h3 class="with-content">Secondary</h3>

                        <h5>CSS3, HTML5</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                        <h5>Vuetify, Nuxt</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                        <h5>jQuery, AJAX</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                        <h5>GraphQL</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-off"></div>
                        </div>

                        <h5>TypeScript</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                    </div>

                </div><!-- .col-md-3 -->

                <div class="col-md-3 col-sm-6">

                    <div class="profile-widget">
                        <h3 class="empty">&nbsp;</h3>

                        <h5>Bootstrap, Material UI</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                        <h5>PHP</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-off"></div>
                        </div>

                        <h5>Wordpress Development</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                        <h5>MongoDB / NoSQL</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                        <h5>MySQL / ProstgreSQL</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                    </div>

                </div><!-- .col-md-3 -->

                <div class="col-md-3 col-sm-6">

                    <div class="profile-widget">
                        <h3 class="empty">&nbsp;</h3>

                        <h5>Git</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                        </div>

                        <h5>Docker</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-off"></div>
                            <div class="skill-rate-off"></div>
                        </div>

                        <h5>Shell scripting</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-off"></div>
                            <div class="skill-rate-off"></div>
                        </div>

                        <h5>Webpack</h5>
                        <div class="skill-bar">
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-on"></div>
                            <div class="skill-rate-off"></div>
                        </div>

                    </div>

                </div><!-- .col-md-3 -->

            </div><!-- .row -->

        </div><!-- .container -->

    </section>

    <!-- Profile section end -->

    <!-- Callout section start -->


    <section class="callout">

        <div class="container">

            <div class="row">

                <div class="col-md-3 hidden-xs">
                    <h3>My status</h3>
                </div>

                <div class="col-md-9 headline nomargin">
                    <!--
                    <h3>I'm sorry, I'm currently not available for freelance work.</h3>
                    <p>However, please keep me in mind for any future projects. Feel free to inquire me further for my availability, I will gladly give you all the information you need.</p>
                    <a href="#contact" class="btn btn-default btn-custom-2 callout-btn"><i class="fa fa-paper-plane-o icon-before"></i> Contact me</a>
                    -->

                    <h3>Available for hiring.</h3>
                    <p>Mostly looking for companies who hires remotely and using a tech stack similar to what I've used so far.</p>
                    <a href="#contact" class="btn btn-default btn-custom-2 callout-btn"><i class="fa fa-paper-plane-o icon-before"></i> Contact me</a>
                </div>

            </div><!-- .row -->

        </div> <!-- .container -->

    </section>

    <!-- Resume section start -->

    <section id="resume" class="section">

        <div class="container">

            <div class="row">

                <div class="col-md-12 headline">
                    <h2>Resume</h2>
                    <p>My education and experience.</p>
                </div>

            </div><!-- .row -->

            <div class="row resume-items">

                <div class="col-md-3">
                    <h3>Education</h3>
                </div>

                <div class="col-md-6 col-sm-8 resume-item">
                    <h4>Java Enterprise Edition programming</h4>
                    <p>An advanced class started from the basics of Java programming, digging up to something more in-depth like JSPs, servlets, sessions, network programming and so on. The course also provided insights on the IDE Eclipse, Apache Tomcat and STRUTS framework. </p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="https://www.linkedin.com/company/gruppo-wizards/" target="_blank">Wizards Consulting Group</a></h4>
                    <i class="fa fa-calendar"></i> June 2013
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-md-offset-3 col-sm-8 resume-item">
                    <h4>Bachelor in Computer Science and Engineering</h4>
                    <p>Thesis: "<em>Integration of an anti-plagiarism detection software into an e-learning management system</em>".</p>
                    <p>Subject: SIM-Plagiarism, an anti-plagiarism detection plugin written in PHP for Moodle, one of the most commonly used learning management system.</p>
                    <p>Link to the live software <a href="https://moodle.org/plugins/pluginversion.php?id=1634" target="_blank">here</a> (not maintained).</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> La Sapienza, University of Rome</h4>
                    <i class="fa fa-calendar"></i> November 2012
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-md-offset-3 col-sm-8 resume-item">
                    <h4>Scientific high school degree</h4>
                    <p class="empty">&nbsp;</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> Innocenzo XII high school, Anzio</h4>
                    <i class="fa fa-calendar"></i> July 2007
                    <hr class="visible-xs">
                </div>

            </div><!-- .row -->

            <div class="row resume-items">

                <div class="col-md-3">
                    <h3>Experience</h3>
                </div>

                <div class="col-md-6 col-sm-8 resume-item">
                    <h4>Full-stack developer, remote</h4>
                    <p>Building and maintaining core components at <a href="https://www.saavu.io/" target="_blank">saavu.io</a>: a mass communication web app based on a friendly chat interface which makes easier reaching, interacting and planning activities with a large crowd of people.</p>
                    <p>
                      I learned my way across all the stack, having to regularly deal with strong type checking (<strong>TypeScript</strong>) and code refactoring for maintainability, tons of automations (shell scripting, docker) and a growing complex database structure (<strong>PostgreSQL</strong>, <strong>GraphQL</strong>).</p>
                    <p>
                      <strong>Node.js</strong> on one side, <strong>Vue</strong>/<strong>Vuex</strong> with <strong>Vuetify</strong>/<strong>Nuxt</strong> on the other.
                    </p>
                    <p>Here a YouTube link explaining how the app works: <a href="https://www.youtube.com/watch?v=GyVNKbnBfCk" target="_blank">https://www.youtube.com/watch?v=GyVNKbnBfCk</a></p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="https://www.saavu.io/" target="_blank">Saavu</a></h4>
                    <i class="fa fa-calendar"></i> 2018 - 2019
                    <hr class="visible-xs">
                </div>
                <!-- -->
                <!-- -->
                <!-- -->
                <!-- -->
                <!-- -->
                <div class="col-md-6 col-sm-8 col-md-offset-3 resume-item">
                    <h4>Frontend development, remote</h4>
                    <p>Implementation of a <strong>React.js</strong> frontend for a frame contracts platform called SpotQuest. I've been given an HTML/CSS design and a <strong>Node.js</strong> backend.</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="https://www.spotquest.de/" target="_blank">SpotQuest</a></h4>
                    <i class="fa fa-calendar"></i> 2018 - 2019
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-sm-8 col-md-offset-3 resume-item">
                    <h4>Full-stack developer, remote</h4>
                    <p>Development from scratch to production stage of <a href="https://www.33mileradius.com/services/review-generation/" target="_blank">Acquirly</a>, an hybrid <strong>Meteor.js</strong> web app for reviews generation.</p>
                    <p>Also <strong>PHP</strong>, <strong>WordPress</strong> and all-around front-end development.</p>
                    <p>Here a brief introduction to the app: <a href="https://www.youtube.com/watch?v=d1UUZTHoduU" target="_blank">https://www.youtube.com/watch?v=d1UUZTHoduU</a></p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="http://www.33mileradius.com/" target="_blank">33 Mile Radius</a></h4>
                    <i class="fa fa-calendar"></i> 2016 - 2018
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-sm-8 col-md-offset-3 resume-item">
                    <h4>Website development, remote</h4>
                    <p>Full <strong>Wordpress</strong> theme development, from design idea to product delivery.</p>
                    <p>Live website here: <a href="http://www.chantalbiondi.com/" target="_blank">http://www.chantalbiondi.com/</a></p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="http://www.chantalbiondi.com/" target="_blank">Chantal Biondi</a></h4>
                    <i class="fa fa-calendar"></i> 2017
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-sm-8 col-md-offset-3 resume-item">
                    <h4>Full-stack development, remote</h4>
                    <p>Writing dashboard components for the mexican bank <a href="https://credijusto.com/" target="_blank">Credijusto</a>. Twitter <strong>Bootstrap</strong>, <strong>React.js</strong>, RESTful APIs and web hooks for frontend. Backend stack on <strong>Node.js</strong>/<strong>Express</strong>/<strong>PosgreSQL</strong>.</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="https://www.credijusto.com/" target="_blank">Credijusto</a></h4>
                    <i class="fa fa-calendar"></i> 2015
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-sm-8 col-md-offset-3 resume-item">
                    <h4>Full-stack development, remote</h4>
                    <p>Development of backend components (<strong>Node.js</strong>, REST APIs) and client-side components of a WebGL model editor written in <a href="https://threejs.org/" target="_blank">Three.js</a>, a Javascript 3D library.</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><s><i class="fa fa-suitcase"></i> <a href="http://www.viewtwoo.com/" target="_blank">NewNeed Srl</a></s></h4>
                    <i class="fa fa-calendar"></i> 2015
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-sm-8 col-md-offset-3 resume-item">
                    <h4>Web Development at Elance/Upwork, remote</h4>
                    <p>Full-stack and all-around web development at Elance-oDesk, now formerly Upwork. Core focus on <strong>Node.js</strong> and the MEAN stack (<strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>Angular.js</strong> and <strong>Node.js</strong>)</p>
                    <p>My Upwork profile: <a href="https://www.upwork.com/freelancers/~01cd82d9743d60f9d1" target="_blank">https://www.upwork.com/freelancers/~01cd82d9743d60f9d1</a> (account needed)</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="https://www.upwork.com/" target="_blank">Elance-oDesk (now Upwork)</a></h4>
                    <i class="fa fa-calendar"></i> 2015
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-sm-8 col-md-offset-3 resume-item">
                    <h4>Backend developer, remote</h4>
                    <p>Main developer of an enterprise managerial import/export platform. The software was mainly built in <strong>Node.js</strong> and <strong>Ext.js</strong>, respectively for the backend and frontend. <strong>RabbitMQ</strong>, RESTful API, modularity, redundancy and security was the core keywords.</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="https://ttclab.com/" target="_blank">Technology Trading Consulting</a></h4>
                    <i class="fa fa-calendar"></i> 2014 - 2015
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-md-offset-3 col-sm-8 resume-item">
                    <h4>Game developer, remote</h4>
                    <p>Development, debugging and testing of a 1st person 3d video game for Windows made with Unity 3D Pro game-engine, coding mainly on <strong>TypeScript</strong> and <strong>C#</strong>. The game was conceived for social and medical purposes.</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="https://ttclab.com/" target="_blank">Technology Trading Consulting</a></h4>
                    <i class="fa fa-calendar"></i> 2014
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-sm-8 col-md-offset-3 resume-item">
                    <h4>C# .NET development</h4>
                    <p>Testing and development of Windows desktop apps using <strong>C#</strong> and <strong>.NET</strong> framework. I also used to be the team CSS specialist, prototyping new ideas from paper to code.</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> <a href="http://www.wizardsgroup.it/" target="_blank"><a href="https://www.linkedin.com/company/gruppo-wizards/" target="_blank">Wizards Consulting Group</a></h4>
                    <i class="fa fa-calendar"></i> 2013 - 2013
                    <hr class="visible-xs">
                </div>

                <div class="col-md-6 col-sm-8 col-md-offset-3 resume-item">
                    <h4>Web Development, remote</h4>
                    <p>Beginning of my freelance activity: websites development in <strong>PHP</strong>, <strong>JavaScript</strong> and <strong>CSS</strong>. I remember <strong>jQuery</strong> was the cool stuff of the moment those years. Mostly local clients, mostly playing and experimenting.</p>
                    <hr class="hidden-xs">
                </div>

                <div class="col-md-3 col-sm-4 resume-place">
                    <h4><i class="fa fa-suitcase"></i> Danny's Arts</h4>
                    <i class="fa fa-calendar"></i> 2012 - 2013
                    <hr class="visible-xs">
                </div>

            </div><!-- .row -->

            <div class="row">

                <div class="col-md-6 col-md-offset-3">
                    <a href="resume.2019.pdf" target="_blank" class="btn btn-default btn-custom-2" id="downloadCV"><i class="fa fa-cloud-download icon-before"></i> Download CV</a>
                </div>

        </div><!-- .container -->

    </section>
    <!-- Resume section end -->


    <!-- Portfolio section start
    <section id="portfolio" class="section">

            <div class="container">

                    <div class="row">

                            <div class="col-md-12 headline">
                                    <h2>Portfolio</h2>
                                    <p>Something you should really see about me.</p>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                    <a href="images/portfolio/acquirly.insight.png" title="Acquirly">
                                            <div class="portfolio-item">
                                                    <div class="portfolio-item-preview">
                                                            <img src="images/portfolio/acquirly.preview.png" alt="">
                                                    </div>
                                                    <div class="portfolio-item-description">
                                                            <h3>Web, iOS and Android application for leaving reviews</h3>
                                                            <p>Meteor.js, MongoDB, jQuery, Twilio API, Google Places API</p>
                                                    </div>
                                            </div>
                                    </a>
                            </div>


                            <div class="col-md-4 col-sm-6">
                                    <a href="images/portfolio/cj.insight.png" title="Credijusto">
                                            <div class="portfolio-item">
                                                    <div class="portfolio-item-preview">
                                                            <img src="images/portfolio/cj.preview.png" alt="">
                                                    </div>
                                                    <div class="portfolio-item-description">
                                                        <h3>RESTful API backend &amp; dashboard components</h3>
                                                        <p>Node.js, Express.js, React.js, jQuery</p>
                                                    </div>
                                            </div>
                                    </a>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                    <a href="images/portfolio/vte.insight.png" title="ViewTwoo">
                                            <div class="portfolio-item">
                                                    <div class="portfolio-item-preview">
                                                        <img src="images/portfolio/vte.preview.png" alt="">
                                                    </div>
                                                    <div class="portfolio-item-description">
                                                            <h3>RESTful API backend, editor models rendering &amp; widgets</h3>
                                                            <p>Node.js, Express.js, Three.js, jQuery, Twitter Bootstrap</p>
                                                    </div>
                                            </div>
                                    </a>
                            </div>

                            <div class="col-md-4 col-sm-6" data-delay=".2s" style="visibility: hidden; -webkit-animation: none 0.2s;">
                                    <a href="images/portfolio/mmm.insight.png" title="MyMailMarket">
                                            <div class="portfolio-item">
                                                    <div class="portfolio-item-preview">
                                                        <img src="images/portfolio/mmm.preview.png" alt="">
                                                    </div>
                                                    <div class="portfolio-item-description">
                                                        <h3>Dynamic Markdown-to-HTML rendering</h3>
                                                        <p>Angular.js</p>
                                                    </div>
                                            </div>
                                    </a>
                            </div>

                            <ul>
                                <li><a href="https://www.google.com/search?q=acquirly" target="_new">Acquirly</a></li>
                            </ul>

                    </div>

            </div>

    </section>

    Portfolio section end -->

    <!-- Contact section start -->

    <section id="contact" class="section">

        <div class="container">

            <div class="row">

                <div class="col-md-12 headline">
                    <h2>Contact</h2>
                    <p>Use the following form to get in touch about projects, cooperation or ideas.</p>
                </div>

                <!--<div class="col-md-6">
                </div>
                <div class="col-md-6 col-md-offset-6">
                    <h4 class="not-available">Note: I'm currently not available for freelance work.</h4>
                </div>-->

                
                <div class="col-md-6">
                    
                    <p>You can also reach me up here:</p>

                    <ul class="icon-list">
                        <li><i class="fa fa-fw fa-envelope-o"></i><a href="mailto:hello@danielegazzelloni.com">hello@danielegazzelloni.com</a></li>
                    </ul>

                </div>

                <div class="col-md-6">

                    <form id="contact-form" role="form">

                        <div class="form-group">
                            <label class="sr-only" for="c_name">Name</label>
                            <input type="text" id="c_name" class="form-control" name="c_name" placeholder="Name">
                        </div>

                        <div class="form-group">
                            <label class="sr-only" for="c_email">Email address</label>
                            <input type="email" id="c_email" class="form-control" name="c_email" placeholder="E-mail">
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" id="c_message" name="c_message" rows="7" placeholder="Your message"></textarea>
                        </div>

                        <button type="submit" class="btn btn-custom-1">
                            <i class="fa fa-bullhorn icon-before"></i> Send it
                        </button>

                    </form>

                    <div class="ajax-response"></div>

                </div>

            </div><!-- .row -->

        </div><!-- .container -->

    </section>

    <!-- Contact section end -->

    <!-- Footer start -->

    <footer id="footer">

        <div class="container">

            <div class="row">

                <div class="col-md-8">
                    <p class="copy">
                        © 2015-<script>document.write((new Date()).getUTCFullYear());</script> Daniele Gazzelloni. All Rights Reserved.
                    </p>
                </div>

                <div class="col-md-4">
                    <p class="lastUpdated">Last update: <?php echo getLastUpdateDate(); ?></p>
                    <ul class="widget-social-footer">
                        <li><a href="https://github.com/danielegazzelloni"><i class="fa fa-github fa-fw"></i></a></li>
                        <!-- <li><a href="skype:daniele.0488?chat"><i class="fa fa-skype fa-fw"></i></a></li> -->
                        <li><a href="https://www.linkedin.com/in/danielegazzelloni/en"><i class="fa fa-linkedin fa-fw"></i></a></li>
                        <li><a href="mailto:hello@danielegazzelloni.com"><i class="fa fa-envelope-o"></i></a></li>
                    </ul>
                </div>

            </div><!-- .row -->

        </div><!-- .container -->

    </footer>

    <!-- Footer end -->

</div><!-- .wrapper -->

<!-- Javascript files -->
<!-- jQuery -->
<script src="js/jquery-1.11.0.min.js"></script>
<!-- Bootstrap JS -->
<script src="js/bootstrap.min.js"></script>
<!-- Background slider -->
<script src="js/jquery.backstretch.min.js"></script>
<!-- Smooth scroll -->
<script src="js/smoothscroll.js"></script>
<!-- Moment -->
<script src="js/moment.min.js"></script>
<!-- Text rotator -->
<script src="js/jquery.simple-text-rotator.min.js"></script>
<!-- Additional custom code -->
<script src="js/custom.js"></script>

<script>
    // Avoid triggering Analyitics for localhost
    if (document.location.hostname.indexOf("localhost") < 0) {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-71350231-1', 'auto');
        ga('send', 'pageview');
    }
</script>

</body></html>