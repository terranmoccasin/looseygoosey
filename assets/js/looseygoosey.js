var LooseGoosey = LooseGoosey || {};

LooseGoosey.constants = {
  LINE_HEIGHT: 24
};

LooseGoosey.adjustImages = function() {
  $.each($('.post img'), function(index, img) {
    $(img).on('load', function() {
      var height = $(img).height();
      var totalPadding = (Math.floor(height / LooseGoosey.constants.LINE_HEIGHT) + 1)
          * LooseGoosey.constants.LINE_HEIGHT - height;
      var topPadding = Math.floor(totalPadding / 2);
      var botPadding = totalPadding - topPadding;
      $(img).parent().css({
        'margin': 0,
        'padding-top': topPadding,
        'padding-bottom': botPadding,
        'padding-left': 0,
        'padding-right': 0,
        'height': height,
        'margin-bottom': LooseGoosey.constants.LINE_HEIGHT
      });
    });
  });
};

$(document).ready(function() {
  LooseGoosey.adjustImages();
});