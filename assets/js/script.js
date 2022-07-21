const diapo = document.getElementById("diapo");
const imgElements = [];
const imgFull = [];
const frameImg = document.createElement("div");
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(7px)";
//frameImg.style.backgroundColor = "rgba(138,43,226,0.7)"
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
document.body.prepend(frameImg);



//avec une boucle for
/* for (let i = 1; i <= 5; i++) {
    imgElements[i] = document.createElement("img");
    imgElements[i].src = "https://lwi.nexon.com/m_ba/brand/media/img_0" + i + ".png";
    imgElements[i].style.width ="100%";
    diapo.append(imgElements[i]);
} */

//meme chose avec une bucle while :
let i = 1;
while (i <= 5) {
    imgElements[i] = document.createElement("img");
    imgElements[i].src = "https://lwi.nexon.com/m_ba/brand/media/img_0" + i + ".png";
    imgElements[i].style.width = "100vw";
    diapo.append(imgElements[i]);
    let n = i;
    imgElements[i].addEventListener(
        "click",
        () => {
            frameImg.style.display = "flex";
            imgFull[n] = document.createElement("img");
            imgFull[n].src = "https://lwi.nexon.com/m_ba/brand/media/img_0" + n + ".png";
            frameImg.append(imgFull[n]);
        }
    )
    i++;
}
frameImg.addEventListener(
    "click",
    (event) => {
        if (!frameImg.querySelector("img").contains(event.target)) {
            frameImg.style.display = "none";
            frameImg.innerHTML = "";
        }
    }
)