const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/////FOR SATELLITE VIEW/////    
function satellite() {
    googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    googleSat.addTo(map);
}

//////////  IMAGE OVERLAY/////////
var imageUrl = 'flower.jpg';
var latLngBounds = L.latLngBounds([[40.799311, -74.118464], [40.68202047785919, -74.33]]);
// var latLngBounds = L.latLngBounds([[17.385044, 78.486671],
//     [16.506174, 80.648015],
//     [17.686816, 83.218482]]);
var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
    opacity: 0.8,
    interactive: true
}).addTo(map);
// L.rectangle(latLngBounds).addTo(map);
map.fitBounds(latLngBounds);


imageOverlay.on('click', function(e) {
    alert(e.latlng);
});


