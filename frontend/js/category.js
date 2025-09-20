import { getAndShowCategoryCourses } from './funcs/shared.js';

window.addEventListener('load', () => {
    getAndShowCategoryCourses().then((responseCourses) => {
        // console.log(responseCourses);

        let courses = [...responseCourses];
        let coursesShowType = 'row';
        const coursesShowTypeIcons = document.querySelector(
            '.courses-topbar__icon-parent'
        );
        const categoryCoursesWrapper = document.querySelector(
            '#category-courses-wrapper'
        );

        //  show Category Courses By row showType
        if (courses.length) {
            courses.forEach((course) => {
                categoryCoursesWrapper.insertAdjacentHTML(
                    'beforeend',
                    `
            <div class="course__col">
                            <div class="course-box">
                                <a href="#">
                                    <img class="course-box__img" src="/frontend/images/courses/jango.png" alt="course image">
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
        } else {
            categoryCoursesWrapper.insertAdjacentHTML(
                'beforeend',
                `
            <div class="alert alert-danger">هیچ دوره ای برای این دسته بندی وجود ندارد.</div>
            `
            );
        }

        coursesShowTypeIcons.forEach((coursesShowTypeIcon) => {
            coursesShowTypeIcon.addEventListener('click', (event) => {
                coursesShowTypeIcons.forEach((icon) =>
                    icon.classList.remove('courses-topbar__icon--active')
                );
                event.target.classList.add('ourses-topbar__icon--active');
            });
        });
    });
});