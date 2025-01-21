// JavaScript Document
$(document).ready(function () {
  /* navigation */
  document.addEventListener("click", function (e) {
    /* Hamburger menu */
    if (e.target.classList.contains("hamburger-toggle")) {
      e.target.children[0].classList.toggle("active");
    }
  });
  $(".navbar-toggler").click(function () {
    $("html").toggleClass("nav-menu-open overflow-hidden");
    $(".header").toggleClass("nav-menu-open");

    // setTimeout(() => {
    // 	var header_height = $(".header").innerHeight();
    // 	$(".navbar .navbar-collapse.show").css({"height": "calc(100vh - "+ header_height +"px)"});
    // }, 500);
  });
  /* navigation */

  $(
    ".country-money-dropdown .search-country-money-filter .search-country-field"
  ).on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".country-money-dropdown .dropdown-menu li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $(".country-money-dropdown .dropdown-menu li").click(function (e) {
    $(
      ".country-money-dropdown .search-country-money-filter .search-country-field"
    ).val("");
    $(".country-money-dropdown .dropdown-menu li").show();
    e.preventDefault();
  });

  $(".country-money-dropdown .search-country-money-filter .filter-close").click(
    function (e) {
      $(
        ".country-money-dropdown .search-country-money-filter .search-country-field"
      ).val("");
      $(".country-money-dropdown .dropdown-menu li").show();
      e.preventDefault();
    }
  );

  /* lazyload */
  var myLazyLoad = new LazyLoad();
  myLazyLoad.update();
  /* lazyload */

  /* OFI Browser */
  objectFitImages();
  /* OFI Browser */
});
