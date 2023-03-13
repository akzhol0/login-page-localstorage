let counter = 0, counterImg = 0;
const signInPage = document.querySelector('.block-sign-in');
const exitBtn = document.querySelector('[data-exit]');

if (exitBtn) {
    console.log('LOL');
    exitBtn.addEventListener('click', () => {
        document.querySelector('.user').remove();
        document.querySelector('.login').style['display'] = 'flex';
    });
}

document.querySelector('[data-sign]').addEventListener('click', () => {
    counter++;
    if (counter %2 === 0) {
        signInPage.classList.add('add');
    } else {
        signInPage.classList.remove('add');
    }
});

document.querySelector('[data-img]').addEventListener('click', () => {
    const inp = document.querySelector('[data-password]');

    counterImg++;
    if (counterImg %2 === 0) {
        inp.setAttribute('type', 'password');
    } else {
        inp.setAttribute('type', 'text');
    }
});

document.querySelector('[data-submit]').addEventListener('click', () => {
    const userLogin = document.querySelector('[data-login]').value;
    const userPassword = document.querySelector('[data-password]').value;
    const res = document.querySelector('#res')
    if (localStorage.length === 0) {
        res.textContent = 'Wrong login or password';
        return;
    }

    for (let i = 1; i < localStorage.length + 1; i++) {
        const local = localStorage.getItem(`user${i}`);
        const parseUser = JSON.parse(local);
        
        if (userLogin === parseUser.userLogin || userPassword === parseUser.userPassword) {
            const html =    `<div class="user">
                                <div class="photo">
                                    <img src="assets/images/Sample_User_Icon.png" width="100" height="100">
                                </div>
                                <div class="user-name">${parseUser.userLogin}</div>
                                <div class="btn-exit"><button data-exit>EXIT</button></div>
                            </div>`;
            document.querySelector('.login').style['display'] = 'none';
            document.querySelector('.header-wrapper').insertAdjacentHTML('beforeend', html);
            signInPage.classList.add('add');
        } else {
            res.textContent = 'Wrong login or password';
        }
    }
});
