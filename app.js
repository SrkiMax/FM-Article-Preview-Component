


const button = document.querySelector(".share-icon");
const socialLinks = document.querySelector(".social-links");
const socialLinksTriangle = document.querySelector(".triangle");

button.addEventListener("click", () => {
    socialLinks.classList.toggle("active");
    socialLinksTriangle.classList.toggle("active");


    if (button.classList.contains("share-active")) {
        button.classList.remove("share-active");
    } else {
        button.classList.add("share-active");
    }



})