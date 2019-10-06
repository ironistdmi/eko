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