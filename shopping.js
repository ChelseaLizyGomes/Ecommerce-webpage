const product = [
    {
        id: 0,
        image: "1.jpg",
        title: 'Round diamond earrings',
        price: 1200,
    },
    {
        id: 1,
        image: '2.jpg',
        title: 'Long diamond earrings',
        price: 7000,
    },
    {
        id: 2,
        image: '3.jpg',
        title: 'Red ruby earrings',
        price: 1300,
    },
    {
        id: 3,
        image: '4.png',
        title: 'Red gem earrings',
        price: 2999,
    },
    {
        id: 4,
        image: "5.png",
        title: 'Yellow casual summer dress',
        price: 400,
    },
    {
        id: 5,
        image: '6.jpg',
        title: 'Black pointed high heels',
        price: 900,
    },
    {
        id: 6,
        image: '7.png',
        title: 'Pink leather bag',
        price: 1200,
    },
    {
        id: 3,
        image: '8.jpg',
        title: 'Brown high-rise formal pants',
        price: 799,
    }
];
//to display on page
const categories = [...new Set(product.map((item) => //Creates a new Set //item here represents each product from the array above //here the map is a collection of those keyed product items.
{ return item }))]
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item; //locally defining what will consititute the item.
    return (
        ` <div class='box'>
<div class='img-box'>
<img class= 'images' src= ${image}></img>
</div>
<div class='bottom'>
<p>${title}</p>
<h4>Rs.${price}.00</h4>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
</div> `
    )
}).join('')

var mycart = [];

var insideCart = (`<div class="sidebar">
<div class="head">
    <p>My Cart</p>
    <!--<p id="count">0</p>-->
</div>

    <div id="cartItem">Your cart is empty</div>
    <div class="foot">
        <h3>Total</h3>
        <h2 id="total">$ 0.00</h2>
    </div>
</div>`);

function addtocart(a) {
    mycart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    mycart.splice(a, 1);
    displaycart();
}
document.getElementById("inside").innerHTML = insideCart;

function displaycart(a) {
    insideCart = insideCart;
    let j = 0;
    total = 0;
    document.getElementById("count").innerHTML = mycart.length;
    if (mycart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$" + 0 + "00";
    }
    else {
        document.getElementById("cartItem").innerHTML = mycart.map((items) => {
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
submit.addEventListner('click', displaycart);

/* Example usage: Add a product to the cart on button click
document.querySelector('.addtocart').addEventListener('click', function() {
  addToCart(a); // Add the product with id 0 to the cart
});  */

