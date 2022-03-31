export class CategoryView {

    constructor(private _category: string) { }

    public categoryView(): HTMLElement {
        const categorySection = document.createElement('section');
        const categoryHeader = document.createElement('div');
        categoryHeader.classList.add('category-header');
        categoryHeader.innerHTML =
            `
                <h3 class="category-header__title">${this._category}</h3>
            `
        if (this._category == 'Todos os produtos') {
            const button = document.createElement('button') as HTMLElement;
            button.classList.add('button');
            button.innerText = 'Adicionar produto';
            button.addEventListener('click', () => window.location.href = '/addProduct.html')
            categoryHeader.append(button);
        } else {
            categoryHeader.insertAdjacentHTML('beforeend', `
            <div class="see-all">
                <a class="see-all__title">Ver tudo</a>
                <img class="see-all__img" src="img/rigth-arrow.svg" alt="Ver tudo">
            </div>
        `);
        }
        categorySection.append(categoryHeader);
        categorySection.classList.add('category');
        return categorySection;
    }
}