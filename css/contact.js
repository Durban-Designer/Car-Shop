function contact() {
  $(".textbox").each(function(index, element){
    var x = $(this).val();
    console.log("textbox number " + index + ":" + x);
  });
  console.log("Message: " + $(".message").val());
}
