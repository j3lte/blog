(function($){
  // Caption
  $('.entry').each(function(i){
    $(this).find('img').each(function(){
      var alt = this.alt;

      if (alt){
        $(this).after('<span class="caption">' + alt + '</span>');
      }

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox" rel="gallery' + i + '" />');
    });
  });

  // Gallery
  var play = function(parent, item, callback){
    var width = parent.width();

    item.imagesLoaded(function(){
      var _this = this[0],
        nWidth = _this.naturalWidth,
        nHeight = _this.naturalHeight;

      callback();
      this.animate({opacity: 1}, 500);
      parent.animate({height: width * nHeight / nWidth}, 500);
    });
  };

  $('.gallery').each(function(){
    var $this = $(this),
      current = 0,
      photoset = $this.children('.photoset').children(),
      all = photoset.length,
      loading = true;

    play($this, photoset.eq(0), function(){
      loading = false;
    });

    $this.on('click', '.prev', function(){
      if (!loading){
        var next = (current - 1) % all;
        loading = true;

        play($this, photoset.eq(next), function(){
          photoset.eq(current).animate({opacity: 0}, 500);
          loading = false;
          current = next;
        });
      }
    }).on('click', '.next', function(){
      if (!loading){
        var next = (current + 1) % all;
        loading = true;

        play($this, photoset.eq(next), function(){
          photoset.eq(current).animate({opacity: 0}, 500);
          loading = false;
          current = next;
        });
      }
    });
  });

  /* counter */

  var startDateTime = new Date(2016,6,27); // YYYY (M-1) D H m s ms (start time and date from DB)
  var startStamp = startDateTime.getTime();

  var newDate = new Date();
  var newStamp = newDate.getTime();

  var timer;

  function updateClock() {
      newDate = new Date();
      newStamp = newDate.getTime();
      var diff = Math.round((newStamp-startStamp)/1000);

      var d = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */

      document.getElementById("progress").innerHTML = "<div class=\"counter\">" + d + "</div>days of saying &quot;not today&quot;";
  }

  updateClock();
  setInterval(updateClock, 24 * 3600 * 1000);
})(jQuery);
