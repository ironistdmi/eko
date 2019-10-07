'use strict';

var generalContainerSelector = {
  animatedFrom: {
    left: '.vp-fade-container-left',
    right: '.vp-fade-container-right',
    bottom: '.vp-fade-container-bottom'
  }
},
    itemClass = 'vp-fade',
    fromDirection = {
  left: {
    x: "-10%",
    opacity: 0
  },
  right: {
    x: "10%",
    opacity: 0
  },
  bottom: {
    y: "10%",
    opacity: 0
  }
};

function appearFromLeft(selector, marker, delay) {
  appearAllFrom('left', selector, marker, delay);
}

function appearFromRight(selector, marker, delay) {
  appearAllFrom('right', selector, marker, delay);
}

function appearFromBottom(selector, marker, delay) {
  appearAllFrom('bottom', selector, marker, delay);
}

function appearAllFrom(direction, containerSelector, marker, delay) {
  $(containerSelector).toArray().forEach(function (item) {
    appearFrom(direction, item, marker, delay);
  });
}

function appearFrom(direction, container, marker, delay) {
  if (typeof TweenMax !== 'undefined') {
    $(container).find(marker ? marker : '.' + itemClass).css('opacity', 0).each(function (index) {
      $(this).viewportChecker({
        classToAdd: '',
        callbackFunction: function callbackFunction(elem, action) {
          TweenMax.fromTo(elem, 0.5, fromDirection[direction], {
            opacity: 1,
            x: "0%",
            y: "0%",
            delay: index * (delay ? delay : 0.2)
          });
        }
      });
    });
  }
}

(function () {
  $(document).ready(function () {
    appearFromBottom('.info-container_bottom');
    appearFromLeft('.info-container_left');
    appearFromRight('.info-container_right');

    appearFromBottom(generalContainerSelector.animatedFrom.bottom);
    appearFromLeft(generalContainerSelector.animatedFrom.left);
    appearFromRight(generalContainerSelector.animatedFrom.right);
  });
})();
'use strict';

$(document).ready(function () {
    // Copy ref link to clipboard
    window.Clipboard = function (window, document, navigator) {
        var textArea, copy;

        function isOS() {
            return navigator.userAgent.match(/ipad|iphone/i);
        }

        function createTextArea(text) {
            textArea = document.createElement('textArea');
            textArea.value = text;
            document.body.appendChild(textArea);
        }

        function selectText() {
            var range, selection;

            if (isOS()) {
                range = document.createRange();
                range.selectNodeContents(textArea);
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.setSelectionRange(0, 999999);
            } else {
                textArea.select();
            }
        }

        function copyToClipboard() {
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }

        copy = function copy(text) {
            createTextArea(text);
            selectText();
            copyToClipboard();
        };

        return {
            copy: copy
        };
    }(window, document, navigator);

    var clickboardTimer;
    $('.toggle-messenger-menu .telephone-number').on('click', function () {
        clearTimeout(clickboardTimer);
        Clipboard.copy($(this).find(".copy-text").text());
        $(".copy-to-clickboard").addClass("show");
        clickboardTimer = setTimeout(function () {
            $(".copy-to-clickboard").removeClass("show");
        }, 2000);
    });
});
"use strict";

if ($("#drag-n-drop").length) {
    $(".drag-n-drop-slick").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        focusOnSelect: true,
        nextArrow: '<div class="slick-arrow arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934"><g id="noun_back_1971165" transform="translate(-1.681 -553)"><g id="Group_997" data-name="Group 997" transform="translate(1.681 553)"><path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff"/></g></g></svg></div>',
        prevArrow: '<div class="slick-arrow arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934"><g id="noun_back_1971165" transform="translate(-1.681 -553)"><g id="Group_997" data-name="Group 997" transform="translate(1.681 553)"><path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff"/></g></g></svg></div>',
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    var filename = $('#drag-n-drop input[type=file]').val().split('\\').pop();
    var slideIndex = 0;
    var reader = new FileReader();
    reader.onload = function (e) {
        addSlickItem(e.target.result, slideIndex);
        slideIndex++;
    };
    $(".drag-n-drop-container").on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $(".drag-n-drop-container").on('dragenter', function (e) {
        $(this).addClass("drag-over");
    });
    $(".drag-n-drop-container").on('dragover', function (e) {
        $(this).addClass("drag-over");
    });
    $(".drag-n-drop-container").on('dragleave', function (e) {
        $(this).removeClass("drag-over");
    });
    $("#drag-n-drop input[type=file]").on("change", function () {
        $(".drag-n-drop-container").removeClass("drag-over");
        if (this.files && this.files[0]) reader.readAsDataURL(this.files[0]);
    });
    $(".drag-n-drop-container").on('drop', function (e) {
        $(this).removeClass("drag-over");
        if (e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files[0]) reader.readAsDataURL(e.originalEvent.dataTransfer.files[0]);
    });
}

