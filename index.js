$("#mode").on("click", () => {
    $("nav").toggleClass("navbar-light bg-light navbar-dark bg-secondary");
    $("#mode-logo").toggleClass("far fa-moon fas fa-adjust");
    $("body").toggleClass("bg-dark text-light");
    $("hr").toggleClass("hr-white");
    $("h1").toggleClass("h1-light");
    $("#footer").toggleClass("bg-dark bg-secondary")
});