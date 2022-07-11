const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");
const searchIcon = document.querySelector(".search-box a");
const header = document.querySelector("header");
const body = document.querySelector("body")
const modalFade = document.querySelector(".modal-backdrop.show");


navLinks.forEach(link => {
    
    link.addEventListener("click", ()=>{
        if(link.href.includes(`${activePage}`)) {
            link.classList.add("activeLink");
        }
    })
})

/*searchIcon.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("cliqué");
    header.classList.remove("sticky-top");
    
})*/


