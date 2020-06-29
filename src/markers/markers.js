import { mymap } from './map';
import { db } from './db';
import { startLoader, stopLoader } from '../loader';

const markersArr = db;
const markersLength = markersArr.length;
let randomPlaces = [];
let randomPlacesIndexes = [];

var blueIcon = new L.Icon({
    iconUrl: '../../assets/css/images/marker-icon.png',
    shadowUrl: '../../assets/css/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: '../../assets/css/images/marker-icon-red.png',
    shadowUrl: '../../assets/css/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Create all markers
var markersLayerGroup;
function createMarkers(northEastLat, northEastLng, southWestLat, southWestLng) {
    if (!markersLayerGroup) {
        markersLayerGroup = L.layerGroup().addTo(mymap);
    } else {
        markersLayerGroup.clearLayers();
    }

    if (typeof northEastLat === 'undefined' ||
        typeof northEastLng === 'undefined' ||
        typeof southWestLat === 'undefined' ||
        typeof southWestLng === 'undefined') {
        // detect boundaries and create markers
        const mapBounds = mymap.getBounds();
        createMarkers(mapBounds._northEast.lat, mapBounds._northEast.lng, mapBounds._southWest.lat, mapBounds._southWest.lng)
    } else {
        for (let i = 0; i < markersLength; i++) {
            if (markersArr[i].lat < northEastLat &&
                markersArr[i].lng < northEastLng &&
                markersArr[i].lat > southWestLat &&
                markersArr[i].lng > southWestLng
            ) {
                if (markersArr[i].empty) {
                    var marker = L.marker([markersArr[i].lat, markersArr[i].lng], { icon: redIcon }).bindPopup(markersArr[i].info);
                    markersLayerGroup.addLayer(marker);
                } else {
                    var marker = L.marker([markersArr[i].lat, markersArr[i].lng], { icon: blueIcon }).bindPopup(markersArr[i].info);
                    markersLayerGroup.addLayer(marker);
                }
            }
        }
        // side menu with created layers 
        // var overlay = {'markers': markersLayerGroup};
        // L.control.layers(null, overlay).addTo(mymap);
    }
}
createMarkers();

// Create indexes array for random places
let randomPlacesLength = 0;
while (randomPlacesLength < 14) {
    let randomNum = generateRandomInt(0, markersLength - 1);
    if (!randomPlacesIndexes.includes(randomNum)) {
        randomPlacesIndexes.push(randomNum)
        randomPlaces.push(markersArr[randomNum]);
        randomPlacesLength += 1;
    }
}

function generateRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create 14 random places list 
let randomPlacesContainer = document.getElementsByClassName('random-places');
let randomPlacesArray = [].slice.call(randomPlacesContainer);
let fragment = document.createDocumentFragment();
let itemTemplate = document.createElement('li');
itemTemplate.classList = "random-place";
let nameTemplate = document.createElement('span');
let imageTemplate = document.createElement('img');
// TODO: shows slow in screen. replace with full url???
imageTemplate.src = "./assets/img/play_circle_filled-24px.svg";
imageTemplate.alt = "Go to randomly selected street";

// TODO: loader on based which if slower markers or random places 
// startLoader();

const dynamicRandomPlacesPromise = new Promise((res, rej) => {
    for (let i = 0; i < randomPlacesIndexes.length; i++) {
        const listItem = itemTemplate.cloneNode(true);
        listItem.setAttribute('data-lat', markersArr[randomPlacesIndexes[i]].lat);
        listItem.setAttribute('data-lng', markersArr[randomPlacesIndexes[i]].lng);

        const name = nameTemplate.cloneNode(true);
        name.innerText = markersArr[randomPlacesIndexes[i]].name;

        const image = imageTemplate.cloneNode(true);
        listItem.appendChild(name);
        listItem.appendChild(image);
        fragment.appendChild(listItem);
    }

    randomPlacesArray[0].appendChild(fragment);
    randomPlacesArray[0].setAttribute('data-simplebar', '');
    res();
});

dynamicRandomPlacesPromise.then(() => {
    setTimeout(() => {
        stopLoader();
    }, 1000);
});

// Add event listener to 14 random places to locate them
randomPlacesArray[0].addEventListener('click', function (e) {
    const lat = e.target.getAttribute("data-lat");
    const lng = e.target.getAttribute("data-lng");
    if (lat && lng) {
        goToRandomPlace(lat, lng);
    }
});

function goToRandomPlace(lat, lng) {
    mymap.setView([lat, lng], 16);
    // Create circle
    var circle = L.circleMarker(mymap.getCenter(), {
        radius: 20,
        color: 'red',
        weight: 1,
        fillOpacity: 0.2,
    }).addTo(mymap);
    circle.setLatLng({ lat: lat, lng: lng });

    setTimeout(() => {
        circle.remove()
    }, 2000);
}

// ReCreate markers on zoom in/out
mymap.on('moveend', function (e) {
    const mapBounds = mymap.getBounds();
    createMarkers(mapBounds._northEast.lat, mapBounds._northEast.lng, mapBounds._southWest.lat, mapBounds._southWest.lng);
});