function addSlickItem(fileImage, slideIndex) {
    $(".drag-n-drop-slick").slick("slickAdd", "<div class='drop-item' id='drop-item-" + slideIndex + "' data-index='" + slideIndex + "'><a class='drop-delete' href='#'><svg height='10' width='10' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 47.971 47.971' style='enable-background:new 0 0 47.971 47.971;' xml:space='preserve'><g><path d='M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z' fill='#a3a3a3'/></g></svg></a><img src=" + fileImage + "></div>");
    $("#drop-item-" + slideIndex + " .drop-delete").on("click", function (e) {
        e.preventDefault();
        $('.drag-n-drop-slick').slick('slickRemove', $(this).parents(".drop-item").index(".drop-item:not(.slick-cloned)"));
        checkPlaceholder();
    });
    checkPlaceholder();
}

function checkPlaceholder() {
    if ($(".drop-item").length == 0) $(".drag-n-drop-paceholder").removeClass("disabled");else $(".drag-n-drop-paceholder").addClass("disabled");
}
"use strict";

$(document).ready(function () {
   if ($(".drag-n-drop-verification").length) {
      var reader = new FileReader();

      reader.onload = function (e) {
         return;
      };
      $(".drag-n-drop-verification").each(function (index, dragElement) {
         var thisContainerInner = $(dragElement);

         var thisFilename;

         thisContainerInner.find('input[type=file]').on("change", function () {

            $(".drag-n-drop-container").removeClass("drag-over");
            if (this.files && this.files[0]) {
               thisFilename = this.files[0].name;

               addDropItem(thisFilename, thisContainerInner);
               reader.readAsDataURL(this.files[0]);
            }
         });
         thisContainerInner.on('dragenter', function (e) {
            $(this).addClass("drag-over");
         });
         thisContainerInner.on('dragover', function (e) {
            $(this).addClass("drag-over");
         });
         thisContainerInner.on('dragleave', function (e) {
            $(this).removeClass("drag-over");
         });
         thisContainerInner.on('drop', function (e) {
            $(this).removeClass("drag-over");
            if (e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files[0]) {
               thisFilename = e.originalEvent.dataTransfer.files[0].name;

               addDropItem(thisFilename, thisContainerInner);
               reader.readAsDataURL(e.originalEvent.dataTransfer.files[0]);
            }
         });
      });

      $(".drag-n-drop-container").on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
         e.preventDefault();
         e.stopPropagation();
      });
   }

   function addDropItem(thisFilename, thisContainerInner) {
      if (thisContainerInner.find(".dropped-item .drop-item").length) {
         thisContainerInner.find(".dropped-item .drop-item").remove();
      }
      thisContainerInner.find(".dropped-item").append("\n         <div class=\"drop-item\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"noun_Document_2887989\" width=\"15\" height=\"15.833\" viewBox=\"0 0 15 15.833\"><defs><style>.cls-1{fill:#2b2c33}</style></defs><g id=\"Group_1252\" data-name=\"Group 1252\"><g id=\"Group_1251\" data-name=\"Group 1251\"><path id=\"Path_2432\" d=\"M1211 1826h4.039v.5H1211z\" class=\"cls-1\" data-name=\"Path 2432\" transform=\"translate(-1208.671 -1822.488)\"/><path id=\"Path_2433\" d=\"M1211 2847h4.039v.5H1211z\" class=\"cls-1\" data-name=\"Path 2433\" transform=\"translate(-1208.671 -2841.525)\"/><path id=\"Path_2434\" d=\"M607 5183h9.8v.5H607z\" class=\"cls-1\" data-name=\"Path 2434\" transform=\"translate(-605.833 -5173.033)\"/><path id=\"Path_2435\" d=\"M607 7176h9.8v.5H607z\" class=\"cls-1\" data-name=\"Path 2435\" transform=\"translate(-605.833 -7162.199)\"/><path id=\"Path_2436\" d=\"M607 6233h9.8v.5H607z\" class=\"cls-1\" data-name=\"Path 2436\" transform=\"translate(-605.833 -6221.012)\"/><path id=\"Path_2437\" d=\"M14.5 3.442h-2.852V.5H3.373v.483h5.764l2.994 3.129v10.234H14.5zM12.152.871V2.94h2zm-.525 14.458V4.425H8.779v-2.94H.5v13.844zm-.34-11.408l-2-2.067v2.067zM2.869.983V0H12l3 3.09v11.76h-2.869v.983H0V.983z\" class=\"cls-1\" data-name=\"Path 2437\"/></g></g></svg>\n            <span>" + thisFilename + "</span>\n            <a href=\"#\">X</a>\n         </div>\n      ");
      thisContainerInner.find(".dropped-item .drop-item").on("click", function (e) {
         e.preventDefault();
         thisContainerInner.find(".dropped-item .drop-item ").remove();
         checkPlaceholder();
      });
      checkPlaceholder(thisContainerInner);
   }

   function checkPlaceholder(thisContainerInner) {
      if (thisContainerInner.find(".dropped-item .drop-item").length == 0) thisContainerInner.find(".drag-n-drop-paceholder").removeClass("disabled");else thisContainerInner.find(".drag-n-drop-paceholder").addClass("disabled");
   }
});
"use strict";

