// Get the modal
var i_modal = document.getElementById("modal-imsa");
var r_modal = document.getElementById("modal-rice");

// Get the button that opens the modal
var btnIMSA = document.getElementById("btn-imsa");
var btnRice = document.getElementById("btn-rice");

// Get the <span> element that closes the modal
var i_span = document.getElementsByClassName("close")[0];
var r_span = document.getElementsByClassName("close")[1];

//Global variable that stores which button was activated
var active_btn = null;

// When the user clicks the button, open the modal
btnIMSA.onclick = function() {
  i_modal.style.display = "block";
  active_btn = i_modal;
}

btnRice.onclick = function() {
  r_modal.style.display = "block";
  active_btn = r_modal;
}

// When the user clicks on <span> (x), close the modal
i_span.onclick = function() {
  active_btn.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
r_span.onclick = function() {
  active_btn.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == active_btn) {
    active_btn.style.display = "none";
  }
}

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".job")
  for (var i = 0; i<tags.length; i++) {
    var tag = tags[i]
    if ($(tag).offset().top < (3*pageBottom+pageTop)/4) {
      $(tag).addClass("job-fade")
    }
  }
})
