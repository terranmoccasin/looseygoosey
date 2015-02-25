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
      var botPadding = totalPadding - topPadding + 6;
      // TODO(mqhwang): Make some kind of string replace method to pull this into a div template.
      $(img).before(
        '<div class="img-spacer" style="margin-bottom: -6px; height:' + topPadding + 'px;"></div>');
      $(img).after(
        '<div class="img-spacer" style="height:' + botPadding + 'px;"></div>');
      $(img).css({
        'display': 'block',
        // 'border': '1px solid #000',
      });
    });
  });
};

$(document).ready(function() {
  LooseGoosey.adjustImages();
});