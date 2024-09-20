// Set session storage data
window.sessionStorage.setItem("currentContinent", "asia");


// Get requied buttons and thumbnails
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// variables for current active
let countItem = items.length;
let itemActive = 0;
let continents = ["asia", "europe", "america", "africa", "australia"];

// next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    window.sessionStorage.setItem("currentContinent", continents[itemActive]);

    showSlider();
}
// prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    window.sessionStorage.setItem("currentContinent", continents[itemActive]);

    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 10000)

// main function that will change the active class for items.
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 10000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        window.sessionStorage.setItem("currentContinent", continents[itemActive]);
        showSlider();
    })
})