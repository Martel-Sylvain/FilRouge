// BANDS TO SEE

// window.onload = function () {
//     let elementsToColor = JSON.parse(localStorage.getItem('elementsToColor')) || [];
//     elementsToColor.forEach(function (elementId) {
//         const element = document.getElementById(elementId);
//         if (element) {
//             element.classList.add('colored');
//         }
//     });
// }


function goToLineUp(elementId) {
    localStorage.setItem('scrollToElement', elementId);
    window.location.href = 'index-line_up.html';
}

window.onload = function () {
    let elementsToColor = JSON.parse(localStorage.getItem('elementsToColor')) || [];
    elementsToColor.forEach(function (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.add('colored');
        }
    });
};