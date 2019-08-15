$(function() {
  $.djshook = function(val) {
    return $('[data-js-hook="' + val + '"]');
  }
});