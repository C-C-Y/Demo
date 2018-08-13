$(document).ready(function () {
    var IP = returnCitySN.cip;

    $.getJSON(
      "https://free-api.heweather.com/s6/weather/now?", {
        location: IP,
        key: "e8ecfc087d264fd9ad97312fa8398c94"
      },
      function (data) {
        var location = data.HeWeather6[0].basic.location;
        $("#location").html(location);
        var weather = data.HeWeather6[0].now["cond_txt"];
        $("#now_weather").html(weather);
        $("#tem").html(data.HeWeather6[0].now.fl);
        $("#water").html(data.HeWeather6[0].now.hum);
        $("#wind_direction").html(data.HeWeather6[0].now["wind_dir"]);
        $("#wind_spead").html(data.HeWeather6[0].now["wind_spd"]);
      }
    );
    $.getJSON(
      "https://free-api.heweather.com/s6/weather/lifestyle?", {
        location: IP,
        key: "e8ecfc087d264fd9ad97312fa8398c94"
      },
      function (data) {
        $("#text").html(data.HeWeather6[0].lifestyle[0].txt);
      }
    );
  });