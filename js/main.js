const sidebarBtn = document.querySelector(".sidebar-button i");
const sidebarMenu = document.querySelector(".sidebar-menu");
const sidebarExit = document.querySelector(".exit i");
const links = document.querySelectorAll(".navbar-nav a");
const activePage = window.location.pathname;
const header = document.querySelector("header")


sidebarBtn.addEventListener("click", ()=> {
    sidebarMenu.style.right = 0;
    header.style.position = "static"

    
})

sidebarExit.addEventListener("click", (e)=>{
    e.preventDefault()
    sidebarMenu.style.right = -450 + "px";
    
})

links.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("activeLink");
        console.log(link)
    }
})

window.addEventListener("scroll", (e)=>{
    console.log(e)
    console.log("vous scrollez")
})