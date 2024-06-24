// BUTTONS SLIDER

const slider = document.querySelector('.slider');
function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);




// LOCAL STORAGE FOR RUNNING ORDER


// function toggleColorElement(elementId, button) {
//     let elementsToColor = JSON.parse(localStorage.getItem('elementsToColor')) || [];
//     if (elementsToColor.includes(elementId)) {
//         // Retirer l'élément du tableau
//         elementsToColor = elementsToColor.filter(id => id !== elementId);
//         button.classList.remove('button-active');
//         button.textContent = "Add and go to Running Order";
//     } else {
//         // Ajouter l'élément au tableau
//         elementsToColor.push(elementId);
//         button.classList.add('button-active');
//         button.textContent = "Remove from Running Order";
//     }
//     localStorage.setItem('elementsToColor', JSON.stringify(elementsToColor));
//     window.location.href = 'index-running_order.html';
// }

// window.onload = function () {
//     let elementsToColor = JSON.parse(localStorage.getItem('elementsToColor')) || [];
//     elementsToColor.forEach(function (elementId) {
//         const button = document.querySelector(`button[onclick*="${elementId}"]`);
//         if (button) {
//             button.classList.add('button-active');
//             button.textContent = "Remove from Running Order";
//         }
//     });
// }


window.onload = function () {
    let elementsToColor = JSON.parse(localStorage.getItem('elementsToColor')) || [];
    elementsToColor.forEach(function (elementId) {
        const button = document.querySelector(`button[onclick*="${elementId}"]`);
        if (button) {
            button.classList.add('button-active');
            button.textContent = "Remove from Running Order";
        }
    });

    let scrollToElementId = localStorage.getItem('scrollToElement');
    if (scrollToElementId) {
        const slider = document.querySelector('.slider');
        const targetElement = document.getElementById(scrollToElementId);

        if (targetElement) {
            let items = Array.from(document.querySelectorAll('.item'));
            let index = items.indexOf(targetElement.closest('.item'));

            // Adjust slider to the target element
            if (index > 1) {
                for (let i = 0; i < index - 1; i++) {
                    slider.append(items[i]);
                }
            }
        }

        // Remove the scrollToElement from localStorage
        localStorage.removeItem('scrollToElement');
    }
};

function toggleColorElement(elementId, button) {
    let elementsToColor = JSON.parse(localStorage.getItem('elementsToColor')) || [];
    if (elementsToColor.includes(elementId)) {
        elementsToColor = elementsToColor.filter(id => id !== elementId);
        button.classList.remove('button-active');
        button.textContent = "Add and go to Running Order";
    } else {
        elementsToColor.push(elementId);
        button.classList.add('button-active');
        button.textContent = "Remove from Running Order";
    }
    localStorage.setItem('elementsToColor', JSON.stringify(elementsToColor));
    window.location.href = 'index-running_order.html';
}