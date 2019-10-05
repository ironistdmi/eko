'use strict';

var map;
var markers = [];
var shopItems = [];
var setLocation = { lat: 0, lng: 0 };
var currentPosition;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    var marker = new google.maps.Marker({
        position: { lat: position.coords.latitude, lng: position.coords.longitude },
        map: map,
        icon: '../img/pics/map-my-location.png'
    });
    map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
}

function initMap() {
    if ($("#map").length) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "weight": "2.00" }] }, { "featureType": "all", "elementType": "geometry.stroke", "stylers": [{ "color": "#9c9c9c" }] }, { "featureType": "all", "elementType": "labels.text", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#7b7b7b" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#c8d7d4" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#070707" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }]
        });
        if ($("#map.search-map").length) {
            map.setCenter(setShopMarkers());
            getLocation();
        } else if ($("#map.product-map").length) {
            map.setCenter(setProductMarkers());
        }
    }
}

$(".show-on-map").on("click", function (e) {
    e.preventDefault();
    map.setCenter(shopItems[$(this).parents(".shop-item").index()]);
    $(".toggle-map-list div").toggleClass("active");
    $(".shop-block").toggleClass("active");
});

function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: '../img/pics/map-marker.png'
    });
    markers.push(marker);
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function deleteMarkers() {
    setMapOnAll(null);
    markers = [];
}

function setProductMarkers() {
    var el = $(".map-container .map-item");
    setLocation = { lat: parseFloat($(el).attr("data-lat")), lng: parseFloat($(el).attr("data-lng")) };
    addMarker(setLocation);
    return setLocation;
}

function setShopMarkers() {
    $(".shop-list-container .shop-item").each(function (index, el) {
        setLocation = { lat: parseFloat($(el).attr("data-lat")), lng: parseFloat($(el).attr("data-lng")) };
        $(el).on("mouseenter", function () {
            map.setCenter(shopItems[$(this).index()]);
        });
        shopItems.push(setLocation);
        addMarker(setLocation);
    });
    return shopItems[0];
}

function resetMarkers() {
    deleteMarkers();
    markers = [];
    shopItems = [];
    map.setCenter(setShopMarkers());
    getLocation();
}