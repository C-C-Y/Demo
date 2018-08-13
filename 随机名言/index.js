$(document).ready(function () {
    var body = document.body;
    getQuote();
    $("#button").click(function () {
        var colors = [
            "#16a085",
            "#27ae60",
            "#2c3e50",
            "#f39c12",
            "#e74c3c",
            "#9b59b6",
            "#FB6964",
            "#342224",
            "#472E32",
            "#BDBB99",
            "#77B1A9",
            "#73A857"
        ];
        var color = Math.floor(Math.random() * 12);
        color = colors[color];
        setTimeout(getQuote, 0);
        $(body).animate({
            backgroundColor: color
        });
        $(".quote_text,.quote_author,.shareQQ").animate({
            color: color
        });
        $("#button").animate({
            backgroundColor: color
        });
    });

    function getQuote() {
        $.getJSON("https://sslapi.hitokoto.cn?encode=json", function (json) {

            var quote = json["hitokoto"];
            var author = json.from;
            $("#text").html(quote);
            $("#author").html(author);
        });
    }

    $(".shareQQ").on("click", function () {
        window.open(
            "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.baidu.com" +
            "&title=吟游佳句&summary=我发现了一句很漂亮的话，快来看看吧&pics=&site=bshare"
        );
    });
});