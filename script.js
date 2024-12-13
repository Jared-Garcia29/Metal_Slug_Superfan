// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
// Transparent, Translucent, Opaque: https://www.mathsisfun.com/physics/images/transparent.svg

s1 = document.getElementById("Fio");
s2 = document.getElementById("Kasamoto");
s3 = document.getElementById("Tarma");
s4 = document.getElementById("Marco");

function remove() {
  s1.classList.remove("f1");
  s2.classList.remove("e1");
  s3.classList.remove("t1");
  s4.classList.remove("m1");
  s1.classList.remove("f2");
  s2.classList.remove("e2");
  s3.classList.remove("t2");
  s4.classList.remove("m2");
  s1.classList.remove("f2");
  s1.classList.remove("f3");
  s2.classList.remove("e3");
  s3.classList.remove("t3");
  s4.classList.remove("m3");
  s1.classList.remove("f4");
  s2.classList.remove("e4");
  s3.classList.remove("t4");
  s4.classList.remove("m4");
}
function restSounds() {
  document.getElementById("tamsound").pause();
  document.getElementById("erisound").pause();
  document.getElementById("fiosound").pause();
  document.getElementById("marcosound").pause();
}
function restRestart() {
  location.reload();
}

function casamotoSound() {
  restSounds();
  document.getElementById("erisound").play();
}

function soundTarma() {
  restSounds();
  document.getElementById("tamsound").play();
}
function soundFio() {
  restSounds();
  document.getElementById("fiosound").play();
}
function soundMarco() {
  restSounds();
  document.getElementById("marcosound").play();
}
function coolTank() {
  remove();
  s1.classList.add("f1");
  s2.classList.add("e1");
  s3.classList.add("t1");
  s4.classList.add("m1");
}
function fatFood() {
  remove();
  s1.classList.add("f2");
  s2.classList.add("e2");
  s3.classList.add("t2");
  s4.classList.add("m2");
}

function dangerExplosion() {
  remove();
  s1.classList.add("f3");
  s2.classList.add("e3");
  s3.classList.add("t3");
  s4.classList.add("m3");
}
function theWin() {
  remove();
  s1.classList.add("f4");
  s2.classList.add("e4");
  s3.classList.add("t4");
  s4.classList.add("m4");
}

// Function to change the YouTube video when the image is clicked

var videoIds = ["i4e-GcX5I38", "nc8sffdvLrs", "5W3NvR8XJT0", "sW58gVNemxg"];
var crabGifs = [
  "images/Laserboss.gif",
  "images/Monoeyes.gif",
  "images/Big.gif",
  "images/Crab.gif",
];
var textMessages = [
  "「その存在についてはほとんど知られていないが、南米にあるオロ・ソル遺跡の守護神のようだ。略奪された遺跡周辺で反乱軍と正規軍が対立した後、ソル・デ・ロッカーは激怒し、犯人たちを攻撃し始めた。」",
  "「モノイドは身長15メートルの人型エイリアンであり、モノイドUFOの謎の守護者である。彼らの名前は、顔の唯一の特徴である大きな目に由来し、UFOに近づきすぎる者を攻撃する。」",
  "「ビッグ・シー は、従来の戦車のように線路上を走行する大型の水陸両用戦艦である。艦首部分に隠された巨大な主砲だけでなく、複数の大砲砲台で武装している。文字通り陸上戦艦として機能する。」 ",
  "「巨大ヤドカリ は、もともとパラス島のヤドカリだったが、放射能の影響で巨大化した。後に反乱軍はこの巨大なカニを捕獲し、殻として使用するためにデンチュリオンのタンクをくりぬいて与えた。」",
];

// Start with the first video
var currentIndex = 0;
var currentGifIndex = 0;
var currentTextIndex = 0;

// Function to change the video when the image is clicked
function levelChange() {
  // Get the iframe elem'ent
  var iframe = document.getElementById("video");
  var crabGif = document.getElementById("crab");
  var dynamicText = document.getElementById("txt");

  // Get the current video ID from the array
  var newVideoId = videoIds[currentIndex];
  var newCrabGif = crabGifs[currentGifIndex];
  var newText = textMessages[currentTextIndex];

  // Update the iframe's src to the new video
  iframe.src =
    "https://www.youtube.com/embed/" + newVideoId + "?autoplay=1&mute=1";

  crabGif.src = newCrabGif;
  dynamicText.textContent = newText;
  currentTextIndex = (currentTextIndex + 1) % textMessages.length;

  // Update the index to point to the next video in the array
  // If we reach the end of the array, loop back to the first video
  currentIndex = (currentIndex + 1) % videoIds.length;
  currentGifIndex = (currentGifIndex + 1) % crabGifs.length;
}

// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
