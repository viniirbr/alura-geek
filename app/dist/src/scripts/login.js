import { generateHeaderButton } from "./generateHeaderButton.js";
import { headerResponsivity } from "./headerResponsivity.js";
import { inputLabelAnimation } from "./inputLabelAnimation.js";
generateHeaderButton(localStorage.getItem('isLogged') == 'true' ? true : false);
headerResponsivity();
const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);
const emailInput = document.querySelector('[login-form__email-input');
const nameInput = document.querySelector('[login-form__name-input]');
const submitButton = document.querySelector('[login-form__button]');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`https://alura-geek.herokuapp.com/users?name=${nameInput.value}&email=${emailInput.value}`)
        .then((res) => res.json())
        .then((data) => {
        const user = data[0];
        if (user.isAdmin) {
            window.location.href = "/adminPage.html";
            const headerButton = document.querySelector('.header__button');
            headerButton.innerText = 'Menu administrador';
            localStorage.setItem('isLogged', 'true');
        }
        else {
            console.log('não é');
        }
    });
});
