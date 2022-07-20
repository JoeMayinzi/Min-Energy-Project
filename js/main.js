const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");
const searchIcon = document.querySelector(".search-box a");
const header = document.querySelector("header");
const body = document.querySelector("body")
const modalFade = document.querySelector(".modal-backdrop.show");

//Get the button
let mybutton = document.getElementById("btn-back-to-top");


navLinks.forEach(link => {
    
    link.addEventListener("click", ()=>{
        if(link.href.includes(`${activePage}`)) {
            link.classList.add("activeLink");
        }
    })
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


