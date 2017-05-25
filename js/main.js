$(document).ready(function () {

    var geoOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumWait: 2000,     // max wait time for desired accuracy
        maximumAge: 0,          // disable cache
        desiredAccuracy: 30,    // meters
        fallbackToIP: true     // fallback to IP if Geolocation fails or rejected
    }
    
    geolocator.locate(geoOptions, function (err, location) {
        location = ([location.coords.latitude, location.coords.longitude]);
        showLoc(location);
    });

    function showLoc(location) {
        console.log(location);
    }

});
