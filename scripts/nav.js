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

function navItems(name, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.setAttribute("class", "navItem");
    a.setAttribute("href", href);
    a.textContent = name;
    li.appendChild(a);

    return li;
}