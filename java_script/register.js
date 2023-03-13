document.querySelector('[data-btn]').addEventListener('click', () => {
    const userName = document.querySelector('[data-name]').value;
    const userLastName = document.querySelector('[data-last-name]').value;
    const userLogin = document.querySelector('[data-login]').value;
    const userPassF = document.querySelector('[data-password-f]').value;
    const userPassS = document.querySelector('[data-password-s]').value;
    let id = localStorage.length;
    const res = document.querySelector('[data-res]');

    if (userName.length < 3 || userLastName.length < 3) {
        res.textContent = "Name and Last name at least 3 symbols";
    } else if (userLogin.length < 3) {
        res.textContent = "Login at least 3 symbols";
    } else if (userPassF === '' && userPassS === '') {
        res.textContent = "Write passwords";
    } else if (userPassF.length < 3 && userPassS.length < 3){
        res.textContent = "Password at least 3 symbols";
    } else if (userPassF != userPassS) {
        res.textContent = "Passwords must match";
    } else {
        res.textContent = "Succesfully registered!";
        id++
        const userObj = {
            userName: userName,
            userLastName: userLastName,
            userLogin: userLogin,
            userPassword: userPassF,
            id: id
        }
        const userParse = JSON.stringify(userObj);
        localStorage.setItem(`user${id}`, `${userParse}`);
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
});