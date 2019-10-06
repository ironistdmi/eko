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