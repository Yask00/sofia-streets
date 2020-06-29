/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/markers/map.js
const mymap = L.map('mapid', {
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
// CONCATENATED MODULE: ./src/markers/db.js
const db = [
  // Geo Milev, Slatina, Reduta
  {
    name: "ул. Гео Милев",
    info: "<b>Георги Милев Касабов</b>, известен като Гео Милев, е български поет и публицист, основен представител на експресионизма в българската литература. Заедно с други симпатизанти на левицата е убит от полицията по време на Априлските събития през 1925 г. Баща е на детската писателка Леда Милева. Днес в София има квартал, наречен на неговото име.",
    lat: "42.68015",
    lng: "23.376500"
  },
  {
    name: "ул. Гео Милев",
    info: "<b>Георги Милев Касабов</b>, известен като Гео Милев, е български поет и публицист, основен представител на експресионизма в българската литература. Заедно с други симпатизанти на левицата е убит от полицията по време на Априлските събития през 1925 г. Баща е на детската писателка Леда Милева. Днес в София има квартал, наречен на неговото име.",
    lat: "42.68404",
    lng: "23.359852"
  },
  {
    name: "ул. Гео Милев",
    info: "<b>Георги Милев Касабов</b>, известен като Гео Милев, е български поет и публицист, основен представител на експресионизма в българската литература. Заедно с други симпатизанти на левицата е убит от полицията по време на Априлските събития през 1925 г. Баща е на детската писателка Леда Милева. Днес в София има квартал, наречен на неговото име.",
    lat: "42.6817",
    lng: "23.369207"
  },
  {
    name: "ул. Гео Милев",
    info: "<b>Георги Милев Касабов</b>, известен като Гео Милев, е български поет и публицист, основен представител на експресионизма в българската литература. Заедно с други симпатизанти на левицата е убит от полицията по време на Априлските събития през 1925 г. Баща е на детската писателка Леда Милева. Днес в София има квартал, наречен на неговото име.",
    lat: "42.68603",
    lng: "23.354305"
  },
  {
    name: "ул. Николай Коперник",
    info: "<b>Николай Коперник</b>, е полски математик и астроном от времето на Ренесанса. Той е първият Ренесансов учен, който предлага хелиоцентричната система като по този начин слага Слънцето вместо Земята в центъра на Вселената.",
    lat: "42.678145",
    lng: "23.3606"
  },
  {
    name: "ул. Николай Коперник",
    info: "<b>Николай Коперник</b>, е полски математик и астроном от времето на Ренесанса. Той е първият Ренесансов учен, който предлага хелиоцентричната система като по този начин слага Слънцето вместо Земята в центъра на Вселената.",
    lat: "42.680472",
    lng: "23.36174"
  },
  {
    name: "ул. Николай Коперник",
    info: "<b>Николай Коперник</b>, е полски математик и астроном от времето на Ренесанса. Той е първият Ренесансов учен, който предлага хелиоцентричната система като по този начин слага Слънцето вместо Земята в центъра на Вселената.",
    lat: "42.682124",
    lng: "23.36253"
  },
  {
    name: "бул. Шипченски проход",
    info: "<b>Шипченският проход</b> е планински проход в централната част на Шипченска планина (част от Средна Стара планина). Той е една от най-важните транспортни връзки между Северна и Южна България. На билото му се намира Паметникът на свободата, посветен на героичната защита на прохода от българските опълченци и руските войски през Руско-турската освободителна война (1877 – 1878).",
    lat: "42.680416",
    lng: "23.357341"
  },
  {
    name: "бул. Шипченски проход",
    info: "<b>Шипченският проход</b> е планински проход в централната част на Шипченска планина (част от Средна Стара планина). Той е една от най-важните транспортни връзки между Северна и Южна България. На билото му се намира Паметникът на свободата, посветен на героичната защита на прохода от българските опълченци и руските войски през Руско-турската освободителна война (1877 – 1878).",
    lat: "42.678003",
    lng: "23.3667"
  },
  {
    name: "бул. Шипченски проход",
    info: "<b>Шипченският проход</b> е планински проход в централната част на Шипченска планина (част от Средна Стара планина). Той е една от най-важните транспортни връзки между Северна и Южна България. На билото му се намира Паметникът на свободата, посветен на героичната защита на прохода от българските опълченци и руските войски през Руско-турската освободителна война (1877 – 1878).",
    lat: "42.67537",
    lng: "23.374529"
  },
  {
    name: "бул. Шипченски проход",
    info: "<b>Шипченският проход</b> е планински проход в централната част на Шипченска планина (част от Средна Стара планина). Той е една от най-важните транспортни връзки между Северна и Южна България. На билото му се намира Паметникът на свободата, посветен на героичната защита на прохода от българските опълченци и руските войски през Руско-турската освободителна война (1877 – 1878).",
    lat: "42.684746",
    lng: "23.352154"
  },
  {
    name: "ул. Атанас Узунов",
    info: "<b>Атанас Узунов</b> е роден през 1851 г. в град Одрин. Семейството му се преселва в Цариград (1856). Завръща се в България и работи като учител в Сливен (1872). Влиза във връзка с Васил Левски и ръководи революционната дейност в района. След смъртта на Васил Левски БРЦК го определя за негов заместник и ръководител на ВРО. Псевдонимите му са Цвятко Крадлеков, Дългия, Иван Конокрадев, Буюклю кара Мустафа, Георги Аргидиадис.",
    lat: "42.693492",
    lng: "23.361043"
  },
  {
    name: "ул. Атанас Узунов",
    info: "<b>Атанас Узунов</b> е роден през 1851 г. в град Одрин. Семейството му се преселва в Цариград (1856). Завръща се в България и работи като учител в Сливен (1872). Влиза във връзка с Васил Левски и ръководи революционната дейност в района. След смъртта на Васил Левски БРЦК го определя за негов заместник и ръководител на ВРО. Псевдонимите му са Цвятко Крадлеков, Дългия, Иван Конокрадев, Буюклю кара Мустафа, Георги Аргидиадис.",
    lat: "42.690188",
    lng: "23.363864"
  },
  {
    name: "ул. Атанас Узунов",
    info: "<b>Атанас Узунов</b> е роден през 1851 г. в град Одрин. Семейството му се преселва в Цариград (1856). Завръща се в България и работи като учител в Сливен (1872). Влиза във връзка с Васил Левски и ръководи революционната дейност в района. След смъртта на Васил Левски БРЦК го определя за негов заместник и ръководител на ВРО. Псевдонимите му са Цвятко Крадлеков, Дългия, Иван Конокрадев, Буюклю кара Мустафа, Георги Аргидиадис.",
    lat: "42.688595",
    lng: "23.36495"
  },
  {
    name: "ул. Атанас Узунов",
    info: "<b>Атанас Узунов</b> е роден през 1851 г. в град Одрин. Семейството му се преселва в Цариград (1856). Завръща се в България и работи като учител в Сливен (1872). Влиза във връзка с Васил Левски и ръководи революционната дейност в района. След смъртта на Васил Левски БРЦК го определя за негов заместник и ръководител на ВРО. Псевдонимите му са Цвятко Крадлеков, Дългия, Иван Конокрадев, Буюклю кара Мустафа, Георги Аргидиадис.",
    lat: "42.684833",
    lng: "23.3649"
  },
  {
    name: "ул. Боян Магесник",
    info: "<b>Боян Магесник</b>, Баян, Боян Мага, известен и с християнското си име Венеамин, е багренороден син на цар Симеон Велики от втория му брак със сестрата на Георги Сурсувул.Той е третият син на първия български цар. Роден е в Преслав около 910 г., възможно е подобно на баща си да е завършил Магнаура, смята се, че починал около 970 г., вероятно в Цариград, жертва на поръчково убийство.",
    lat: "42.695116",
    lng: "23.363017"
  },
  {
    name: "ул. Боян Магесник",
    info: "<b>Боян Магесник</b>, Баян, Боян Мага, известен и с християнското си име Венеамин, е багренороден син на цар Симеон Велики от втория му брак със сестрата на Георги Сурсувул.Той е третият син на първия български цар. Роден е в Преслав около 910 г., възможно е подобно на баща си да е завършил Магнаура, смята се, че починал около 970 г., вероятно в Цариград, жертва на поръчково убийство.",
    lat: "42.695785",
    lng: "23.362888"
  },
  {
    name: "ул. Боян Магесник",
    info: "<b>Боян Магесник</b>, Баян, Боян Мага, известен и с християнското си име Венеамин, е багренороден син на цар Симеон Велики от втория му брак със сестрата на Георги Сурсувул.Той е третият син на първия български цар. Роден е в Преслав около 910 г., възможно е подобно на баща си да е завършил Магнаура, смята се, че починал около 970 г., вероятно в Цариград, жертва на поръчково убийство.",
    lat: "42.693117",
    lng: "23.367866"
  },
  {
    name: "ул. Боян Магесник",
    info: "<b>Боян Магесник</b>, Баян, Боян Мага, известен и с християнското си име Венеамин, е багренороден син на цар Симеон Велики от втория му брак със сестрата на Георги Сурсувул.Той е третият син на първия български цар. Роден е в Преслав около 910 г., възможно е подобно на баща си да е завършил Магнаура, смята се, че починал около 970 г., вероятно в Цариград, жертва на поръчково убийство.",
    lat: "42.689202",
    lng: "23.373842"
  },
  {
    name: "ул. Боян Магесник",
    info: "<b>Боян Магесник</b>, Баян, Боян Мага, известен и с християнското си име Венеамин, е багренороден син на цар Симеон Велики от втория му брак със сестрата на Георги Сурсувул.Той е третият син на първия български цар. Роден е в Преслав около 910 г., възможно е подобно на баща си да е завършил Магнаура, смята се, че починал около 970 г., вероятно в Цариград, жертва на поръчково убийство.",
    lat: "42.686615",
    lng: "23.37638"
  },
  {
    name: "ул. Коста Лулчев",
    info: "<b>Коста Лулчев</b> е български политик, социалдемократ. Роден е на 9 март 1882 г. в Оряхово. Той е един от лидерите на Българска работническа социалдемократическа партия (БРСДП) и е основател на общоработническото дружество „Борец“ (1898 г.). В периода 1924 – 1933 г. е секретар на ЦК на БРСДП (о). От 1913 г. до 1931 г. е народен представител. Главен секретар е на БРСДП (1944 – 1945 г.).",
    lat: "42.677064",
    lng: "23.358232"
  },
  {
    name: "ул. Коста Лулчев",
    info: "<b>Коста Лулчев</b> е български политик, социалдемократ. Роден е на 9 март 1882 г. в Оряхово. Той е един от лидерите на Българска работническа социалдемократическа партия (БРСДП) и е основател на общоработническото дружество „Борец“ (1898 г.). В периода 1924 – 1933 г. е секретар на ЦК на БРСДП (о). От 1913 г. до 1931 г. е народен представител. Главен секретар е на БРСДП (1944 – 1945 г.).",
    lat: "42.676125",
    lng: "23.360978"
  },
  {
    name: "ул. Коста Лулчев",
    info: "<b>Коста Лулчев</b> е български политик, социалдемократ. Роден е на 9 март 1882 г. в Оряхово. Той е един от лидерите на Българска работническа социалдемократическа партия (БРСДП) и е основател на общоработническото дружество „Борец“ (1898 г.). В периода 1924 – 1933 г. е секретар на ЦК на БРСДП (о). От 1913 г. до 1931 г. е народен представител. Главен секретар е на БРСДП (1944 – 1945 г.).",
    lat: "42.677948",
    lng: "23.36506"
  },
  {
    name: "ул. Коста Лулчев",
    info: "<b>Коста Лулчев</b> е български политик, социалдемократ. Роден е на 9 март 1882 г. в Оряхово. Той е един от лидерите на Българска работническа социалдемократическа партия (БРСДП) и е основател на общоработническото дружество „Борец“ (1898 г.). В периода 1924 – 1933 г. е секретар на ЦК на БРСДП (о). От 1913 г. до 1931 г. е народен представител. Главен секретар е на БРСДП (1944 – 1945 г.).",
    lat: "42.680968",
    lng: "23.36711"
  },
]

// CONCATENATED MODULE: ./src/loader.js
const loader = document.getElementsByClassName('loader-wrapper');

// if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
//     loader[0].classList.add('hidden');
// }

function startLoader() {
    loader[0].classList.remove('hidden');
}

function stopLoader() {
    loader[0].classList.add('hidden');
}
// CONCATENATED MODULE: ./src/markers/markers.js




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
// TODO: shows slow n screen. replace with full url???
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
// EXTERNAL MODULE: ./src/modal.js
var modal = __webpack_require__(1);

// CONCATENATED MODULE: ./src/app.js






/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/***/ })
/******/ ]);