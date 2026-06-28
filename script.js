/* ==========================================
   SCRIPT.JS
   PART 1
   Loading + Typing + Music + Navigation
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loading").style.display = "none";

            typeName();

        }, 800);

    }, 2500);

});

/* ==========================
   ELEMENT
========================== */

const hero = document.getElementById("hero");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const wish = document.getElementById("wish");
const gift = document.getElementById("gift");
const ending = document.getElementById("ending");

const music = document.getElementById("bgMusic");

const openLetter = document.getElementById("openLetter");
const nextGallery = document.getElementById("nextGallery");
const nextWish = document.getElementById("nextWish");

const giftBox = document.getElementById("giftBox");

const replay = document.getElementById("replay");

/* ==========================
   TYPING EFFECT
========================== */

const typingTarget = document.getElementById("typingName");

const typingText = "Nopi ❤️";

let typingIndex = 0;

function typeName(){

typingTarget.innerHTML = "";

typingIndex = 0;

typingLoop();

}

function typingLoop(){

if(typingIndex < typingText.length){

typingTarget.innerHTML += typingText.charAt(typingIndex);

typingIndex++;

setTimeout(typingLoop,120);

}

}

/* ==========================
   PAGE FUNCTION
========================== */

function hideAll(){

document.querySelectorAll(".page").forEach(page=>{

page.classList.add("hidden");

});

}

function showPage(page){

    hideAll();

    page.classList.remove("hidden");

    page.classList.add("fade-in");

    page.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

/* ==========================
   HERO -> LETTER
========================== */

openLetter.addEventListener("click",()=>{

music.play().catch(()=>{});

hero.style.display="none";

showPage(letter);

if(typeof confetti==="function"){

confetti({

particleCount:180,

spread:90,

origin:{y:.7}

});

}

});

/* ==========================
   LETTER -> GALLERY
========================== */

nextGallery.addEventListener("click",()=>{

showPage(gallery);

});

/* ==========================
   GALLERY -> WISH
========================== */

nextWish.addEventListener("click",()=>{

showPage(wish);

});

/* ==========================
   WISH -> GIFT
========================== */

document

.getElementById("changeWish")

/* ==========================
   GIFT -> ENDING
========================== */

giftBox.addEventListener("click",()=>{

giftBox.style.transform="scale(.9)";

setTimeout(()=>{

giftBox.style.transform="scale(1.15) rotate(6deg)";

},180);

setTimeout(()=>{

showPage(ending);

},900);

});

/* ==========================
   REPLAY
========================== */

replay.addEventListener("click",()=>{

location.reload();

});

/* ==========================================
   SCRIPT.JS
   PART 2
   Gallery + Wishes + Music
========================================== */

/* ==========================
   GALLERY SLIDER
========================== */

const galleryImages = document.querySelectorAll(".gallery-slider img");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

galleryImages.forEach((img,i)=>{

img.classList.toggle("active",i===index);

});

dots.forEach((dot,i)=>{

dot.classList.toggle("active",i===index);

});

}

function nextSlide(){

currentSlide++;

if(currentSlide>=galleryImages.length){

currentSlide=0;

}

showSlide(currentSlide);

}

showSlide(currentSlide);

setInterval(nextSlide,4000);

/* klik dot */

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

currentSlide=index;

showSlide(currentSlide);

});

});

/* ==========================
   WISH TEXT
========================== */

const wishes=[

"Semoga panjang umur dan sehat selalu ❤️",

"Semoga semua impianmu satu per satu menjadi kenyataan ✨",

"Semoga setiap harimu dipenuhi tawa dan kebahagiaan 😊",

"Semoga kamu selalu dikelilingi orang-orang yang tulus 🤍",

"Semoga rezekimu dilancarkan dan hidupmu penuh berkah 🌸",

"Semoga senyummu tidak pernah hilang dari wajahmu 💖"

];

let wishIndex=0;

const wishText=document.getElementById("wishText");

const changeWish=document.getElementById("changeWish");

changeWish.addEventListener("click",()=>{

wishIndex++;

if(wishIndex<wishes.length){

wishText.classList.remove("fade-in");

void wishText.offsetWidth;

wishText.classList.add("fade-in");

wishText.innerHTML=wishes[wishIndex];

}else{

showPage(gift);

}

});

/* ==========================
   MUSIC FADE IN
========================== */

music.volume=0;

function fadeMusic(){

let volume=0;

const fade=setInterval(()=>{

volume+=0.05;

if(volume>=1){

volume=1;

clearInterval(fade);

}

music.volume=volume;

},200);

}

openLetter.addEventListener("click",()=>{

fadeMusic();

});

/* ==========================================
   SCRIPT.JS
   PART 3A
   Premium Effects
========================================== */

/* ==========================
   CONFETTI
========================== */

