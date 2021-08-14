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

const deleteItemBtn = [];

const itemsContainer = document.getElementById('items');
const form = document.getElementsByClassName('form')[0];
const addItemBtn = document.getElementById('add-item');

itemsRender();

function itemsRender() {
    itemsContainer.innerHTML = '';
    deleteItemBtn.length = 0;
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
    deleteItemBtn.push(...document.getElementsByClassName('item__delete'));
    for(let i = 0; i < deleteItemBtn.length; i++){
        deleteItemBtn[i].addEventListener("click", () => {
            console.log(i)
            items.splice(i, 1)
            itemsRender();
        })
    }
}

form.addEventListener("click", (e) => {
    e.preventDefault()
})

addItemBtn.addEventListener("click", (e) => {
    const itemName = document.querySelector('.form [name="name"]').value
    const itemDescrip = document.querySelector('.form [name="descrip"]').value
    const itemLink = document.querySelector('.form [name="link"]').value
    const itemPrice = document.querySelector('.form [name="price"]').value

    items.push({image: itemLink, title: itemName, about: itemDescrip, price: itemPrice})
    itemsRender()
})

