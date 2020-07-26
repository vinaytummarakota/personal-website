// Get the modal
var i_modal = $("#modal-imsa");
var r_modal = $("#modal-rice");

// Get the button that opens the modal
var btnIMSA = $("#btn-imsa");
var btnRice = $("#btn-rice");

//Global variable that stores which button was activated
var active_btn = null;

// When the user clicks the button, open the modal
btnIMSA.click(function() {
  i_modal.css("display","block");
  active_btn = r_modal;
});

btnRice.click(function() {
  r_modal.css("display","block");
});

// When the user clicks on <span> (x), close the modal
i_modal.on("click", ".close", function() {
  i_modal.css("display", "none");
});

// When the user clicks on <span> (x), close the modal
r_modal.on("click", ".close", function() {
  r_modal.css("display", "none");
});

// When the user clicks anywhere outside of the modal, close it
$(window).click(function(event) {
  if ($(event.target).is(active_btn)) {
    active_btn.css("display", "none");
  }
});

$(document).scroll(function() {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".job")
  for (var i = 0; i<tags.length; i++) {
    var tag = tags[i]
    if ($(tag).offset().top < (3*pageBottom+pageTop)/4) {
      $(tag).addClass("job-fade")
    }
  }
});

// When window size is small, loop through buttons and decrease size and padding
$(window).resize(function(){
  if ($(window).width() <= 540) {
    $(".title-buttons").removeClass("fa-3x").addClass("fa-2x");
    $(".title-buttons").css("padding", "5px");
    $(".school-pic").css("display", "none");

  }
  else {
    $(".title-buttons").removeClass("fa-2x").addClass("fa-3x");
    $(".title-buttons").css("padding", "15px");
  }
});
