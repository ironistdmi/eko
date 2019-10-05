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