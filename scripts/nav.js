/* function fun() {
    const doc = document.querySelector("body");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const logo = document.createElement("img");
    const linkImg = document.createElement("a");
    logo.setAttribute("src", "linkimagem");
    logo.setAttribute("alt", "logo");
    linkImg.setAttribute("class", "logo");
    linkImg.appendChild(logo);

    ul.setAttribute("class", "menu");

    ul.appendChild(navItems("home", "../html/home.html"))
    ul.appendChild(navItems("products", "../html/products.html"))
    ul.appendChild(navItems("pricing", "../html/pricing.html"))
    ul.appendChild(navItems("about", "../html/about.html"))

    nav.appendChild(linkImg)
    nav.appendChild(ul);
    doc.prepend(nav);
}

function navItems(name, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.setAttribute("class", "navItem");
    a.setAttribute("href", href);
    a.textContent = name;
    li.appendChild(a);

    return li;
} */

const toggleIconOpen = document.getElementsByClassName("menu-icon")[0];
const toggleIconClose = document.getElementsByClassName("menu-icon")[1];
const menu = document.querySelector("nav");
const iconsMenu = document.querySelector(".menu-toggle");

toggleIconOpen.addEventListener("click", toggleNav);
toggleIconClose.addEventListener("click", toggleNav);


function toggleNav() {
    toggleIcons();
    toggleMenu();
}

function toggleIcons() {
    toggleIconClose.classList.toggle("menu-icon-active")
    toggleIconOpen.classList.toggle("menu-icon-active")
}

function toggleMenu() {
    if (menu.classList == "" || menu.classList.contains("hide")) {
        menu.classList = "reveal";
    }
    else {
        menu.classList = "hide";
    }
}

const menuToggleContainer = document.querySelector(".container-menu-toggle")
let prevYScrollpos = window.pageYOffset;
let prevXScrollpos = window.pageXOffset;

// window.onmousemove = (e)=> console.log(e.clientX, e.clientY);
window.onscroll = function () {
    let currentYScrollPos = window.pageYOffset;
    let currentXScrollPos = window.pageYOffset;

    if (prevYScrollpos > currentYScrollPos || prevXScrollpos > currentXScrollPos) {
        iconsMenu.style.right = "20px";
        menuToggleContainer.style.top = "0";
        toggleIconClose.classList.remove("menu-icon-active");
        toggleIconOpen.classList.add("menu-icon-active");

    } else {
        toggleIconClose.classList.remove("menu-icon-active");
        toggleIconOpen.classList.add("menu-icon-active");

        menuToggleContainer.style.top = "-72px";
        iconsMenu.style.right = "-34px";
    }
    menu.classList = "hide";

    prevYScrollpos = currentYScrollPos;
    prevXScrollpos = currentXScrollPos;
}