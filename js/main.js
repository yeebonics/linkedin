$(".pill").on("click", function () {
  var pillText = $(this).children("p").text();
  $(".pill").removeClass("active");
  $(this).addClass("active");

  $(".cal-container").removeClass("active");
  $("#" + pillText).addClass("active");
})

$("#chat2").on("click", function () {
  $(this).removeClass("notification");
  $("#chat-notification").css("display", "none")
})

$(".chat").on("click", function () {
  $(this).toggleClass("active");
})

$(".meeting-pill").on("click", function (e) {
  e.stopPropagation();
  if ($(this).attr("id") == "pill-accept") {
    $("#scheduled1").addClass("active")
    $(".pill, .cal-container").removeClass("active")
    $(".pill:nth-child(2), .cal-container:nth-child(2)").addClass("active");
    $("#empty-schedule").remove();
    $("#confirmation2").text("You accepted Jeffrey's meeting invitation")

  } else {
    $("#confirmation2").text("You declined Jeffrey's meeting invitation")
  }
  $("#meeting2").css("display", "none");
  $(".meeting-pill-container, #empty-schedule").remove();

  $('#header-em').text("That's the end of our test")
  $('#header-text').text(" - help us out by answering our quick survey!")
  $("#instructions-text").html("<span class='highlight'>We want to hear from you</span> message us or answer our quick survey");
  setTimeout(() => {
    $(".overlay").addClass("active");
  }, 1000);
 
 
})

$("#submit").on("click", function () {
  if ($(this).hasClass("cancel")) {
    return false;
  }
  $(".btn-text").text("Scheduling");
  $("#loader").addClass("active");
  setTimeout(() => {
    $("#loader").removeClass("active");
    $(".btn-text").text("Success");
    $("#success-check").addClass("active");
  }, 1000);

  // reset form
  setTimeout(() => {
    $("#input-event").text("Enter event name")
    $("#input-desc").text("Enter a short description for your meeting")
    $("#form-date").text("Today")
    $("#form-time").text("12:00")
    $("#form-hour").text("Hour")
    $("#form-minutes").text("Minutes")

    $(".input-pill").remove();
    $(".radio-select").removeClass("active")
    $("#input-event, #input-desc").addClass("inactive");
  }, 1000);

  setTimeout(() => {
    var currentTime = new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });

    $("#submit").text("Schedule");
    $("#meeting-message, .meeting-confirmation").addClass("active");
    $("#meeting1").css("display", "flex");
    $("#Pending > .holder-text").remove();
    $("#time1").text(currentTime);
    $("#chat1").addClass("active");
    $("#meeting-message")[0].scrollIntoView(true);
    $("#test").scrollTop(-100);
    $("#submit").addClass("cancel")
  }, 2000);

  setTimeout(() => {
    var currentTime = new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
    $("#chat2").css("display", "block")
    $("#meeting2").css("display", "flex")
  }, 6000);

  $('#header-em').text("Answer Jeffrey's Invitation")
  $('#header-text').text(" - accept or decline his meeting invitation")
  $("#instructions-text").html("<span class='highlight'>Try the scheduling function</span> by accepting or declining Jeffrey's invitation");

})


$(".close-modal, .modal-btn").on("click", function () {
  $(".overlay").removeClass("active");
})