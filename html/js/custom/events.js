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