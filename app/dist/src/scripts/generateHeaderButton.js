export function generateHeaderButton(isAdmin) {
    const header = document.querySelector('.header');
    const button = document.createElement('a');
    button.classList.add('button');
    button.classList.add('header__button');
    button.innerText = isAdmin ? 'Menu Administrador' : 'Login';
    button.href = isAdmin ? 'adminPage.html' : 'login.html';
    header.appendChild(button);
}
