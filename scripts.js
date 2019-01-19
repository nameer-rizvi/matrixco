$(document).ready(function() {
  smoothScrolling();
  scrollingImg();
  openNav();
  closeNav();
});

function smoothScrolling() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
}

function openNav() {
  document.getElementById("mobileNavId").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobileNavId").style.width = "0";
}

function scrollingImg() {
  // V1
  var div = $("#about");
  var img = $("#aboutImg");
  // var header = document.getElementsByTagName("header")[0];
  var header = $("header");
  $(document).scroll(function() {
    var start = div.offset().top;
    var stop = div.offset().top + div.outerHeight(true) - 1000;
    var y = $(this).scrollTop();
    if (y > start) {
      img.css({ position: "fixed" });
      if (y > stop) {
        img.css("top", stop - y);
      } else {
        img.css("top", 0);
      }
    } else {
      img.css({ position: "relative" });
    }
  });
  // V2
  // var img = $("#aboutImg");
  // var div = $("#about");
  // var imgY = img.offset().top;
  // $(window).scroll(() => {
  //   var divY = div.offset().top + div.outerHeight();
  //   var scrollTop = $(window).scrollTop();
  //   console.log("scrollTop: " + scrollTop, "divY: " + divY);
  //   if (scrollTop > imgY) {
  //     if (scrollTop < divY) {
  //       img.css({
  //         position: "fixed",
  //         top: 0
  //       });
  //     } else {
  //       img.css({
  //         position: "absolute"
  //       });
  //     }
  //   } else
  //     img.css({
  //       position: "relative"
  //     });
  // });
}
