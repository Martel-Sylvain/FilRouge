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



window.onload = function () {
    let elementsToColor = JSON.parse(localStorage.getItem('elementsToColor')) || [];
    elementsToColor.forEach(function (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.add('colored');
        }
    });
}
