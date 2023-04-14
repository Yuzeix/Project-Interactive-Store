const menuEmail = document.querySelector('.navbar-email');
const menuAllSector = document.querySelector('.menu');
const closeItemIcon = document.querySelector('.product-description-close');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const menuAllSectorMobile = document.querySelector('.mobile-menu');
const asideCarIcon = document.querySelector('#product-detail');
const itemDescription = document.querySelector('#product-description');
const shoppingItems = document.querySelector('.cards-container');



 

menuEmail.addEventListener('click', toggleDestokMenu);
menuAllSector.addEventListener('click', toggleMenuAllSectorMobile);
menuCarIcon.addEventListener('click', toggleAsideCarIcon);
closeItemIcon.addEventListener('click', closeItemDetail);

function toggleDestokMenu() {
    desktopMenu.classList.toggle('inactive');
    itemDescription.classList.add('inactive');
    menuAllSectorMobile.classList.add('inactive');
    asideCarIcon.classList.add('inactive');
}

function toggleMenuAllSectorMobile() {
    menuAllSectorMobile.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    itemDescription.classList.add('inactive');
    asideCarIcon.classList.add('inactive');
}

function toggleAsideCarIcon() {
    asideCarIcon.classList.toggle('inactive');
    menuAllSectorMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    itemDescription.classList.add('inactive');
}

function openItemDetail() {
    itemDescription.classList.remove("inactive");

}

function closeItemDetail() {
    itemDescription.classList.add("inactive");
}



const productList = [];

productList.push ({ 
    name : "Bike",
    price : 40000,
    image : 'https://img.freepik.com/fotos-premium/bicicleta-montana-oro-representacion-3d-fondo-blanco-aislado_101266-23960.jpg?w=740',
});

productList.push ({ 
    name : "TV LED",
    price : 150000,
    image : 'https://img.freepik.com/psd-premium/representacion-3d-aislada-maqueta-smart-tv_322208-226.jpg?w=740',
});

productList.push ({ 
    name : "Notebook",
    price : 180000,
    image : 'https://img.freepik.com/foto-gratis/computadora-portatil-abierta_144627-12148.jpg?w=740&t=st=1681361388~exp=1681361988~hmac=81ea7b9f8dc84a16fee76569026f290f5559f73913ba2c9ef690bc323627ce42',
});

productList.push ({ 
    name : "Bike",
    price : 40000,
    image : 'https://img.freepik.com/fotos-premium/bicicleta-montana-oro-representacion-3d-fondo-blanco-aislado_101266-23960.jpg?w=740',
});

productList.push ({ 
    name : "TV LED",
    price : 150000,
    image : 'https://img.freepik.com/psd-premium/representacion-3d-aislada-maqueta-smart-tv_322208-226.jpg?w=740',
});

productList.push ({ 
    name : "Notebook",
    price : 180000,
    image : 'https://img.freepik.com/foto-gratis/computadora-portatil-abierta_144627-12148.jpg?w=740&t=st=1681361388~exp=1681361988~hmac=81ea7b9f8dc84a16fee76569026f290f5559f73913ba2c9ef690bc323627ce42',
});

function detailsItems (exo) {
    for (items of exo) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imgItem = document.createElement('img');
        imgItem.setAttribute("src", items.image);
        imgItem.addEventListener("click", openItemDetail);
        

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const divProductBox = document.createElement('div');
        
        const priceProduct = document.createElement('p');
        priceProduct.innerText = '$' + items.price;
        const nameProduct = document.createElement('p');
        nameProduct.innerText = items.name;

        divProductBox.appendChild(priceProduct);
        divProductBox.appendChild(nameProduct);

        const productInfoFigure = document.createElement('figure');
        const iconCarAdd = document.createElement('img');
        iconCarAdd.setAttribute('src',"./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(iconCarAdd);

        productInfo.appendChild(divProductBox);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(imgItem);
        productCard.appendChild(productInfo);

        shoppingItems.appendChild(productCard);
    }
}

detailsItems(productList);


