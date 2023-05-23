let picturearr = [
  "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJpevBOQMgZ-Gaeb54y2Tin-o5vsoOtYW2nYtCpzkYqtj6ENWsHD4d1Bv-AUymOggA",
  "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJpevBOQMgZ-Gaeb54y2Tin-o5vsoOtYW2nYtCpzkYqtj6ENWsHD4d1Bv-AUymOggA",
  "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQVtv8s0UPfAk9z-y_PMve7sVi9Q2jsJxTa0YV1fnRgfIympdhhj2OlfRnW1XCxPUEG",
  "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQVtv8s0UPfAk9z-y_PMve7sVi9Q2jsJxTa0YV1fnRgfIympdhhj2OlfRnW1XCxPUEG",
  "https://a-z-animals.com/media/2022/05/elephant-1024x691.jpg",
  "https://a-z-animals.com/media/2022/05/elephant-1024x691.jpg",
  "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
  "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
  "https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg",
  "https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg",
  "https://www.georgiaaquarium.org/wp-content/uploads/2018/08/common-bottlenose-dolphin.jpg",
  "https://www.georgiaaquarium.org/wp-content/uploads/2018/08/common-bottlenose-dolphin.jpg",
];

let takebox = 0;
let x;
let y;
let point = 0;

let box = document.getElementsByClassName("box");
let mainmenu = document.getElementById("mainmenu");

function createElements() {
  for (let o = 0; o < picturearr.length; o++) {
    mainmenu.innerHTML += `<div class="box" onclick="clickbox(event)"><img href=""/></div>`;
  }
  for (let i = 0; i < box.length; i++) {
    box[i].setAttribute("value", i.toString());
  }
}

createElements();

function test() {
  for (let i = 0; i < box.length; i++) {
    let randomNumber = Math.floor(Math.random() * picturearr.length);
    box[i].firstChild.src = picturearr[randomNumber];
    picturearr.splice(randomNumber, 1);
  }
}
test();

function clickbox(event) {
  if (takebox == 0) {
    x = event.target;
    if (!x.firstChild) {
      return;
    }
    takebox = takebox + 1;
    x.firstChild.style.display = "block";
  } else {
    y = event.target;
    if (!y.firstChild) {
      return;
    }
    takebox = takebox - 1;
    if (
      x.firstChild.getAttribute("src") == y.firstChild.getAttribute("src") &&
      x.getAttribute("value") != y.getAttribute("value")
    ) {
      y.firstChild.style.display = "block";

      point++;
      if (point == 6) {
        mainmenu.innerHTML = `<h1>you won</h1> <button onclick="newgame()">new game</button>`;
      }
    } else {
      y.firstChild.style.display = "none";
      x.firstChild.style.display = "none";
    }
  }
}

function newgame() {
  location.reload();
}
