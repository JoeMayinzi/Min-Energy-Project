const sidebarBtn = document.querySelector(".sidebar-toggler i");
const sidebarMenu = document.querySelector(".sidebar-menu");
/*const links = document.querySelectorAll(".navbar-nav a");*/
const activePage = window.location.pathname;
const headerNav = document.querySelector("header nav")


sidebarBtn.addEventListener("click", ()=>{
    headerNav.classList.toggle("active")
})


/*links.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("activeLink");
        console.log(link)
    }
})*/