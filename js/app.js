$(document).foundation();
$(document).ready(function(){
  $('img.colorbox').each(function(){
        var anchor = $('<a/>').attr({'href': this.src}).colorbox({rel:"colorbox", transition:"elastic", slideshow: "tr", height:"70%"});
        $(this).wrap(anchor);
  });
});
