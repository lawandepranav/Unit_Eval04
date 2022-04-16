var phoneCartItems = JSON.parse(localStorage.getItem('phoneCartData')) || [];

function displayData(phoneCartItems) {
    document.querySelector('#cartbox').innerHTML = '';
    phoneCartItems.forEach(ele => {
        
    var box=document.createElement('div');
    box.setAttribute('class', 'box');

    var img=document.createElement('img');
    img.src=ele.image_url;

    var name=document.createElement('h2');
    name.textContent=ele.name;

    var price=document.createElement('h3');
    price.textContent=ele.price;

    var ratings=document.createElement('p');
    ratings.textContent=ele.rating;

    box.append(img, name, price, ratings);

    document.querySelector("#cartbox").append(box);

    });
}

window.addEventListener('load', function() {
    displayData(phoneCartItems);
});

document.querySelector("#checkOut").addEventListener('click', function(){
    location.href = "D:\Masai\Unit_eval04\payment.html";
})