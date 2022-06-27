const sidebarBtn = document.querySelector(".sidebar-button i");
const sidebarMenu = document.querySelector(".sidebar-menu");
const sidebarExit = document.querySelector(".exit i");
console.log(sidebarExit)

sidebarBtn.addEventListener("click", ()=> {
    sidebarMenu.style.right = 0;
    
})

sidebarExit.addEventListener("click", ()=>{
    sidebarMenu.style.right = -450 + "px";
})