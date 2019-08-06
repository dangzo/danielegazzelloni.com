$(function() {
  pathname = window.location.pathname;
  $('a[href="' + pathname + '"]').addClass('active');
});