var beverage = $("#beverage").val();

var flavor = $("input:radio[name=flavor]:checked").val();

var dob = $("#born").val();

var favoriteColor = $("#color").val();

$(document).ready(function() {
  $("receipt#").submit(function(event) {
    event.preventDefault();
  });

});
