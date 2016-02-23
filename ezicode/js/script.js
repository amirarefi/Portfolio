// Scroller

var bookmarkscroll={
    setting: {duration:1000, yoffset:-49}, //{duration_of_scroll_milliseconds, offset_from_target_element_to_rest}
    topkeyword: '#top', //keyword used in your anchors and scrollTo() to cause script to scroll page to very top

    scrollTo:function(dest, options, hash){
        var $=jQuery, options=options || {}
        var $dest=(typeof dest=="string" && dest.length>0)? (dest==this.topkeyword? 0 : $('#'+dest)) : (dest)? $(dest) : [] //get element based on id, topkeyword, or dom ref
        if ($dest===0 || $dest.length==1 && (!options.autorun || options.autorun && Math.abs($dest.offset().top+(options.yoffset||this.setting.yoffset)-$(window).scrollTop())>5)){
            this.$body.animate({scrollTop: ($dest===0)? 0 : $dest.offset().top+(options.yoffset||this.setting.yoffset)}, (options.duration||this.setting.duration), function(){
                if ($dest!==0 && hash)
                    location.hash=hash
            })
        }
    },

    urlparamselect:function(){
        var param=window.location.search.match(/scrollto=[\w\-_,]+/i) //search for scrollto=divid
        return (param)? param[0].split('=')[1] : null
    },
    
    init:function(){
        jQuery(document).ready(function($){
            var mainobj=bookmarkscroll
            mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
            var urlselectid=mainobj.urlparamselect() //get div of page.htm?scrollto=divid
            if (urlselectid) //if id defined
                setTimeout(function(){mainobj.scrollTo(document.getElementById(urlselectid) || $('a[name='+urlselectid+']:eq(0)').get(0), {autorun:true})}, 100)
            $('a[href^="#"]').each(function(){ //loop through links with "#" prefix
                var hashvalue=this.getAttribute('href').match(/#\w+$/i) //filter links at least 1 character following "#" prefix
                hashvalue=(hashvalue)? hashvalue[0].substring(1) : null //strip "#" from hashvalue
                if (this.hash.length>1){ //if hash value is more than just "#"
                    var $bookmark=$('a[name='+this.hash.substr(1)+']:eq(0)')
                    if ($bookmark.length==1 || this.hash==mainobj.topkeyword){ //if HTML anchor with given ID exists or href==topkeyword
                        if ($bookmark.length==1 && !document.all) //non IE, or IE7+
                            $bookmark.html('.').css({position:'absolute', fontSize:1, visibility:'hidden'})
                        $(this).click(function(e){
                            mainobj.scrollTo((this.hash==mainobj.topkeyword)? mainobj.topkeyword : $bookmark.get(0), {}, this.hash)
                            e.preventDefault()
                        })
                    }
                }
            })
        })
    }
}

bookmarkscroll.init()

// End - Scroller

// Portfolio

$(function () {
    var filterList = {
    
        init: function () {
        
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });             
        
        },
        
        hoverEffect: function () {
        
            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
                function () {
                    $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');             
                },
                function () {
                    $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');                               
                }       
            );              
        
        }

    };
    
    // Run the show!
    filterList.init();
    
    
});

// End - Portfolio