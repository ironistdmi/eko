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