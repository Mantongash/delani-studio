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

  // Portfolio items description

  // **Portfolio item one
  $(".portfolio-box-1").mouseenter(function() {
    $(".description-1").show(500);
  });
  $(".portfolio-box-1").mouseleave(function() {
    $(".description-1").hide(1000);
  });

  // **Portfolio item two
  $(".portfolio-box-2").mouseenter(function() {
    $(".description-2").show(500);
  });
  $(".portfolio-box-2").mouseleave(function() {
    $(".description-2").hide(1000);
  });

  // **Portfolio item three
  $(".portfolio-box-3").mouseenter(function() {
    $(".description-3").show(500);
  });
  $(".portfolio-box-3").mouseleave(function() {
    $(".description-3").hide(1000);
  });

  // **Portfolio item four
  $(".portfolio-box-4").mouseenter(function() {
    $(".description-4").show(500);
  });
  $(".portfolio-box-4").mouseleave(function() {
    $(".description-4").hide(1000);
  });

  // **Portfolio item one
  $(".portfolio-box-5").mouseenter(function() {
    $(".description-5").show(500);
  });
  $(".portfolio-box-5").mouseleave(function() {
    $(".description-5").hide(1000);
  });

  // **Portfolio item one
  $(".portfolio-box-6").mouseenter(function() {
    $(".description-6").show(500);
  });
  $(".portfolio-box-6").mouseleave(function() {
    $(".description-6").hide(1000);
  });
  // **Portfolio item one
  $(".portfolio-box-7").mouseenter(function() {
    $(".description-7").show(500);
  });
  $(".portfolio-box-7").mouseleave(function() {
    $(".description-7").hide(1000);
  });

  // **Portfolio item one
  $(".portfolio-box-8").mouseenter(function() {
    $(".description-8").show(500);
  });
  $(".portfolio-box-8").mouseleave(function() {
    $(".description-8").hide(1000);
  });
});
