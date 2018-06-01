// Images List
const images = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg"];

// Triggers
const triggers = document.querySelectorAll(".trigger");

// Displayed Image
const displayedImage = document.querySelector(".dispayedImg");

// Change image when clicking on any trigger
for(let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", () => {
        displayedImage.setAttribute("src", images[i]);
        displayedImage.setAttribute("data-index", i)
    });
}

// When clicking on the image, re-focus its trigger
displayedImage.addEventListener("click", () => {
    triggers[displayedImage.getAttribute("data-index")].focus();
});