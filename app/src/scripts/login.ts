import { generateHeaderButton } from "./generateHeaderButton.js";
import { headerResponsivity } from "./headerResponsivity.js";
import { inputLabelAnimation } from "./inputLabelAnimation.js";

generateHeaderButton(false)
headerResponsivity()
const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);

const emailInput = document.querySelector('[login-form__email-input') as HTMLInputElement;
const nameInput = document.querySelector('[login-form__name-input]') as HTMLInputElement;
const submitButton = document.querySelector('[login-form__button]') as HTMLElement;


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`https://alura-geek.herokuapp.com/users?name=${nameInput.value}&email=${emailInput.value}`)
    .then((res) => res.json())
    .then((data) => {
        const user = data[0];
        if (user.isAdmin) {
            window.location.href = "/adminPage.html";
            const headerButton = document.querySelector('.header__button') as HTMLElement;
            headerButton.innerText = 'Menu administrador'
            localStorage.setItem('isLogged', 'true');
        } else {
            console.log('não é')
        }
    })
    
})

