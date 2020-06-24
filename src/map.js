export const mymap = L.map('mapid', {
    zoomControl: false
}).setView([42.696567, 23.339886], 13);

L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    minZoom: 8,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.control.zoom({
    position: 'bottomright'
}).addTo(mymap);

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);