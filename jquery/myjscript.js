var isVisible = false;
$('#back_to_top').click(function(){
    $(window).scrollTop(0);
});
$(window).scroll(function(){
     var shouldBeVisible = $(window).scrollTop()>200;
     if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $('#back_to_top').show();
     } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('#back_to_top').hide();
    }
});