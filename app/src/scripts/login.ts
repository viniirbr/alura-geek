
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
            window.location.href = "/adminPage.html"
        } else {
            console.log('não é')
        }
    })
    
})

