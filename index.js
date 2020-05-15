// For day and night mode

$("#mode").on("click", () => {
    $("nav").toggleClass("navbar-light bg-light navbar-dark bg-secondary");
    $("#mode-logo").toggleClass("fa-moon fa-adjust text-secondary");
    $("body").toggleClass("bg-dark text-light");
    $("hr").toggleClass("hr-white");
    $("h1").toggleClass("h1-light title-background");
    $(".center-logo").toggleClass("text-secondary");
    $("#footer").toggleClass("bg-dark bg-secondary");
    $(".example").toggleClass("bg-dark bg-light text-dark text-light")
});

// typewriter code

(function () {
    var name = "Lakshay";
    var index = 0;
    var print = "";
    (function type() {
        print = name.slice(0,++index);
        $("#typewriterText").text(print);
        if(print.length === name.length) {
            index = 0;
        }
        setTimeout(type,300);
    }());
}());