var text = "";
var acVal = false;
$(document).ready(function () {
    $("button").click(function () {
        var caculate = $(this).attr("value");
        if (
            caculate !== "ans" &&
            caculate !== "AC" &&
            caculate !== "CE" &&
            caculate != "="
        ) {
            if (acVal == true) {
                text = "";
            }
            text += $(this).attr("value");
            $("input").val(text);
            acVal = false;
        } else if (caculate == "=") {
            result = eval(text);
            $("input").val(result);
            text = "";
            acVal = false;
        } else if (caculate == "ans") {
            ans = result;
            text += caculate;
            $("input").val(text);
            acVal = false;
        } else if (caculate == "AC") {
            text = "0";
            acVal = true;
            $("input").val(text);
        } else {
            text = text.substring(0, text.length - 1);
            $("input").val(text);
        }
    });
});