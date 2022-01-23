function handleAsideLeft() {
    window.onload = () => {
        const openMenu = document.querySelector(".js-open-menu")
        const menu = document.querySelector(".aside")
        const closeMenu = document.querySelector(".js-close-menu")
        openMenu.addEventListener("click", () => {
            menu.classList.add("aside--active")
        })
        closeMenu.addEventListener("click", () => {
            menu.classList.remove("aside--active")
        })
    }
}
handleAsideLeft()