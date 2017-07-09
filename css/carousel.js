var i = 0;
function delay(a) {
  setTimeout(function(){}, i * a);
  i++;
};

function carousel() {
      $(".carousel").each(function() {
        $(".carousel").removeClass("visible");
        $(this).addClass("visible");
        delay(10000);
      });
    };

carousel();
