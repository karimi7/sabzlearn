const showSwal = (title, icon, buttons, callback) => {
    swal({
        title,
        icon,
        buttons,
    }).then((result) => callback(result));
};

const saveInToLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalSrorage = (key) => {
    return JSON.stringify(localStorage.getItem(key));
};

const getToken = () => {
    const userInfos = JSON.parse(localStorage.getItem('user'));
    return userInfos ? userInfos.token : null;
};

const isLogin = () => {
    const userInfos = localStorage.getItem('user');
    return userInfos ? true : false;
};

// const getUrlParam = key => {
//     const urlParams = new URLSearchParams(window.location.search)
//     return urlParams.get(key);
// };

export {
    showSwal,
    saveInToLocalStorage,
    getFromLocalSrorage,
    getToken,
    isLogin,
    // getUrlParam,
};
