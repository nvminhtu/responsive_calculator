;(function($, win){
  'use strict';

  var openTarget = $.openTarget = (function() {

    function init(){
      CheckInput();
    }
   
    function CheckInput() {
      $(".numberic").keypress(function (e) {
	     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
	        return false;
	    }
	  });

	  $(".not-space").keypress(function (e) {
	     //if the letter is white space - return false - do nothing
	     if (e.which == 32) {
	        return false;
	    }
	  });
    }
    
    return {
      init: init
    };

  })();

  $(openTarget.init);

})(jQuery, window);

window.onload = function() {
  disableTxt();
};

function disableTxt(){
	document.getElementById("result").disabled = true;
}


