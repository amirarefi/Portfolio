$(function() {
	
	if ($(window).width()>355) {
		var x1 = $('nav').offset().left + $('nav').width();
		var y1 = $('nav').offset().top + $('nav').height();
		var x2 = $('.grid-item--1').offset().left + $('.grid-item--1').width();
		var y2 = $('.grid-item--1').offset().top;
		$('line').attr({
			'x1': x1,
			'y1': y1-15,
			'x2': x2+15,
			'y2': y2
		});
	}

	else {
			var bodyWidth=$('body').width()-15;
			$('line').attr({
					'x1': 15,
					'y1': 73,
					'x2': bodyWidth,
					'y2': 73
				});
		}
	
	if ($(window).width()>767) {
		$("#desc1, #desc2, #desc3, #desc4, #desc5").addClass('project-description').hide();
		$('#charcoal').addClass('content-1');
		$('#youthCalc').addClass('content-2');
		$('#gameranting').addClass('content-3');
		$('#ram').addClass('content-4');
		$('#EziCode').addClass('content-5');

		$('.grid-item').hover(function(){
			$(this).find('p.project-description').stop(true, false).delay(200).fadeIn(200);
			},function(){
				$(this).find('p.project-description').stop(true, false).hide();
		});

		$('.grid-item--1').hover(function(){
			$(this).find('.content-1').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-1').stop(true, false).animate({
				'margin-top':'70px'
					},300);
		});

		$('.grid-item--2').hover(function(){
			$(this).find('.content-2').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-2').stop(true, false).animate({
				'margin-top':'120px'
					},300);
		});

		$('.grid-item--3').hover(function(){
			$(this).find('.content-3').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-3').stop(true, false).animate({
				'margin-top':'70px'
					},300);
		});

		$('.grid-item--4').hover(function(){
			$(this).find('.content-4').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-4').stop(true, false).animate({
				'margin-top':'70px'
					},300);
		});

		$('.grid-item--5').hover(function(){
			$(this).find('.content-5').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-5').stop(true, false).animate({
				'margin-top':'60px'
					},300);
		});		
	}

	else {
			$('#charcoal').addClass('content-original').css('margin-top', '5px');
			$('#youthCalc').addClass('content-original').css('margin-top', '5px');
			$('#gameranting').addClass('content-original').css('margin-top', '5px');
			$('#ram').addClass('content-original').css('margin-top', '5px');
			$('#EziCode').addClass('content-original').css('margin-top', '5px');
	}

	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: 15
	});

	$(function(){
		$(window).scroll(function(){
			var aTop = $('nav').height();
			if($(this).scrollTop()>=aTop){
			    $('.up-button').fadeIn(600).removeClass('hide-me');
			    // instead of alert you can use to show your ad
			    // something like $('#footAd').slideup();
			}
			else {
				$('.up-button').fadeOut(400).addClass('hide-me');
			}
  });
});

	$(window).resize(function() {
	
		if ($(window).width()>355) {
				var x1 = $('nav').offset().left + $('nav').width();
				var y1 = $('nav').offset().top + $('nav').height();
				var x2 = $('.grid-item--1').offset().left + $('.grid-item--1').width();
				var y2 = $('.grid-item--1').offset().top;
				$('line').attr({
					'x1': x1,
					'y1': y1-15,
					'x2': x2+15,
					'y2': y2
				});
			}
		else {
			var bodyWidth=$('body').width()-15;
			$('line').attr({
					'x1': 15,
					'y1': 73,
					'x2': bodyWidth,
					'y2': 73
				});
		}

		if ($(window).width()<768) {
			$('#desc1, #desc2, #desc3, #desc4, #desc5').removeClass('project-description').show();
			$('#charcoal').removeClass('content-1').addClass('content-original').css('margin-top', '5px');
			$('#youthCalc').removeClass('content-2').addClass('content-original').css('margin-top', '5px');
			$('#gameranting').removeClass('content-3').addClass('content-original').css('margin-top', '5px');
			$('#ram').removeClass('content-4').addClass('content-original').css('margin-top', '5px');
			$('#EziCode').removeClass('content-5').addClass('content-original').css('margin-top', '5px');		
		}
		else {
			$("#desc1, #desc2, #desc3, #desc4, #desc5").addClass('project-description').hide();
			$('#charcoal').addClass('content-1').removeClass('content-original').css('margin-top', '70px');
			$('#youthCalc').addClass('content-2').removeClass('content-original').css('margin-top', '120px');
			$('#gameranting').addClass('content-3').removeClass('content-original').css('margin-top', '70px');
			$('#ram').addClass('content-4').removeClass('content-original').css('margin-top', '70px');
			$('#EziCode').addClass('content-5').removeClass('content-original').css('margin-top', '60px');
			$('.grid-item').hover(function(){

			$(this).find('p.project-description').stop(true, false).delay(200).fadeIn(200);
			},function(){
				$(this).find('p.project-description').stop(true, false).hide();
		});

		$('.grid-item--1').hover(function(){
			$(this).find('.content-1').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-1').stop(true, false).animate({
				'margin-top':'70px'
					},300);
		});

		$('.grid-item--2').hover(function(){
			$(this).find('.content-2').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-2').stop(true, false).animate({
				'margin-top':'120px'
					},300);
		});

		$('.grid-item--3').hover(function(){
			$(this).find('.content-3').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-3').stop(true, false).animate({
				'margin-top':'70px'
					},300);
		});

		$('.grid-item--4').hover(function(){
			$(this).find('.content-4').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-4').stop(true, false).animate({
				'margin-top':'70px'
					},300);
		});

		$('.grid-item--5').hover(function(){
			$(this).find('.content-5').stop(true, false).animate({
				'margin-top':'10px'
			},300);
		}, function(){
			$(this).find('.content-5').stop(true, false).animate({
				'margin-top':'60px'
					},300);
		});	
		}

		$('.grid').masonry({
			  itemSelector: '.grid-item',
			  transitionDuration: '0.6s',
			  columnWidth: 15
		});	
	});


    var $window = $(window);
	var scrollTime = 0.6;
	var scrollDistance = 300;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});

	});
});


(function() // Code in a function to create an isolate scope
{
var speed = 500;
var moving_frequency = 15; // Affects performance !
var links = document.getElementsByTagName('a');
var href;
for(var i=0; i<links.length; i++)
{   
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
    {
        links[i].onclick = function()
        {
            var element;
            var href = this.attributes.href.nodeValue.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                var hop_count = speed/moving_frequency
                var getScrollTopDocumentAtBegin = getScrollTopDocument();
                var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(var i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        var hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
            }

            return false;
        };
    }
}

var getScrollTopElement =  function (e)
{
    var top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
    }

    return top;
};

var getScrollTopDocument = function()
{
    return document.documentElement.scrollTop + document.body.scrollTop;
};
})();