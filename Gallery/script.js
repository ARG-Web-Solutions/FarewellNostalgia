function toggleMenu() {
    const sidebarMenu = document.getElementById("sidebar-menu");
    const overlay = document.getElementById("overlay");

    if (!sidebarMenu || !overlay) {
        console.error("Sidebar menu or overlay not found.");
        return;
    }

    const isActive = sidebarMenu.classList.toggle("active");
    overlay.style.display = isActive ? "block" : "none";
}

// Ensure event listeners are attached only when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const overlay = document.getElementById("overlay");

    if (menuIcon) {
        menuIcon.addEventListener("click", toggleMenu);
    } else {
        console.error("Menu icon not found!");
    }

    if (overlay) {
        overlay.addEventListener("click", toggleMenu);
    } else {
        console.error("Overlay not found!");
    }
});
