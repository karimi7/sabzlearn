import {
    getAndShowAllCourses,
    getAndShowPopularCourses,
    getAndShowPresellCourses,
    getAndShowArticles,
    getAndShowNavbarMenus,
    // getAndShowCategoryCourses,
} from './funcs/shared.js';

const selectionList = document.querySelector('.courses-topbar__selection-list');
const landingTitle = document.querySelector('.landing__title');
const landingCoursesCount = document.querySelector('#courses-counter');
const landingMinutesCount = document.querySelector('#minutes-counter');
const landinguserCount = document.querySelector('#user-counter');

window.addEventListener('load', () => {
    let landingText = 'ما به هر قیمتی دوره آموزشی تولید نمی‌کنیم!';
    let typeIndex = 0;

    typewriter(landingText, typeIndex);
    makeCounter(40, landingCoursesCount);
    makeCounter(3320, landingMinutesCount);
    makeCounter(3071, landinguserCount);

    getAndShowAllCourses();
    getAndShowPopularCourses();
    getAndShowPresellCourses();
    getAndShowArticles();
    getAndShowNavbarMenus().then(data => {
        console.log(data);
        
    });
    // getAndShowCategoryCourses();
});

function typewriter(text, index) {
    if (index < text.length) {
        landingTitle.innerHTML += text[index];
        index++;
    }

    setTimeout(() => {
        typewriter(text, index);
    }, 100);
}

function makeCounter(max, elem) {
    let counter = 0;
    const interval = setInterval(() => {
        if (counter === max) {
            clearInterval(interval);
        }

        elem.innerHTML = counter;
        counter++;
    }, 0.5);
}
