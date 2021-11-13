(function($) {$(window).on('scroll load', function() {if ($(".navbar").offset().top > 20) {$(".fixed-top").addClass("top-nav-collapse");} else {$(".fixed-top").removeClass("top-nav-collapse");}});$(".navbar-nav li a").on("click", function(event) {if (!$(this).parent().hasClass('dropdown'))$(".navbar-collapse").collapse('hide');});})(jQuery);
window.onload = function() {
  document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
  }, false);
  document.addEventListener("keydown", function(e) {
      //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
          disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
          disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
          disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
          disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
          disabledEvent(e);
      }
  }, false);

  function disabledEvent(e) {
      if (e.stopPropagation) {
          e.stopPropagation();
      } else if (window.event) {
          window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
  }
};