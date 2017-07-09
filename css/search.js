function search() {
  var sport = "sportster";
  var speedy = "speedy";
  var titan = "titan";
  var texas = "super-titan-xxl-texas-edition";
  var econ = "econo-cruise";
  var search = $(".searchbox").val().toLowerCase();
  var sportVal = sport.search(search);
  var speedyVal = speedy.search(search);
  var titanVal = titan.search(search);
  var texasVal = texas.search(search);
  var econVal = econ.search(search);
  //car 1 search
  if (sportVal == -1) {
    $(".car1").addClass("hidden");
  }
  else if (sportVal != -1) {
    $(".car1").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  //car 2 search
  if (speedyVal == -1) {
    $(".car2").addClass("hidden");
  }
  else if (speedyVal != -1) {
    $(".car2").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  //car 3 search
  if (titanVal == -1) {
    $(".car3").addClass("hidden");
  }
  else if (titanVal != -1) {
    $(".car3").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  //car 4 search
  if (texasVal == -1) {
    $(".car4").addClass("hidden");
  }
  else if (texasVal != -1) {
    $(".car4").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  //car 5 search
  if (econVal == -1) {
    $(".car5").addClass("hidden");
  }
  else if (econVal != -1) {
    $(".car5").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  //Nothing Found
  if (econVal == -1 && texasVal == -1 && titanVal == -1 && speedyVal == -1 && sportVal == -1) {
    $(".none").removeClass("hidden");
  }
}
