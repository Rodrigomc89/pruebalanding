$(document).ready(function(){

	var slidePosition=0;
	var numOfSlide = $("#slide-holder > div").size();

	$("#slide-holder").css("width",(numOfSlide*100)+"%");
	$(".slide").css("width",(100/numOfSlide)+"%");

	for (var a = 0; a < numOfSlide; a++) {
		$('#slide-nav').append(' <a href="javascript: void(0)" class="slide-nav-bt'+(a===0?' active':'')+'">  </a> ');
	}

	$('.slide-nav-bt').click(function() {
		moveSlide($(this));
		clearInterval(autoPlaySlideInter);
	});

	function moveSlide(thisa) {
		var thisindex = $('#slide-nav a').index(thisa);
		$('#slide-holder').css("margin-left", '-'+thisindex +'00%');
		$('#slide-nav a').removeClass('active');
		thisa.addClass('active');
	}

	function autoPlaySlide() {
		slidePosition++;
		if (slidePosition == numOfSlide) { slidePosition = 0; }
		moveSlide($("#slide-nav").children(".slide-nav-bt:eq("+slidePosition+")"));
	}

	var autoPlaySlideInter = setInterval(autoPlaySlide,3000);


  $('#mapaDos').on('click',function(){
    $('#iframeDos').show();
    $( ".text-destino2" ).animate({opacity:"1"},);
    $( ".text-destino1" ).animate({opacity:"0.5"},);
    $('#iframeUno').hide();
  });

  $('#mapaUno').on('click',function(){
    $('#iframeUno').show();
    $( ".text-destino1" ).animate({opacity:"1"},);
    $( ".text-destino2" ).animate({opacity:"0.5"},);
    $('#iframeDos').hide();
  });


  var foopicker = new FooPicker({
    id: 'datepicker',
    dateFormat: 'dd/MM/yyyy',
  });




      var videoPlayButton,
      	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
          video = document.getElementsByTagName('video')[0],
          videoMethods = {
              renderVideoPlayButton: function() {
                  if (videoWrapper.contains(video)) {
      				this.formatVideoPlayButton()
                      video.classList.add('has-media-controls-hidden')
                      videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                      videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
                  }
              },

              formatVideoPlayButton: function() {
                  videoWrapper.insertAdjacentHTML('beforeend', '\
                      <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                          <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                          <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                      </svg>\
                  ')
              },

              hideVideoPlayButton: function() {
                  video.play()
                  videoPlayButton.classList.add('is-hidden')
                  video.classList.remove('has-media-controls-hidden')
                  video.setAttribute('controls', 'controls')
              }
      	}

      videoMethods.renderVideoPlayButton()

      $('.cta').click(function(e){
      		e.preventDefault();		//evitar el eventos del enlace normal
      		var strAncla=$(this).attr('href'); //id del ancla
      			$('body,html').stop(true,true).animate({
      				scrollTop: $(strAncla).offset().top
      			},1000);

      	});


        $(".form-submit").click(function() {
            //alert( "Handler for .click() called." );


            var form_data=$(".divForm :input").serializeArray();
            var emailpixel =  $("#email").val(),
            img = new Image();
            img.width = 0;
            img.height = 0;
            img.src = 'https://secure.adnxs.com/px?id=1143776&seg=18756317&order_id=' + emailpixel + '&t=2';

            img2 = new Image();
            img2.width = 0;
            img2.height = 0;
            img2.src = 'https://cnv.event.prod.bidr.io/log/cnv?tag_id=1072&buzz_key=infinia&value=&segment_key=infinia-721&order=' + emailpixel + '&ord=[CACHEBUSTER]';


            document.body.appendChild(img);
            document.body.appendChild(img2);

            //console.log(form_data);
            var error_free=true;
            for (var input in form_data){
                var element=$("#"+form_data[input]['name']);
                var valid=element.hasClass("valid");
                var error_element=$("span", element.parent());
                if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
                else{error_element.removeClass("error_show").addClass("error");}


            }

            if (!error_free){
                event.preventDefault();
            }

            else{
                $(".send-ok").show();
                $(".main-content").hide();


                $.post( ".php", { "fecha": $("#datepicker").val(),"apellidos": $("#apellidos").val(),"nickmane": $("#nickmane").val(),"phone": $("#phone").val(),"name": $("#name").val(),"email": $("#email").val()})
                    .done(function( data ) {
                        //alert( "Data Loaded: " + data );
                    });
            }
        });


        $('#name').on('input', function() {
            var input=$(this);
            var is_name=input.val();
            if(is_name){input.removeClass("invalid").addClass("valid");}
            else{input.removeClass("valid").addClass("invalid");}
        });
        $('#apellidos').on('input', function() {
            var input=$(this);
            var is_msg=input.val();
            if(is_msg){input.removeClass("invalid").addClass("valid");}
            else{input.removeClass("valid").addClass("invalid");}
        });
        $('#phone').on('input', function() {
            var input=$(this);
            var is_name=input.val();
            if(is_name){input.removeClass("invalid").addClass("valid");}
            else{input.removeClass("valid").addClass("invalid");}
        });

        $('#email').on('input', function() {
            var input=$(this);
            var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var is_email=re.test(input.val());
            if(is_email){input.removeClass("invalid").addClass("valid");}
            else{input.removeClass("valid").addClass("invalid");}
        });

        $('#apellidos').on('input', function() {
          var input=$(this);
          var is_name=input.val();
          if(is_name){input.removeClass("invalid").addClass("valid");}
          else{input.removeClass("valid").addClass("invalid");}
        });
        $('#nickmane').on('input', function() {
          var input=$(this);
          var is_name=input.val();
          if(is_name){input.removeClass("invalid").addClass("valid");}
          else{input.removeClass("valid").addClass("invalid");}
        });

        $('#datepicker').on('input', function() {
          var input=$(this);
          var is_name=input.val();
          if(is_name){input.removeClass("invalid").addClass("valid");}
          else{input.removeClass("valid").addClass("invalid");}
        });






});
