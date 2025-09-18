import { getMe } from './auth.js';
import { isLogin } from './utils.js';

const showUserNameInNavbar = () => {
    const navbarProfielBox = document.querySelector('.main-header__profile');

    const isUserLogin = isLogin();
    if (isUserLogin) {
        const userInfos = getMe().then((data) => {
            // console.log(userInfos);
            navbarProfielBox.setAttribute('hfer', 'index.html');
            navbarProfielBox.innerHTML = `<span class="main-header__profile-text">${data.name}</span>`;
        });
    } else {
        navbarProfielBox.setAttribute('hfer', 'login.html');
        navbarProfielBox.innerHTML =
            '<span class="main-header__profile-text">ثبت نام / ورود</span>';
    }
};

const renderTopbarMenus = async () => {
    const topbarList = document.querySelector('.top-bar__menu');

    const res = await fetch(`http://localhost:4000/v1/menus/topbar`);
    const topbarMenus = await res.json();

    // console.log(topbarMenus);

    topbarList.innerHTML = '';

    const shuffledArray = topbarMenus.sort((a, b) => 0.5 - Math.random());

    shuffledArray.splice(0, 6).map((menu) => {
        topbarList.innerHTML += `<li class="top-bar__item">
        <a href="#" class="top-bar__link">${menu.title}</a>
        </li>`;
    });
};

const getAndShowAllCourses = async () => {
    const coursesContainer = document.querySelector('#courses-container');

    const res = await fetch(`http://localhost:4000/v1/courses`);
    const courses = await res.json();

    courses.slice(0, 6).map((course) => {
        coursesContainer.insertAdjacentHTML(
            'beforeend',
            `
            <div class="course__col">
                            <div class="course-box">
                                <a href="#">
                                    <img class="course-box__img" src=http://localhost:4000/courses/covers/${
                                        course.cover
                                    } alt="course image">
                                </a>
                                <div class="course-box__main">
                                    <a class="course-box__title" href="#">${
                                        course.name
                                    }</a>
                                    <div class="course-box__rating-teacher">
                                        <div class="course-box__teacher">
                                            <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                                            <a class="course-box__teacher-link" href="#">${
                                                course.creator
                                            }</a>
                                        </div>
                                        <div class="course-box__rating">
                                        ${Array(5 - course.courseAverageScore)
                                            .fill(0)
                                            .map(
                                                (score) =>
                                                    '<img class="course-box__star" src="/frontend/images/svgs/star.svg" alt="rating">'
                                            )
                                            .join(' ')}
                                            
                                        ${Array(course.courseAverageScore)
                                            .fill(0)
                                            .map(
                                                (score) =>
                                                    '<img class="course-box__star" src="/frontend/images/svgs/star_fill.svg" alt="rating">'
                                            )
                                            .join(' ')}
                                        </div>
                                    </div>

                                    <div class="course-box__status">
                                        <div class="course-box__user">
                                            <i class="fas fa-users course-box__users-icon"></i>
                                            <span class="course-box__users-text">${
                                                course.registers
                                            }</span>
                                        </div>
                                        <span class="course-box__price">${
                                            course.price === 0
                                                ? 'رایگان'
                                                : course.price.toLocaleString()
                                        }</span>
                                    </div>
                                </div>

                                <div class="course-box__footer">
                                    <a class="course-box__footer-link" href="#">
                                        مشاهده اطلاعات
                                        <i class="fas fa-arrow-left course-box__footer-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
            `
        );
    });
    return courses;
};

const getAndShowPopularCourses = async () => {
    const popularCoursesWrapper = document.querySelector(
        '#popular-courses-wrapper'
    );

    const res = await fetch(`http://localhost:4000/v1/courses/popular`);
    const popularCourses = await res.json();

    popularCourses.forEach((course) => {
        popularCoursesWrapper.insertAdjacentHTML(
            'beforeend',
            `
            <div class="swiper-slide">
                            <div class="course-box">
                                <a href="#">
                                    <img class="course-box__img" src=http://localhost:4000/courses/covers/${
                                        course.cover
                                    } alt="course image">
                                </a>
                                <div class="course-box__main">
                                    <a class="course-box__title" href="#">${
                                        course.name
                                    }</a>
                                    <div class="course-box__rating-teacher">
                                        <div class="course-box__teacher">
                                            <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                                            <a class="course-box__teacher-link" href="#">${
                                                course.creator
                                            }</a>
                                        </div>
                                        <div class="course-box__rating">
                                            <img class="course-box__star" src="/frontend/images/svgs/star.svg" alt="rating">
                                            <img class="course-box__star" src="/frontend/images/svgs/star_fill.svg" alt="rating">
                                            <img class="course-box__star" src="/frontend/images/svgs/star_fill.svg" alt="rating">
                                            <img class="course-box__star" src="/frontend/images/svgs/star_fill.svg" alt="rating">
                                            <img class="course-box__star" src="/frontend/images/svgs/star_fill.svg" alt="rating">
                                        </div>
                                    </div>

                                    <div class="course-box__status">
                                        <div class="course-box__user">
                                            <i class="fas fa-users course-box__users-icon"></i>
                                            <span class="course-box__users-text">${
                                                course.registers
                                            }</span>
                                        </div>
                                        <span class="course-box__price">${
                                            course.price === 0
                                                ? 'رایگان'
                                                : course.price.toLocaleString()
                                        }</span>
                                    </div>
                                </div>

                                <div class="course-box__footer">
                                    <a class="course-box__footer-link" href="#">
                                        مشاهده اطلاعات
                                        <i class="fas fa-arrow-left course-box__footer-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
            `
        );
    });

    return popularCourses;
};

