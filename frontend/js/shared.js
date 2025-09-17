import { getMe } from './funcs/auth.js';
import { showUserNameInNavbar, renderTopbarMenus } from './funcs/shared.js';

window.addEventListener('load', () => {
    // console.log(getMe());
    // getMe().then((data) => {
    //     console.log(data);
    // });

    showUserNameInNavbar();
    renderTopbarMenus();
});
