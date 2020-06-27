const loader = document.getElementsByClassName('loader-wrapper');

// if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
//     loader[0].classList.add('hidden');
// }

export function startLoader() {
    loader[0].classList.remove('hidden');
    console.log('startLoader');
}

export function stopLoader() {
    loader[0].classList.add('hidden');
    console.log('stopLoader');
}