// Javascript Document

/* =================================
   SCROLL NAVBAR
=================================== */
(function($) {
$(window).scroll(function(){
    "use strict";
    var b = $(window).scrollTop();
    if( b > 60 ){
        $(".navbar").addClass("is-scrolling");
    } else {
        $(".navbar").removeClass("is-scrolling");
    }
});
$(window).on('load', function () {
	$("body.path-frontpage #navbar-main").addClass("bg-transparent");
    $(window).scroll(function() {  
        var scroll = $(window).scrollTop(); 
        if (scroll >= 50) {
            $("body.path-frontpage #navbar-main").removeClass("bg-transparent");
        } else {
            $("body.path-frontpage #navbar-main").addClass("bg-transparent");
        }
    });
	$("#search-block-form").addClass("close");
    $('#search-block-form').submit(function () {
		var textVal = $("#search_area .form-search").val();
		if((textVal !== 'undefined') && textVal.length > 0){
			$("#search-block-form").removeClass("open");
			$("#search-block-form").addClass("close");
			return true;
		}else{
			$("#search-block-form").removeClass("close");
			$("#search-block-form").addClass("open");
			return false;
		}
	});
	
	$(document).click(function(event) {
		if ( !$(event.target).parents().hasClass('search-form')) {
            $("#search-block-form").addClass("close");
			$("#search-block-form").removeClass("open");	
		}
	});


 });


})(jQuery);

/* =================================
   CAROUSAL
=================================== */
(function($) {
    "use strict";
     $('.jcarousel').jcarousel({
        // Configuration goes here
    });

})(jQuery);

/* =================================
   DATA SPY FOR ACTIVE SECTION                 
=================================== */
(function($) {
    
    "use strict";
    
    $('body').attr('data-spy', 'scroll').attr('data-target', '.fixed-top').attr('data-offset', '11');

})(jQuery);


/* =================================
   HIDE MOBILE MENU AFTER CLICKING 
=================================== */
(function($) {
    "use strict";
    $('.nav.navbar-nav li a').click(function () {
        var $togglebtn = $(".navbar-toggle");
        if (!($togglebtn.hasClass("collapsed")) && ($togglebtn.is(":visible"))){
            $(".navbar-toggle").trigger("click");
        }
    });

})(jQuery);


/* =======================================================
   DOCUMENT READY
======================================================= */

(function($) {
$(document).ready(function() {
  "use strict";

  /* =================================
     SCROLL TO
  =================================== */
  var onMobile;

  onMobile = false;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    onMobile = true;
  }

  if (onMobile === true) {
    jQuery('a.scrollto').click(function (event) {
      jQuery('html, body').scrollTo(this.hash, this.hash, {
        gap: {y: -10},
        animation: {easing: 'easeInOutCubic', duration: 0}
      });
      event.preventDefault();
    });
  } else {
    jQuery('a.scrollto').click(function (event) {
      jQuery('html, body').scrollTo(this.hash, this.hash, {
        gap: {y: -10},
        animation: {easing: 'easeInOutCubic', duration: 1500}
      });
      event.preventDefault();
    });
  }
  
  /* ===========================================================
     BOOTSTRAP FIX FOR IE10 in Windows 8 and Windows Phone 8
  ============================================================== */
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    );
    document.querySelector('head').appendChild(msViewportStyle);
  }

});

})(jQuery);

 
function changeVideo(){ 
  jQuery("#myModal").modal("show");
}

