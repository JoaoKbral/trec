
const imgEm = document.querySelector(".fotosEmpresas");
const imgEv = document.querySelector(".fotosEventos");

const path = "../imgs/teste/";
const elite = path + "elite ";
const hauler = path + "hauler ";

imgsElite(elite, imgEm);
imgsHauler(hauler, imgEm);

imgsHauler(hauler, imgEv);
imgsElite(elite, imgEv);

function imgsElite(path, array) {
    for (let index = 0; index < 9; index++) {
        const img = document.createElement("img");
        const div = document.createElement("div");
        
        img.setAttribute("src", path + (index + 1) + ".png");
        div.appendChild(img);
        img.addEventListener("click", expand)
        array.appendChild(div);
    }
}

function imgsHauler(path, array) {
    for (let index = 0; index < 5; index++) {
        const img = document.createElement("img");
        const div = document.createElement("div");
        
        img.setAttribute("src", path + (index + 1) + ".png");
        div.appendChild(img);
        img.addEventListener("click", expand)
        array.appendChild(div);
    }
}
function expand() {
    const imgUrl = this.getAttribute("src");
    console.log(imgUrl);
    
    const fullScreen = document.createElement("div");

    const imgFullScreen = document.createElement("img");
    imgFullScreen.setAttribute("class", "imgFullScreen");
    fullScreen.setAttribute("class", "fullScreen");
    

    imgFullScreen.setAttribute("src", imgUrl);
    fullScreen.appendChild(imgFullScreen);
    fullScreen.addEventListener("click", close)
    document.body.appendChild(fullScreen);
}

function close() {
    this.classList.toggle("invisivel");
}