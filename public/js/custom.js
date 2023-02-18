(function ($) {
  "use strict";

  // get cookie value and set color mode
  // get cookie
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) == name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  var colorMode = getCookie("color-mode");
  if (colorMode) {
    if (colorMode == "dark") {
      $("body").addClass("dark-mode");
      $(".color-mode-icon").addClass("active");
    }
  } else {
    document.cookie = "color-mode=dark; path=/";
    $("body").addClass("dark-mode");
    $(".color-mode-icon").addClass("active");
  }

  // COLOR MODE
  $(".color-mode").click(function () {
    // set cookie
    if ($("body").hasClass("dark-mode")) {
      document.cookie = "color-mode=light; path=/";
      $(".color-mode-icon").toggleClass("active");
      $("body").toggleClass("dark-mode");
    } else {
      document.cookie = "color-mode=dark; path=/";
      $(".color-mode-icon").toggleClass("active");
      $("body").toggleClass("dark-mode");
    }
  });

  // HEADER
  $(".navbar").headroom();

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  // $(".social-links a").tooltip();

  // PROJECT CAROUSEL
  // $(".owl-carousel").owlCarousel({
  //   items: 1,
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  // });

})(jQuery);
