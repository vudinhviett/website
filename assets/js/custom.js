let robot_number1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
let robot_number2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
let robot_number = robot_number1 + robot_number2
document.getElementById('robot').innerHTML = `<span> Xác nhận robot</span>            
<input name="entry.1128344313" style="margin-top:8px" type="number" placeholder="${robot_number1} + ${robot_number2} = ">`
function check_robot() {
  let input_robot = document.getElementById('robot').children[1].value
  if (input_robot == robot_number) {
    if (document.getElementsByClassName('input')[0].value == '' || document.getElementsByClassName('input')[1].value == '' || document.getElementsByClassName('input')[2].value == '' || document.getElementsByClassName('input')[3].value == '') {
      alert('Vui lòng nhập đủ thông tin')
    }
    else {
      alert("Chúng tôi sẽ sớm nhận được thông tin của bạn")
      document.getElementById('contact').submit();
      setTimeout(function () {
        window.location.reload();
      }, 1200)
    }
  } else {
    alert("Vui lòng tính lại kết quả!")
  }

}
$("img").on("error", function () {
  $(this).attr("src", "/assets/images/error.png");
});
(function ($) {

  "use strict";

  // Header Type = Fixed
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var header = $('header').height();

    if (scroll >= header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $('img').on('dragstart', function (event) { event.preventDefault(); });

  // Menu Dropdown Toggle
  if ($('.menu-trigger').length) {
    $(".menu-trigger").on('click', function () {
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);
        }
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
    // $(document).on("scroll", onScroll);

    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('.scroll-to-section a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $('html, body').stop().animate({
        scrollTop: (target.offset().top) + 1
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });




  // Acc
  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });






})(window.jQuery);

!function () {
  function detectDevTool(allow) {
    if (isNaN(+allow)) allow = 100;
    var start = +new Date(); // Validation of built-in Object tamper prevention.
    // debugger;
    var end = +new Date(); // Validates too.
    if (isNaN(start) || isNaN(end) || end - start > allow) {
      // input your code here when devtools detected.
    }
  }
  if (window.attachEvent) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      detectDevTool();
      window.attachEvent('onresize', detectDevTool);
      window.attachEvent('onmousemove', detectDevTool);
      window.attachEvent('onfocus', detectDevTool);
      window.attachEvent('onblur', detectDevTool);
    } else {
      setTimeout(argument.callee, 0);
    }
  } else {
    window.addEventListener('load', detectDevTool);
    window.addEventListener('resize', detectDevTool);
    window.addEventListener('mousemove', detectDevTool);
    window.addEventListener('focus', detectDevTool);
    window.addEventListener('blur', detectDevTool);
  }
}();
window.onload = function () {
  document.addEventListener("keydown", function (e) {
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
let fetchFnc = async () => {
  let dataFetch = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=4843bb67827e40e191814976a159a372`)
  let dataJSON = await dataFetch.json()
  // console.log(dataJSON)
  let trangweb = document.getElementById('trangweb')
  trangweb.value = window.location.href
  let ipform = document.getElementById('diachiip')
  ipform.value = dataJSON.country_capital + ', ' + dataJSON.country_name + ' | ' + dataJSON.ip
  document.getElementById('info-footer').innerHTML = 'IP: ' + dataJSON.ip + '. Vị trí: ' + dataJSON.country_capital + ', ' + dataJSON.country_name + '. ISP: ' + dataJSON.isp
}
fetchFnc()


setTimeout(() => {console.clear();console.info('%cViệc làm\nLiên hệ: 0982225907', 'color: red; font-size: 50px; font-weight: bold;')}, 1500)

