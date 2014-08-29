$(document).ready(function(){
  $(".arrow").on('click', function() {
    $("#main").moveDown();
  });
  $('#botton_contacta').on('click', function() {
    $("#main").moveTo(2);
  });

  $("#main").onepage_scroll({
     sectionContainer: "section",
     easing: "ease",
     animationTime: 1000,
     pagination: true,
     updateURL: true,
     loop: false,
     keyboard: true,
     responsiveFallback: false,
     direction: "vertical"
  });
});