$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});


var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

//I put these in a loop instead:

for (var index = 0; index < modal.length; index++) {
  (function (index) {
    btn[index].onclick = function () {
      modal[index].style.display = "block";
    }
    span[index].onclick = function () {
      modal[index].style.display = "none";
    }
  })(index);
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}