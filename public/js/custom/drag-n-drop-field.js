"use strict";

if ($("#drag-n-drop").length) { console.log($("#drag-n-drop").length)
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