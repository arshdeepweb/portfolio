$(function () {
  // Top section buttons (near mountain image)
  $(".image-wrapper:first-child .addToTop").on("click", function () {
    const mountainImg = $("<img>").attr({
      src: "images/gallery-up.jpg",
      alt: "mountains",
      height: "250",
      width: "400"
    });
    $("#image-gallery").prepend(mountainImg);
  });

  $(".image-wrapper:first-child .addToBottom").on("click", function () {
    const mountainImg = $("<img>").attr({
      src: "images/gallery-up.jpg",
      alt: "mountains",
      height: "250",
      width: "400"
    });
    $("#image-gallery").append(mountainImg);
  });

  // Bottom section buttons (near tree image)
  $(".image-wrapper:last-child .addToTop").on("click", function () {
    const treeImg = $("<img>").attr({
      src: "images/gallery-down.jpg",
      alt: "tree",
      height: "250",
      width: "400"
    });
    $("#image-gallery").prepend(treeImg);
  });

  $(".image-wrapper:last-child .addToBottom").on("click", function () {
    const treeImg = $("<img>").attr({
      src: "images/gallery-down.jpg",
      alt: "tree",
      height: "250",
      width: "400"
    });
    $("#image-gallery").append(treeImg);
  });

  // Toggle Theme functionality
  $("#theme-toggle").on("click", function () {
    $("body").toggleClass("darkMode");
    let iconSpan = $(this).find(".material-symbols-outlined");
    iconSpan.text($("body").hasClass("darkMode") ? "dark_mode" : "light_mode");
  });
});