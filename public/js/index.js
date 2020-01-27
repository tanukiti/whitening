$(function () {
    $(".burger-icon").on("click", function () {
        if ($(this).hasClass("is-burger-nav-open")) {
            $(this).removeClass("is-burger-nav-open");
            $(".burger-nav").removeClass("open");
        } else {
            $(this).addClass("is-burger-nav-open");
            $(".burger-nav").addClass("open");
        }
    });
});