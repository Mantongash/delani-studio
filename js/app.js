$(document).ready(function() {
  // Design toggle
  $("#design").click(function() {
    $("#design-text").show(500);
    $(this).hide();
  });
  $("#design-text").click(function() {
    $("#design").show(500);
    $(this).hide();
  });

  // Development toggle
  $("#development").click(function() {
    $("#development-text").show(500);
    $(this).hide();
  });
  $("#development-text").click(function() {
    $("#development").show(500);
    $(this).hide();
  });

  //Product development toggle
  $("#product").click(function() {
    $("#product-text").show(500);
    $(this).hide();
  });
  $("#product-text").click(function() {
    $("#product").show(500);
    $(this).hide();
  });
});
