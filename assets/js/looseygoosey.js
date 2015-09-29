var LooseyGoosey = LooseyGoosey || {};

LooseyGoosey.constants = {
  LINE_HEIGHT: 24
};

LooseyGoosey.adjustTag = function(tag) {
  var height = $(tag).outerHeight();
  var totalPadding = (Math.floor(height / LooseyGoosey.constants.LINE_HEIGHT) + 1)
      * LooseyGoosey.constants.LINE_HEIGHT - height;
  var topPadding = Math.floor(totalPadding / 2);
  var botPadding = totalPadding - topPadding + 6;
  // TODO(mqhwang): Make some kind of string replace method to pull this into a div template.
  $(tag).before(
    '<div class="spacer" style="margin-bottom: -6px; height:' + topPadding + 'px;"></div>');
  $(tag).after(
    '<div class="spacer" style="height:' + botPadding + 'px;"></div>');
  $(tag).css({
    'display': 'block'
    // 'border': '1px solid #000',
  });
};

LooseyGoosey.adjustTags = function($tags) {
  $.each($tags, function(index, tag) {
    LooseyGoosey.adjustTag(tag);
  });
};

LooseyGoosey.adjustTagsAsync = function($tags) {
  $.each($tags, function(index, tag) {
    $(tag).load(function() {
      LooseyGoosey.adjustTag(tag);
    });
  });
};

if (Prism) {
  Prism.hooks.add('complete', function(env) {
    LooseyGoosey.adjustTag(env.element.parentElement);
  });
}

$(document).ready(function() {
  LooseyGoosey.adjustTagsAsync($('.post img'));
  LooseyGoosey.adjustTagsAsync($('.post iframe'));
});
