import { mymap } from './map';
import { geoMilev } from './neighbourhoods/geoMilev';

const randomPlaces = document.getElementsByClassName('random-places');
const randomPlacesArray = [].slice.call(randomPlaces)

randomPlacesArray[0].addEventListener('click', function (e) {
    const lat = e.target.getAttribute("data-lat");
    const lng = e.target.getAttribute("data-lng");

    goToRandomPlace(lat, lng);
    geoMilev.openPopup();

});

function goToRandomPlace(lat, lng) {
    mymap.setView([lat, lng], 16);
} 