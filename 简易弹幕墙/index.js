function posi_y(y) {
    y = parseInt((Math.random() * 5 + 1) * 10);
    y = y + "%";
    return y;
}

function posi_x(x) {
    x = $("input").val().length;
    x = "-" + x + "em";
    return x;
};
$("#sub").click(function () {
    var txt = $("<span></span>").text($("input").val());
    $("body").prepend(txt);
    $(txt).css({
        position: "absolute",
        top: posi_y(this),
        right: posi_x(this)
    });
    $("span").animate({
        left: posi_x()
    }, 15000, function () {
        $(this).remove();
    });
    $("input").val("");
});

$("#clear").click(function () {
    $("span").remove();
});