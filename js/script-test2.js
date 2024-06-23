// CARD SLIDER

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.card_item');
    document.querySelector('.card_slider').appendChild(items[0]);
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.card_item');
    document.querySelector('.card_slider').prepend(items[items.length - 1]);
})




// FLIPPED CARD

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });
});