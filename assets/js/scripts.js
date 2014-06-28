// Videos

var videoLink           = $('.video-link');
    videoObject         = $('.video');

    videoLink.click(function(e){
      e.preventDefault();
      videoObject.addClass('hide');

      $(".hide").hide();
      var dataType = $(this).attr('data-type');

      $("." + dataType).show();
    })

