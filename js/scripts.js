$(document).ready(function()
{
  $('#gallery').carousel({interval: 1000});
  $('#carousel-button').click(function()
  {
      playBut = $('#carousel-button');
      if($('#carousel-button').children('span').hasClass('fa-pause'))
      {
        $('#gallery').carousel('pause');
        $("#carousel-button").children('span').removeClass("fa-pause").addClass("fa-play");
      }
      else if($('#carousel-button').children('span').hasClass('fa-play'))
      {
        $('#gallery').carousel('cycle');
        $("#carousel-button").children('span').removeClass("fa-play");
        $("#carousel-button").children('span').addClass("fa-pause")
      }
  });
});
