$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize() {
    if ($(".navpane").css("float") == "none" ){
        $(".navpane").removeClass("hidden");
        $(".navbutton").addClass("hidden");
    }
    else if ($(".navpane").css("float") == "left" ){
      $(".navbutton").removeClass("hidden");
      $(".navpane").addClass("hidden");
    }
}

function navToggle() {
  $(".navpane").toggleClass("hidden");
}
