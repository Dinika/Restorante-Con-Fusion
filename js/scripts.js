$(document).ready(function()
{
  //Add functionality to the carousel button
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

  //Activating the reserve-modal
  $('#reserve-button').on('click', function()
  {
    $('#reserve-modal').modal('show');
  });

  //Activating the login-modal
  $('#login-button').on('click', function()
  {
    $('#login-modal').modal('show');
  });

});
