document.querySelector('#menu-btn').addEventListener('click', displayMenu);
const menuSection = document.querySelector('#menu-Section');

// menuSection.classList.ad

function displayMenu() {

    if (menuSection.classList.contains('open-active')) {
        menuSection.classList.remove('open-active');
    } else {
        menuSection.classList.add('open-active');
    }

}