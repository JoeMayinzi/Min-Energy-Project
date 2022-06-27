const sidebarBtn = document.querySelector(".sidebar-button i");
const sidebarMenu = document.querySelector(".sidebar-menu");
const sidebarExit = document.querySelector(".exit i");
const links = document.querySelectorAll(".navbar-nav a");
const activePage = window.location.pathname


sidebarBtn.addEventListener("click", ()=> {
    sidebarMenu.style.right = 0;
    
})

sidebarExit.addEventListener("click", (e)=>{
    e.preventDefault()
    sidebarMenu.style.right = -450 + "px";
    sidebarMenu.style.visibility = "hidden"
})

links.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("activeLink");
        console.log(link)
    }
})