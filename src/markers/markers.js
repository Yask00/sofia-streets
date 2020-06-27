import { mymap } from './map';
import { db } from './db';
import { startLoader, stopLoader } from '../loader';

const markersArr = db;
const markersLength = markersArr.length;
let randomPlaces = [];
let randomPlacesIndexes = [];



// Create all markers
for (let i = 0; i < markersLength; i++) {
    L.marker([markersArr[i].lat, markersArr[i].lng]).addTo(mymap).bindPopup(markersArr[i].info);
}

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
imageTemplate.src = "./assets/img/play_circle_filled-24px.svg";
imageTemplate.alt = "Go to randomly selected street";

// TODO: loader on based which if slower markers or random places 
startLoader();

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

    goToRandomPlace(lat, lng);
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
    circle.setLatLng({lat:lat, lng:lng});

    setTimeout(() => {
        circle.remove()
    }, 2000);
} 