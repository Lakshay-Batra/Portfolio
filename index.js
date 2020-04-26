$("#mode").on("click", () => {
    $("nav").toggleClass("navbar-light bg-light navbar-dark bg-secondary");
    $("#mode-logo").toggleClass("fa-moon fa-adjust");
    $("body").toggleClass("bg-dark text-light");
    $("hr").toggleClass("hr-white");
    $("h1").toggleClass("h1-light");
    $(".center-logo").toggleClass("text-secondary")
    $("#footer").toggleClass("bg-dark bg-secondary")
});