$(document).ready(function () {

  if ($(".count-description").length) {
    $(".count-description").each(function (index, el) {
      $(el).on("keyup", function () {
        $(el).next(".button-container").find(".count-description-number").text($(this).val().length);
      });
    });
  }

  if ($(".settings-wrapper button[type='submit']").length) {
    var changeSuccess;
    $(".settings-wrapper button[type='submit']").on("click", function (e) {
      e.preventDefault();
      clearTimeout(changeSuccess);
      var thisButton;
      if ($(this).prev("input, .form-wrapper").length > 0) {
        thisButton = $(this).prev("input, .form-wrapper");
      } else if ($(this).parent().prev("textarea").length > 0) {
        thisButton = $(this).parent().prev("textarea");
      }
      $(".change-success").css({
        "top": thisButton.offset().top + "px",
        "opacity": "1"
      });
      changeSuccess = setTimeout(function () {
        $(".change-success").css({
          "opacity": "0"
        });
      }, 5000);
    });
  }

  if ($(".toggle-archive-button").length) {
    $(".toggle-archive-button").on("click", function (e) {
      e.preventDefault();
      $(".archived-products").toggleClass("active");
    });
  }

  var deleteProductItem;
  $("a[data-toggle='modal']").on("click", function (e) {
    e.preventDefault();
    deleteProductItem = $(this).parents(".my-item");
  });

  $(".modal .delete-button").on("click", function () {
    $(this).parents(".modal").modal("hide");
    deleteProductItem.addClass("deleted-item");
    setTimeout(function () {
      deleteProductItem.fadeOut();
    }, 2000);
  });

  if ($(".stars-container")) {
    $(".stars-container .stars-items label").on("click", function () {
      $(".stars-container #stars-count").text($(this).index("label") + 1);
    });
  }

  if ($(".feedback-form.disabled")) {
    $(".feedback-form.disabled").on("click", function () {
      $(this).removeClass("disabled");
    });
  }

  if ($("#filter-toggle").length) {
    $("#filter-toggle, .background-fixed-shadow, .close-filter").on("click", function (e) {
      e.preventDefault();
      $("#filter-content-toggle").toggleClass("disabled");
      $(".background-fixed-shadow").toggleClass("disabled");
    });
  }

  if ($(".profile-aside").length) {
    $(".toggle-dashboard, .aside-fixed-shadow").on("click", function (e) {
      e.preventDefault();
      $(".profile-aside").toggleClass("open");
      $(".toggle-dashboard").toggleClass("open");
      $(".aside-fixed-shadow").toggleClass("disabled");
    });
  }

  if ($(".search-page").length) {
    $(".search-page .input-container input").on("keyup", function () {
      if ($(this).val().length) $(".search-page .input-container .search-result").removeClass("disabled");else $(".search-page .input-container .search-result").addClass("disabled");
    });
  }

  if ($(".toggle-map-list").length) {
    $(".toggle-map-list div").on("click", function () {
      $(this).parent().find("div").toggleClass("active");
      $(".shop-block").toggleClass("active");
    });
  }

  $(".menu-toggle-trigger, .header-fixed-shadow").on("click", function () {
    $(".menu-toggle-trigger").toggleClass("open");
    $(".header-navigation").toggleClass("open");
    $(".header-fixed-shadow").toggleClass("disabled");
  });

  $("input[type='reset']").on("click", function () {
    $('.bs-custom-select').selectpicker('val', '');
  });

  $(".range-container #rating-input").on("input", function () {
    $(".range-container .range-value span").text($(this).val());
  });

  $(".verify-hint .close-svg").on("click", function () {
    $(this).parent().hide();
  });

  $(".chat-items-container .chat-item, .chat-fixed-shadow, .messenger-container .back-chat-button").on("click", function () {
    $(".chats-container").toggleClass("open");
    $(".chat-fixed-shadow").toggleClass("disabled");
  });

  $(".messages-input input[type='text']").on("keyup", function () {
    if ($(this).val().length) {
      $(".messages-input .button-container button").removeClass("disable");
    } else {
      $(".messages-input .button-container button").addClass("disable");
    }
  });

  $(".more-setting, .phone-setting").on("click", function (e) {
    e.preventDefault();
    if ($(this).find(".toggle-messenger-menu").hasClass("open")) $(".more-setting, .phone-setting").find(".toggle-messenger-menu").removeClass("open");else {
      $(".more-setting, .phone-setting").find(".toggle-messenger-menu").removeClass("open");
      $(this).find(".toggle-messenger-menu").addClass("open");
    }
  });

  $(".new-chat-button").on("click", function () {
    $(".start-new-chat").toggleClass("visible");
  });
  if ($(".profile-background").length & $(window).width() > 1199 & $(".profile-page.fullscreen-block").height() > $(window).height()) {
    var profileBackgroundScroll = false;
    $('body').on('mousewheel DOMMouseScroll', function (e) {
      if (!profileBackgroundScroll) {
        if (typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
          if (e.originalEvent.detail > 0) {
            profileBackgroundScroll = true;
            $(".profile-background").addClass("small-background");
          }
        } else if (typeof e.originalEvent.wheelDelta == 'number') {
          if (e.originalEvent.wheelDelta < 0) {
            profileBackgroundScroll = true;
            $(".profile-background").addClass("small-background");
          }
        }
      }
    });
    $(document).on("scroll", function () {
      if ($(window).scrollTop() == 0) {
        profileBackgroundScroll = false;
        $(".profile-background").removeClass("small-background");
      }
    });
  }

  $("input[type='reset']").on("click", function () {
    $(".range-container .range-value span").text(1);
  });
  $("a[href='#']").on("click", function (e) {
    e.preventDefault();
  });
});

