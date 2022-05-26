
// menu list
const menu = [
    {
        id: 1,
        title: "special ghetti",
        category: "lunch",
        price: 20.36,
        image: "./img/food1.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 2,
        title: "rolled meat",
        category: "lunch",
        price: 15,
        image: "./img/food2.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 3,
        title: "sandwich",
        category: "lunch",
        price: 14,
        image: "./img/food3.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 4,
        title: "donuts",
        category: "lunch",
        price: 10,
        image: "./img/food4.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 5,
        title: "chocolate oreo",
        category: "shakes",
        price: 7,
        image: "./img/shake1.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 6,
        title: "cinnamon flavor",
        category: "shakes",
        price: 10,
        image: "./img/shake2.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 7,
        title: "black berry",
        category: "shakes",
        price: 8,
        image: "./img/shake3.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 8,
        title: "pure berry",
        category: "shakes",
        price: 7,
        image: "./img/shake4.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 9,
        title: "oreo",
        category: "breakfast",
        price: 2,
        image: "./img/snack1.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 10,
        title: "coockies",
        category: "breakfast",
        price: 5,
        image: "./img/snack2.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 11,
        title: "ball chocolate",
        category: "breakfast",
        price: 5,
        image: "./img/snack3.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
    {
        id: 12,
        title: "crackers cream",
        category: "lunch",
        price: 7,
        image: "./img/snack4.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur
         adipisicing elit. itaque dolore 
         possimus explicabo tenetur.`
    },
];
 

// mapping menu items inside innerHtml

const menuSection = document.querySelector(".menu-section");
const singleMeal = document.querySelector(".single-meal");
const filterBtns = document.querySelectorAll(".category-button")

window.addEventListener("DOMContentLoaded", function(){
    
    displayMenuSection(menu);
})

function displayMenuSection(menuItem){
    let displayMenu = menuItem.map(function(item){
        return  `<div class="single-meal">
        <img src=${item.image} alt=${item.title} class="image">
        <div class="info">
            <div class="price">
                <h2>${item.title}</h2>
                <h2 class="dollar">$${item.price}</h2>
            </div>
            <hr>
            <p>${item.desc}</p>
        </div>
    </div>`
    })
    displayMenu = displayMenu.join(' ');
    menuSection.innerHTML = displayMenu;
}


   
// filter buttons
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            } 
        });
        // console.log(menuCategory);
        if(category === "all"){
            displayMenuSection(menu);
        } else{
            displayMenuSection(menuCategory);
        }
    });
});