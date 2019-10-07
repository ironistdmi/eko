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