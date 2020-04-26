$("#mode").on("click", () => {
    $("nav").toggleClass("navbar-light bg-light navbar-dark bg-secondary");
    $("#mode-logo").toggleClass("fa-moon fa-adjust text-secondary");
    $("body").toggleClass("bg-dark text-light");
    $("hr").toggleClass("hr-white");
    $("h1").toggleClass("h1-light title-background");
    $(".center-logo").toggleClass("text-secondary");
    $("#footer").toggleClass("bg-dark bg-secondary");
    // $("#home .col-md-4").toggleClass("title-background");
});