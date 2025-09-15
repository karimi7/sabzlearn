const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const xMark = document.querySelector('.x-mark');
const darkBG = document.querySelector('#darkbg');
const selectionTitle = document.querySelector(
    '.courses-topbar__selection-title'
);

function closeMenu() {
    navbarMenu.style.right = '-260px';
    darkBG.style.visibility = 'hidden';
    darkBG.style.opacity = '0';
}

navbar.addEventListener('click', () => {
    navbarMenu.style.right = 0;
    darkBG.style.visibility = 'visible';
    darkBG.style.opacity = '0.6';
});

xMark.addEventListener('click', closeMenu);

darkBG.addEventListener('click', closeMenu);