const getAndShowPresellCourses = async () => {
    const presellCoursesWrapper = document.querySelector(
        '#presell-courses-wrapper'
    );

    const res = await fetch(`http://localhost:4000/v1/courses/presell`);
    const presellCourses = await res.json();

    presellCourses.forEach((course) => {
        presellCoursesWrapper.insertAdjacentHTML(
            'beforeend',
            `
            <div class="swiper-slide">
                            <div class="course-box">
                                <a href="#">
                                    <img class="course-box__img" src=http://localhost:4000/courses/covers/${
                                        course.cover
                                    } alt="course image">
                                </a>
                                <div class="course-box__main">
                                    <a class="course-box__title" href="#">${
                                        course.name
                                    }</a>
                                    <div class="course-box__rating-teacher">
                                        <div class="course-box__teacher">
                                            <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                                            <a class="course-box__teacher-link" href="#">${
                                                course.creator
                                            }</a>
                                        </div>
                                        <div class="course-box__rating">
                                            ${Array(
                                                5 - course.courseAverageScore
                                            )
                                                .fill(0)
                                                .map(
                                                    (score) =>
                                                        '<img class="course-box__star" src="/frontend/images/svgs/star.svg" alt="rating">'
                                                )
                                                .join(' ')}
                                            
                                        ${Array(course.courseAverageScore)
                                            .fill(0)
                                            .map(
                                                (score) =>
                                                    '<img class="course-box__star" src="/frontend/images/svgs/star_fill.svg" alt="rating">'
                                            )
                                            .join(' ')}
                                        </div>
                                    </div>

                                    <div class="course-box__status">
                                        <div class="course-box__user">
                                            <i class="fas fa-users course-box__users-icon"></i>
                                            <span class="course-box__users-text">${
                                                course.registers
                                            }</span>
                                        </div>
                                        <span class="course-box__price">${
                                            course.price === 0
                                                ? 'رایگان'
                                                : course.price.toLocaleString()
                                        }</span>
                                    </div>
                                </div>

                                <div class="course-box__footer">
                                    <a class="course-box__footer-link" href="#">
                                        مشاهده اطلاعات
                                        <i class="fas fa-arrow-left course-box__footer-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
            `
        );
    });

    return presellCourses;
};

const getAndShowArticles = async () => {
    const articlesWrapper = document.querySelector('#articles-wrapper');

    const res = await fetch(`http://localhost:4000/v1/articles`);

    const articles = await res.json();

    articles.slice(0, 6).forEach((article) => {
        articlesWrapper.insertAdjacentHTML(
            'beforeend',
            `
            <div class="articles_col">
                        <div class="article-card">
                            <div class="article-card__header">
                                <a href="#" class="article-card__link-img">
                                    <img src=http://localhost:4000/courses/covers/${article.cover} alt="article cover">
                                </a>
                            </div>
                            <div class="article-card__content">
                                <a href="#" class="article-card__link">
                                    ${article.title}
                                </a>
                                <p class="article-card__text">${article.description}</p>
                                <a href="#" class="article-card__btn">بیشتر بخوانید</a>
                            </div>
                        </div>
                    </div>
            `
        );
    });

    return articles;
};

const getAndShowNavbarMenus = async () => {
    const menusWrapper = document.querySelector('#menus-wrapper');

    const res = await fetch(`http://localhost:4000/v1/menus`);
    const menus = await res.json();

    menus.forEach((menu) => {
        menusWrapper.insertAdjacentHTML(
            'beforeend',
            `
            <li class="main-header__item">
                <a href=category.html?cat=${
                    menu.href
                } class="main-header__link">
                ${menu.title}
                    ${
                        menu.submenus.length !== 0
                            ? `<i class="fas fa-angle-down main-header__angle-down"></i>
                            <ul class="main-header__dropdown">
                            ${menu.submenus
                                .map(
                                    (submenu) =>
                                        `<li class="main-header__dropdown-item">
                                    <a class="main-header__dropdown-link" href="#">
                                        ${submenu.title}
                                    </a>
                                </li>`
                                )
                                .join('')}
                            </ul>`
                            : ''
                    }
                </a>
            </li>
            `
        );
    });

    return menus;
};

// const getAndShowCategoryCourses = async () => {
//     const categoryName = getUrlParam('cat');

//     console.log(getUrlParam('cat'));

//     const res = await fetch(`http://localhost:4000/v1/courses/category/${categoryName}`);
//     const courses = await res.json();

//     return courses;
// };

export {
    showUserNameInNavbar,
    renderTopbarMenus,
    getAndShowAllCourses,
    getAndShowPopularCourses,
    getAndShowPresellCourses,
    getAndShowArticles,
    getAndShowNavbarMenus,
    // getAndShowCategoryCourses,
};