if ($(".messages-container").length) {
  var messenger = $(".messages-container");
  messenger.scrollTop(messenger.prop('scrollHeight'));
}
'use strict';

$(document).ready(function () {
    var input = document.querySelector('#countryCode');
    if (input) {
        var iti = window.intlTelInput(input, {
            preferredCountries: []
        });

        var refreshCountryCode = function refreshCountryCode() {
            var data = iti.getSelectedCountryData();
            var arrow = document.querySelector('.iti-arrow');
            var countryCode = document.querySelector('.iti-country-code');

            if (countryCode) {
                countryCode.textContent = '+' + data.dialCode;
            } else {
                var ccContainer = document.createElement('div');
                ccContainer.className = 'iti-country-code';
                ccContainer.textContent = '+' + data.dialCode;

                document.querySelector('.selected-flag').insertBefore(ccContainer, arrow);
            }

            $(input).val('+' + data.dialCode);
        };

        input.addEventListener('countrychange', refreshCountryCode);
        refreshCountryCode();
    }

    if ($(".product-near-scroll").length) {
        $(".product-near-scroll").mCustomScrollbar({
            axis: "x",
            documentTouchScroll: true,
            /*theme: "orange",*/
            mouseWheel: { enable: false }
        });
    }
});

$('.bs-custom-select').selectpicker();
'use strict';

