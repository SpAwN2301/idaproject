const items = [
    {
        image: './assets/img/photo.png', 
        title: 'Наименование товара',
        about: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '9 000'
    },
    {
        image: './assets/img/photo.png', 
        title: 'Наименование товара',
        about: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10 000'
    },
    {
        image: './assets/img/photo.png', 
        title: 'Наименование товара',
        about: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '11 000'
    },
    {
        image: './assets/img/photo.png', 
        title: 'Наименование товара',
        about: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '12 000'
    },
    {
        image: './assets/img/photo.png', 
        title: 'Наименование товара',
        about: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '12 000'
    },
    {
        image: './assets/img/photo.png', 
        title: 'Наименование товара',
        about: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '12 000'
    },
];

const itemsContainer = document.getElementById('items');
const deleteItems = itemsContainer.getElementsByClassName('item__delete');

itemsRender();

function itemsRender() {
    items.forEach((item) => {
        itemsContainer.innerHTML += `
            <div class="item animate-fadeIn">
                <button class="item__delete">
                    <img src="./assets/icons/trash.svg"/>
                </button>
                <div class="item__img"><img src="${item.image}"/></div>
                <div class="item__info">
                    <h3 class="item__title">${item.title}</h3>
                    <p class="item__descrip">${item.about}</p>
                    <h2 class="item__price">${item.price} руб.</h2>
                </div>
            </div>
        `
    })
}
