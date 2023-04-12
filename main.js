const menuEmail = document.querySelector('.navbar-email');
const menuAllSector = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const menuAllSectorMobile = document.querySelector('.mobile-menu');
const asideCarIcon = document.querySelector('.product-detail');

 

menuEmail.addEventListener('click', toggleDestokMenu);
menuAllSector.addEventListener('click', toggleMenuAllSectorMobile);
menuCarIcon.addEventListener('click', toggleAsideCarIcon);

function toggleDestokMenu() {
desktopMenu.classList.toggle('inactive')
}

function toggleMenuAllSectorMobile() {

    const isAsideCarClosed = asideCarIcon.classList.contains('inactive')

    if (!isAsideCarClosed) {
        asideCarIcon.classList.add('inactive')
    };

    menuAllSectorMobile.classList.toggle('inactive')
}

function toggleAsideCarIcon() {
    const isMenuAllsectorMobileClosed = menuAllSectorMobile.classList.contains('inactive');

    if (menuAllSectorMobile.classList.contains('inactive'));

    asideCarIcon.classList.toggle('inactive')

    }