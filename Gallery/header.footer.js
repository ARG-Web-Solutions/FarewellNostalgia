document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebarMenu = document.getElementById("sidebar-menu");
    const overlay = document.getElementById("overlay");

    if (!menuIcon || !sidebarMenu || !overlay) {
        console.error("Menu icon, sidebar menu, or overlay not found!");
        return;
    }

    function toggleMenu() {
        const isActive = sidebarMenu.classList.toggle("active");
        overlay.style.display = isActive ? "block" : "none";
    }

    menuIcon.addEventListener("click", toggleMenu);
    
    overlay.addEventListener("click", function () {
        sidebarMenu.classList.remove("active");
        overlay.style.display = "none";
    });
});