function launchConfetti(){

if(typeof confetti!=="function") return;

confetti({

particleCount:250,

spread:120,

origin:{y:.6}

});

setTimeout(()=>{

confetti({

particleCount:180,

angle:60,

spread:70,

origin:{x:0}

});

confetti({

particleCount:180,

angle:120,

spread:70,

origin:{x:1}

});

},300);

}

/* ==========================
   FIREWORKS
========================== */

function launchFireworks(){

if(typeof confetti!=="function") return;

const duration=4000;

const end=Date.now()+duration;

(function frame(){

confetti({

particleCount:6,

angle:60+Math.random()*60,

spread:90,

origin:{

x:Math.random(),

y:Math.random()*.6

}

});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

}

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=

(5+Math.random()*5)+"s";

heart.style.fontSize=

(18+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,700);

/* ==========================
   SAKURA
========================== */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=

(6+Math.random()*5)+"s";

petal.style.fontSize=

(18+Math.random()*18)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,1200);

/* ==========================
   BALLOON
========================== */

const balloonColors=[

"#ff4fa1",

"#ff7ac8",

"#ffd166",

"#8ec5ff",

"#b388ff"

];

function createBalloon(){

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.style.left=

Math.random()*100+"vw";

balloon.style.background=

balloonColors[

Math.floor(Math.random()*balloonColors.length)

];

balloon.style.color=

balloon.style.background;

balloon.style.animationDuration=

(8+Math.random()*6)+"s";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},15000);

}

setInterval(createBalloon,3000);

/* ==========================
   GIFT CLICK EFFECT
========================== */

giftBox.addEventListener("click",()=>{

launchConfetti();

launchFireworks();

});

/* ==========================================
   SCRIPT.JS
   PART 3B-1
   Shooting Star • Sparkle • Cursor Glow
========================================== */

/* ==========================
   SHOOTING STAR
========================== */

function createShootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.top=Math.random()*35+"vh";

star.style.left="-250px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},3000);

}

setInterval(createShootingStar,5000);

/* ==========================
   SPARKLE
========================== */

function createSparkle(x,y){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=x+"px";

sparkle.style.top=y+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},1300);

}

/* ==========================
   CURSOR GLOW
========================== */

const cursor=document.getElementById("cursor-light");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

if(Math.random()>0.75){

createSparkle(e.clientX,e.clientY);

}

});

/* ==========================
   TOUCH SUPPORT (HP)
========================== */

document.addEventListener("touchmove",(e)=>{

const touch=e.touches[0];

cursor.style.left=touch.clientX+"px";

cursor.style.top=touch.clientY+"px";

if(Math.random()>0.8){

createSparkle(touch.clientX,touch.clientY);

}

});

/* ==========================
   TWINKLING STARS
========================== */

function createStar(){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(1+Math.random()*2)+"s";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},5000);

}

setInterval(createStar,700);

/* ==========================================
   SCRIPT.JS
   PART 3B-2
   FINAL
========================================== */

/* ==========================
   ENDING EFFECT
========================== */

const endingObserver = new MutationObserver(() => {

    if (!ending.classList.contains("hidden")) {

        launchConfetti();

        launchFireworks();

    }

});

endingObserver.observe(ending, {
    attributes: true,
    attributeFilter: ["class"]
});

/* ==========================
   AUTO SCROLL
========================== */

function smoothTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/* ==========================
   PAGE TRANSITION
========================== */

document.querySelectorAll(".page").forEach(page => {

    page.addEventListener("transitionend", () => {

        page.classList.remove("fade-in");

    });

});

/* ==========================
   RANDOM HEART BURST
========================== */

function heartBurst() {

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 120);

    }

}

giftBox.addEventListener("click", heartBurst);

/* ==========================
   MUSIC LOOP SAFETY
========================== */

music.addEventListener("ended", () => {

    music.currentTime = 0;

    music.play();

});

/* ==========================
   REPLAY
========================== */

replay.addEventListener("click", () => {

    music.pause();
    music.currentTime = 0;

    hideAll();

    ending.classList.add("hidden");
    gift.classList.add("hidden");
    wish.classList.add("hidden");
    gallery.classList.add("hidden");
    letter.classList.add("hidden");

    hero.style.display = "flex";

    typeName();

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});

/* ==========================
   PRELOAD IMAGE
========================== */

document.querySelectorAll("img").forEach(img => {

    const preload = new Image();

    preload.src = img.src;

});

/* ==========================
   RANDOM BACKGROUND EFFECT
========================== */

setInterval(() => {

    if (Math.random() > 0.5) {

        createHeart();

    }

    if (Math.random() > 0.7) {

        createPetal();

    }

}, 2500);

/* ==========================
   START EFFECT
========================== */

console.log("🎉 Happy Birthday Nopi ❤️");
console.log("Made with ❤️ by Jawir");