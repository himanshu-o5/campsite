let currContinent = window.sessionStorage.getItem("currentContinent");

// Get required elements
const displayContinent = document.getElementById("continent");
const header = document.getElementById("header");
const gallery = document.getElementById("gallery");

displayContinent.innerText = currContinent;


// Change the Background Image
header.style.backgroundImage = `url(../assets/${currContinent}.jpg)`;

// Add local camps
const allCampsStr = window.localStorage.getItem(currContinent);
const allCamps = JSON.parse(allCampsStr);

for(let camp of allCamps){
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const galleryItemImg = document.createElement('img');
    galleryItemImg.setAttribute("src", camp.imageURL)

    const galleryItemText = document.createElement('p');
    galleryItemText.textContent = camp.name;

    galleryItem.appendChild(galleryItemImg);
    galleryItem.appendChild(galleryItemText);
    gallery.appendChild(galleryItem);
}