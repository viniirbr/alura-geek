import { openModal } from "../scripts/openModal.js";
export class CategoryView {
    constructor(_category) {
        this._category = _category;
    }
    categoryView() {
        const categorySection = document.createElement('section');
        categorySection.id = this._category;
        const categoryHeader = document.createElement('div');
        categoryHeader.classList.add('category-header');
        categoryHeader.innerHTML =
            `
                <h3 class="category-header__title">${this._category}</h3>
            `;
        if (this._category == 'Todos os produtos') {
            const button = document.createElement('button');
            button.classList.add('button');
            button.innerText = 'Adicionar produto';
            button.addEventListener('click', () => window.location.href = '/addProduct.html');
            categoryHeader.append(button);
        }
        else {
            const seeAll = document.createElement('div');
            seeAll.classList.add('see-all');
            const seeAllTitle = document.createElement('a');
            seeAllTitle.classList.add('see-all__title');
            seeAllTitle.innerText = 'Ver tudo';
            seeAllTitle.setAttribute('data-bs-toggle', 'modal');
            seeAllTitle.setAttribute('data-bs-target', '#exampleModal');
            seeAllTitle.setAttribute('type', 'button');
            const seeAllImg = document.createElement('img');
            seeAllImg.classList.add('see-all__img');
            seeAllImg.src = "img/rigth-arrow.svg";
            seeAll.appendChild(seeAllTitle);
            seeAll.appendChild(seeAllImg);
            seeAllTitle.addEventListener('click', () => {
                openModal(this._category);
            });
            categoryHeader.insertAdjacentElement('beforeend', seeAll);
        }
        categorySection.append(categoryHeader);
        categorySection.classList.add('category');
        return categorySection;
    }
}
