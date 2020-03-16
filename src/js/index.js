import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import onepageScroll from './jquery.onepage-scroll.js';


$(document).ready(function () {
  if (window.location.hash) {
    window.location.hash = '';
  }
  var donePage = {
    isDone1: false,
    isDone2: false,
    isDone3: false,
    isDone4: false,
    isDone5: false,
    isDone6: false
  }
  $(".main").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 0,
    loop: false,
    beforeMove: function (index) {
      switch (index) {
        case 1:
          break;
        case 2:
          if (donePage.isDone2 === true) {
            return false
          }
          $('.js-print').html('');
          $('.js-author').html('');
          break;
        case 3:
          if (donePage.isDone3 === true) {
            return false
          }
          $('.js-title-page3 div.underline-title-creator').remove();
          break;
        case 4:
          if (donePage.isDone4 === true) {
            return false
          }
          $('.js-title-page4 div.underline-title-creator').remove();
          $('.js-waiting').removeClass('active');
          break;
        case 5:
          if (donePage.isDone5 === true) {
            return false
          }
          $('.js-title-page5 div.underline-title-creator').remove();
          $(' .js-mechanisms').removeClass('active');
          break;
        case 6:
          break;
      }
    },
    afterMove: function (index) {
      switch (index) {
        case 1:
          break;
        case 2:
          if (donePage.isDone2 === true) {
            return false
          }
          donePage.isDone2 = true;
          var currentString = '';
          var currentString2 = '';
          var currentString4 = '';
          var mainText1 = 'Самый лучший способ';
          var mainText2 = ' заставить';
          var mainText3 = ' человека';
          var mainText4 = ' что-то сделать';
          var mainText5 = ' — это сделать так, чтобы он сам захотел это сделать.';
          var authorText = 'Дэйл Карнеги';
          $('.js-print').append('<div class="line-1"></div>')
          setTimeout(function () {
            (function iterate(i) {
              var arr = divideString(mainText1);
              setTimeout(function () {
                currentString += arr[i];
                $('.js-print').html(currentString)
                if (i < arr.length - 1) {
                  iterate(i + 1);
                } else {
                  $('.js-print').append('<span class="red js-red-1"> </span>');
                  (function iterate(i) {
                    var arr2 = divideString(mainText2);
                    setTimeout(function () {
                      currentString2 += arr2[i];
                      $('.js-red-1').html(currentString2);
                      if (i < arr2.length - 1) {
                        iterate(i + 1);
                      } else {
                        (function iterate(i) {
                          var arr = divideString(mainText3);
                          setTimeout(function () {
                            var oldHtml = $('.js-print').html();
                            $('.js-print').html(oldHtml + arr[i])
                            if (i < arr.length - 1) {
                              iterate(i + 1);
                            } else {
                              $('.js-print').append('<span class="red js-red-2"></span>');
                              (function iterate(i) {
                                var arr4 = divideString(mainText4);
                                setTimeout(function () {
                                  currentString4 += arr4[i];
                                  $('.js-red-2').html(currentString4);
                                  if (i < arr4.length - 1) {
                                    iterate(i + 1);
                                  } else {
                                    (function iterate(i) {
                                      var arr5 = divideString(mainText5);
                                      setTimeout(function () {
                                        var oldHtml = $('.js-print').html();
                                        $('.js-print').html(oldHtml + arr5[i])
                                        if (i < arr5.length - 1) {
                                          iterate(i + 1);
                                        } else {
                                          (function iterate(i) {
                                            var arr6 = divideString(authorText);
                                            setTimeout(function () {
                                              var oldHtml = $('.js-author').html();
                                              $('.js-author').html(oldHtml + arr6[i])
                                              if (i < arr6.length - 1) {
                                                iterate(i + 1);
                                              } else {
                                                $('.js-author').parent().append('<div class="line-2"></div>')
                                              }
                                            }, 40);
                                          })(0);
                                        }
                                      }, 40);
                                    })(0);
                                  }
                                }, 40);
                              })(0);
                            }
                          }, 40)
                        })(0);
                      }
                    }, 40);
                  })(0);
                }
              }, 40);
            })(0);
          }, 1200);
          break;
        case 3:
          if (donePage.isDone3 === true) {
            return false
          }
          donePage.isDone3 = true;
          $('.js-title-page3').append('<div class="underline-title-creator"></div>');
          // $('.js-gif-mobile').attr("src","./../../../img/bg-3-rotate.gif");
          // $('.js-gif').attr("src","./../../../img/bg-3.gif");
          $('.js-gif-mobile').attr("src","./img/bg-3-rotate.gif");
          $('.js-gif').attr("src","./img/bg-3.gif");
          break;
        case 4:
          if (donePage.isDone4 === true) {
            return false
          }
          donePage.isDone4 = true;
          $('.js-title-page4').append('<div class="underline-title-creator"></div>');
          setTimeout(function () {
            $('.js-waiting').addClass('active');
          }, 300);
          break;
        case 5:
          if (donePage.isDone5 === true) {
            return false
          }
          donePage.isDone5 = true;
          setTimeout(function () {
            $('.js-title-page5').append('<div class="underline-title-creator"></div>');
            $(' .js-mechanisms').addClass('active');
          }, 300);
          break;
        case 6:
          break;
      }
    }
  });
});


function divideString(string) {
  return string.split('');
}