var map;
var markers = [];
var shopItems = [];
var setLocation = { lat: 0, lng: 0 };
var currentPosition;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    var marker = new google.maps.Marker({
        position: { lat: position.coords.latitude, lng: position.coords.longitude },
        map: map,
        icon: '../img/pics/map-my-location.png'
    });
    map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
}

function initMap() {
    if ($("#map").length) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "weight": "2.00" }] }, { "featureType": "all", "elementType": "geometry.stroke", "stylers": [{ "color": "#9c9c9c" }] }, { "featureType": "all", "elementType": "labels.text", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#7b7b7b" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#c8d7d4" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#070707" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }]
        });
        if ($("#map.search-map").length) {
            map.setCenter(setShopMarkers());
            getLocation();
        } else if ($("#map.product-map").length) {
            map.setCenter(setProductMarkers());
        }
    }
}

$(".show-on-map").on("click", function (e) {
    e.preventDefault();
    map.setCenter(shopItems[$(this).parents(".shop-item").index()]);
    $(".toggle-map-list div").toggleClass("active");
    $(".shop-block").toggleClass("active");
});

function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: '../img/pics/map-marker.png'
    });
    markers.push(marker);
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function deleteMarkers() {
    setMapOnAll(null);
    markers = [];
}

function setProductMarkers() {
    var el = $(".map-container .map-item");
    setLocation = { lat: parseFloat($(el).attr("data-lat")), lng: parseFloat($(el).attr("data-lng")) };
    addMarker(setLocation);
    return setLocation;
}

function setShopMarkers() {
    $(".shop-list-container .shop-item").each(function (index, el) {
        setLocation = { lat: parseFloat($(el).attr("data-lat")), lng: parseFloat($(el).attr("data-lng")) };
        $(el).on("mouseenter", function () {
            map.setCenter(shopItems[$(this).index()]);
        });
        shopItems.push(setLocation);
        addMarker(setLocation);
    });
    return shopItems[0];
}

function resetMarkers() {
    deleteMarkers();
    markers = [];
    shopItems = [];
    map.setCenter(setShopMarkers());
    getLocation();
}
'use strict';

