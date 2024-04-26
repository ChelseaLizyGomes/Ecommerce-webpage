const product = [
    {
        id: 0,
        image: "1.jpg",
        title: 'round diamond earrings',
        price: 1200,
    },
    {
        id: 1,
        image: '2.jpg',
        title: 'long diamond earrings',
        price: 7000,
    },
    {
        id: 2,
        image: '3.jpg',
        title: 'red ruby earrings',
        price: 1300,
    },
    {
        id: 3,
        image: '4.png',
        title: 'red gem earrings',
        price: 2999,
    }
];
//to display on page
const categories = [...new Set(product.map((item) => //Creates a new Set //item here represents each product from the array above //here the map is a collection of those keyed product items.
{ return item }))]
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item; //locally defining what will consititute the item.
    return (
        `<div class='box'>
<div class='img-box'>
<img class= 'images' src= ${image}></img>
</div>
<div class='bottom'>
<p>${title}</p>
<h4>Rs.${price}.00</h4>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
</div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a) {
    let j = 0;
    total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$" + 0 + "00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$" + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h4 style='font-size: 15px;'>$ ${price}.00</h4>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}


