

$(document).ready(function() {
  $("#print").submit(function(event) {
    event.preventDefault();
    console.log("insubmit")
    var result = $("select#beverage").val();
    console.log(result);
    $("#output").text(result);
  });
});
