$(document).ready(function () {

    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(posSuccess, posFail);
    } else {
        alert("Geolocation is not available.");
    }

    function posSuccess (pos) {

        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;

        http.get({
            url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=795fbc06a67ded958fb79568ea4c7eae&units=metric`,
            onload: function () {
                setText(JSON.parse(this.responseText));
            }
        })
    }

    function posFail (e) {
        console.log(e);
    }

    function setText (weather) {
        console.log(weather);

        $(".location-city").text(weather.name);
        $(".temperature").text(weather.main.temp + "°C");
        $(".condition-text").text(weather.weather[0].main);
        $(".condition-icon").attr("src", `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    }

});
