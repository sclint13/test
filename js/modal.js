let touchEvent = 'ontouchstart' in window ? 'click' : 'touchstart';
const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close");
const openModal = document.querySelector("#openModal");

window.onload = function() {
    modal.style.display= "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('touchend', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

openModal.onclick = function() {
    modal.style.display= "block";
}


// $('document').on(touchEvent, function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// })