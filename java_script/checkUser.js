if (localStorage.length > 0) {
    for (let i = 1; i < 2; i++) {
        const local = localStorage.getItem(`user${i}`);
        const parseUser = JSON.parse(local);
        const html =    `<div class="user">
                            <div class="photo">
                                <img src="assets/images/Sample_User_Icon.png" width="100" height="100">
                            </div>
                            <div class="user-name">${parseUser.userLogin}</div>
                            <div class="btn-exit"><button data-exit>EXIT</button></div>
                        </div>`;
        document.querySelector('.login').style['display'] = 'none';
        document.querySelector('.header-wrapper').insertAdjacentHTML('beforeend', html);
        document.querySelector('.block-sign-in').classList.add('add');
    };
}