$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        focusOnSelect: true,
        variableWidth: true
    });

    $('.init-slick-slider').slick({
        /*slidesToShow: 4,*/
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        /*infinite: false,*/
        /*focusOnSelect: true,*/
        variableWidth: true,
        nextArrow: '<div class="slick-arrow arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934"><g id="noun_back_1971165" transform="translate(-1.681 -553)"><g id="Group_997" data-name="Group 997" transform="translate(1.681 553)"><path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff"/></g></g></svg></div>',
        prevArrow: '<div class="slick-arrow arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934"><g id="noun_back_1971165" transform="translate(-1.681 -553)"><g id="Group_997" data-name="Group 997" transform="translate(1.681 553)"><path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff"/></g></g></svg></div>'
    });

    var searchTimeout;
    var slickSearchAnimation = false;
    $(".search-block-container .search-wrapper input").on("keyup", function () {
        if (!slickSearchAnimation) {
            slickSearchAnimation = true;
            $(".init-slick-slider").height($(".init-slick-slider").height());
            $(".init-slick-slider").addClass("enable-animation");
        }
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(function () {
            reloadSlickItems();
            $(".init-slick-slider").removeClass("enable-animation");
            $(".init-slick-slider").height("unset");
            slickSearchAnimation = false;
        }, 1000);
    });

    function reloadSlickItems() {
        while ($(".slick-slide:not(.slick-cloned)").length > 0) {
            $('.init-slick-slider').slick('slickRemove', $(".slick-slide:not(.slick-cloned)").length - 1);
        }
        for (var i = 0; i < 3; i++) {
            addSlickItems();
        }
    }
    function addSlickItems() {
        $(".init-slick-slider").slick("slickAdd", '\n    <div class="item">\n        <div class="info-wrapper">\n          <div class="image-container">\n              <img src="img/pics/product-slider-main.png" alt="">\n          </div>\n          <div class="text-container">\n              <h5> <svg xmlns="http://www.w3.org/2000/svg" width="15.764" height="15.764" viewBox="0 0 15.764 15.764">\n                      <g id="" data-name="Layer 2" transform="translate(0 0)">\n                          <path id="" data-name="Path 924" d="M29.764,14.882a7.882,7.882,0,1,0-7.882,7.882,7.882,7.882,0,0,0,7.882-7.882Zm-14.888,0a7.006,7.006,0,1,1,7.006,7.006,7.006,7.006,0,0,1-7.006-7.006Z" transform="translate(-14 -7)" fill="#a3a3a3"></path>\n                          <path id="" data-name="Path 925" d="M29.32,24.071a.438.438,0,0,0,.438-.438V19.452a1.752,1.752,0,0,0,.876-1.441h0v-.175l-.153-.622a.246.246,0,0,0,0-.053l-.723-2.829A.438.438,0,0,0,29.32,14H22.314a.438.438,0,0,0-.438.333l-.705,2.829a.245.245,0,0,0,0,.053L21,17.836v.175h0a1.752,1.752,0,0,0,.876,1.445v4.177a.438.438,0,0,0,.438.438Zm-.648-5.285h-.061a.74.74,0,0,1-.136-.057l-.031-.048a.876.876,0,0,1-.162-.123h0a.837.837,0,0,1-.145-.18h1.511a.876.876,0,0,1-.477.39.793.793,0,0,1-.49,0Zm-5.22-.324-.057.07-.048.048-.079.061-.044.035-.123.066h0a.876.876,0,0,1-.35.074.727.727,0,0,1-.14,0,.7.7,0,0,1-.158-.044.841.841,0,0,1-.46-.394H23.5V18.4Zm3.613-.959h-2.5l.328-2.627h1.8a.289.289,0,0,0,0,.061Zm-.49.876a.876.876,0,0,1-1.515,0Zm3.039-.959a.158.158,0,0,0,0,.048V17.5H27.949l-.381-2.627h1.406Zm-6.958-2.544h1.353L23.68,17.5H22v-.031a.245.245,0,0,0,0-.053Zm.1,4.817a1.607,1.607,0,0,0,.328-.035.876.876,0,0,0,.1-.026,1.593,1.593,0,0,0,.206-.061l.109-.048.175-.1.1-.066a1.139,1.139,0,0,0,.158-.131l.083-.074a2.189,2.189,0,0,0,.153-.188l.044-.053a1.42,1.42,0,0,0,.074-.14,1.752,1.752,0,0,0,3.065,0,1.419,1.419,0,0,0,.074.14l.044.053a1.634,1.634,0,0,0,.158.188c0,.026.053.048.079.074a1.139,1.139,0,0,0,.158.131l.1.066.175.1.109.048a1.594,1.594,0,0,0,.206.061.876.876,0,0,0,.1.026,1.607,1.607,0,0,0,.328.035v3.5H27.131V21.006a.438.438,0,0,0-.438-.438H24.941a.438.438,0,0,0-.438.438V23.2H22.752Zm2.627,3.5V21.444h.876V23.2Z" transform="translate(-17.935 -10.935)" fill="#a3a3a3"></path>\n                      </g>\n                  </svg> German meat factory</h5>\n              <a href="profile-product.html" tabindex="-1">\n                  <h3>' + $(".search-block-container .search-wrapper input").val() + '</h3>\n              </a>\n              <p>The freshest eggs from the best chicken producer in Germany</p>\n              <div class="price-container">\n                  <div class="price-content">\n                      <span class="big-green-span">50 UAH</span>\n                      <span class="big-span">/</span>\n                      <span>1 KG</span>\n                  </div>\n                  <div class="title-review">\n                      <div class="review-rating">\n                          <svg id="" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">\n                              <path id="" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b"></path>\n                          </svg>\n                          <span>4.9</span>\n                          <span class="all-review">(493)</span>\n                      </div>\n                      <div class="map-distance">\n                          <svg id="" xmlns="http://www.w3.org/2000/svg" width="18.02" height="14.921" viewBox="0 0 18.02 14.921">\n                              <g id="" data-name="Group 10" transform="translate(0 0)">\n                                  <g id="" data-name="Group 1" transform="translate(0 0)">\n                                      <path id="" data-name="Path 926" d="M12.115,13.606a4.457,4.457,0,0,0-6.966,5.462l.02.02,3.483,4.928a.413.413,0,0,0,.317.158.385.385,0,0,0,.317-.158l3.483-4.928.02-.02A4.491,4.491,0,0,0,12.115,13.606Zm-.02,5.046L8.949,23.105,5.8,18.652a3.657,3.657,0,0,1,.554-4.492A3.67,3.67,0,0,1,12.1,18.652Z" transform="translate(-4.495 -12.3)" fill="#b2b2b2"></path>\n                                  </g>\n                                  <g id="" data-name="Group 2" transform="translate(2.554 2.751)">\n                                      <path id="" data-name="Path 927" d="M19.221,26.2a1.821,1.821,0,1,0,0,3.641h0a1.821,1.821,0,1,0,0-3.641Zm0,2.869h0A1.029,1.029,0,1,1,20.25,28.04,1.035,1.035,0,0,1,19.221,29.069Z" transform="translate(-17.4 -26.2)" fill="#b2b2b2"></path>\n                                  </g>\n                                  <g id="" data-name="Group 3" transform="translate(9.669 0)">\n                                      <path id="" data-name="Path 928" d="M60.411,13.606a4.467,4.467,0,0,0-6.313,0,.392.392,0,1,0,.554.554,3.68,3.68,0,0,1,5.759,4.492l-3.166,4.453-3.166-4.453a.4.4,0,1,0-.653.455l3.483,4.928a.413.413,0,0,0,.317.158.385.385,0,0,0,.317-.158l3.483-4.928.02-.02A4.455,4.455,0,0,0,60.411,13.606Z" transform="translate(-53.357 -12.3)" fill="#b2b2b2"></path>\n                                  </g>\n                                  <g id="" data-name="Group 4" transform="translate(11.657 2.771)">\n                                      <path id="" data-name="Path 929" d="M65.221,29.941A1.821,1.821,0,1,0,63.4,28.121a1.816,1.816,0,0,0,1.821,1.821ZM64.192,28.1a1.029,1.029,0,1,1,1.029,1.029h0A1.01,1.01,0,0,1,64.192,28.1Z" transform="translate(-63.4 -26.3)" fill="#b2b2b2"></path>\n                                  </g>\n                                  <g id="" data-name="Group 5" transform="translate(3.662 13.734)">\n                                      <path id="" data-name="Path 930" d="M23.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,23.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,23.594,82.492Z" transform="translate(-23 -81.7)" fill="#b2b2b2"></path>\n                                  </g>\n                                  <g id="" data-name="Group 6" transform="translate(6.037 13.734)">\n                                      <path id="" data-name="Path 931" d="M35.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,35.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,35.594,82.492Z" transform="translate(-35 -81.7)" fill="#b2b2b2"></path>\n                                  </g>\n                                  <g id="" data-name="Group 7" transform="translate(8.411 13.734)">\n                                      <path id="" data-name="Path 932" d="M47.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,47.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,47.594,82.492Z" transform="translate(-47 -81.7)" fill="#b2b2b2"></path>\n                                  </g>\n                                  <g id="" data-name="Group 8" transform="translate(10.786 13.734)">\n                                      <path id="" data-name="Path 933" d="M59.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,59.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,59.594,82.492Z" transform="translate(-59 -81.7)" fill="#b2b2b2"></path>\n                                  </g>\n                                  <g id="" data-name="Group 9" transform="translate(13.161 13.734)">\n                                      <path id="" data-name="Path 934" d="M71.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,71.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,71.594,82.492Z" transform="translate(-71 -81.7)" fill="#b2b2b2"></path>\n                                  </g>\n                              </g>\n                          </svg>\n                          <span>1,3 km</span>\n                      </div>\n                      <a href="#" class="saved-link active" tabindex="-1">\n                          <svg id="" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">\n                              <path id="" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2"></path>\n                          </svg>\n                          <span>Saved</span>\n                      </a>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class="button-container">\n          <a class="link-button" href="#" tabindex="-1">Learn more</a>\n          <a class="link-button button-fill" href="#" tabindex="-1">Message</a>\n      </div>\n    </div>\n    \n    ');
    }
});
/*

function addSlickItem(fileImage, slideIndex) {
    
    checkPlaceholder();
}

$("#drop-item-" + slideIndex + " .drop-delete").on("click", function(e) {
    e.preventDefault();
    
    checkPlaceholder();
});

*/