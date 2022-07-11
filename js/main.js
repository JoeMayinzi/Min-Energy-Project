const activePage = window.location.pathname
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    
    link.addEventListener("click", ()=>{
        if(link.href.includes(`${activePage}`)) {
            link.classList.add("activeLink")
        }
    })
})
