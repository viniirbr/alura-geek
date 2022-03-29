const submitButton = document.querySelector('[login-form__button]');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
});
function createProduct(product) {
    const randonId = Math.ceil(Math.random() * 1000);
    const object = {
        "id": randonId,
        "name": product.name,
        "imgUrl": product.imgUrl,
        "price": product.price,
        "category": product.category,
        "linkToPage": product.linkToPage
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch('https://alura-geek.herokuapp.com/products', options)
        .catch((e) => console.log(e.status));
}
export {};
