// Get the modal
const i_modal = $("#modal-imsa");
const r_modal = $("#modal-rice");

// Get the button that opens the modal
const btnIMSA = $("#btn-imsa");
const btnRice = $("#btn-rice");

//Global variable that stores which button was activated
var active_btn = null;

// When the user clicks the button, open the modal
btnIMSA.click(function() {
  i_modal.css("display","block");
  active_btn = i_modal;
});

btnRice.click(function() {
  r_modal.css("display","block");
  active_btn = r_modal;
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
  const pageTop = $(document).scrollTop()
  let pageBottom = pageTop + $(window).height()
  const tags = $(".job")
  for (let i = 0; i<tags.length; i++) {
    let tag = tags[i]
    if ($(tag).offset().top < (3*pageBottom+pageTop)/4) {
      $(tag).addClass("job-fade")
    }
  }
});

function resize_website(){
  if ($(window).width() <= 800) {
    if ($(window).width() <=540) {
      $(".title-buttons").removeClass("fa-3x").addClass("fa-2x");
      $(".title-buttons").css("padding", "5px");
    }
    else {
      $(".title-buttons").removeClass("fa-2x").addClass("fa-3x");
      $(".title-buttons").css("padding", "15px");
    }
    $(".school-pic").css("display", "none");
    $(".modal-content").css("width", "100%");
  }
  else {
    $(".school-pic").css("display", "inline-block");
    $(".modal-content").css("width", "800px");
  }
}

// When window size is small, loop through buttons and decrease size and padding
$(window).on("load", resize_website);

$(window).resize(resize_website);
