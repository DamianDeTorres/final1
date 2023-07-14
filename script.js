var clickMenu=document.getElementById("desplegar");

clickMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegable").style.visibility="visible";
    document.getElementById("desplegar").style.visibility="hidden"
    document.getElementById("contraer").style.visibility="visible"
    document.getElementById("contraer").style.opacity="1";

})
var clickMenu=document.getElementById("contraer");

clickMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegable").style.visibility="hidden";
    document.getElementById("contraer").style.visibility="hidden"
    document.getElementById("desplegar").style.visibility="visible"
    document.getElementById("desplegar").style.opacity="1";
})

const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")


let index = 0

let interval = setInterval(startInterval, 3000)

function startInterval() {
    index++
    moveCarousel()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(startInterval, 500)
}

function moveCarousel() {
    if (index > imagesCollection.length -1) {
        index = 0
    } else if (index < 0) {
        index = imagesCollection.length -1
    }

    images.style.transform = `translateX(-${index * 100}%)`
}

function prevSlide() {
    index--
    clearInterval(interval) 
    moveCarousel()
}

function nextSlide() {
    index++
    clearInterval(interval) 
    moveCarousel()
}

var mouseSobreSucursal=document.getElementById("iconoSucursal");

mouseSobreSucursal.addEventListener("mouseover", ()=> {
    document.getElementById("sucursales").style.visibility="visible";
    document.getElementById("sucursales").style.opacity="1";
});

var mouseSobreSucursal=document.getElementById("iconoSucursal");

mouseSobreSucursal.addEventListener("mouseout", ()=> {
    document.getElementById("sucursales").style.visibility="hidden";
    document.getElementById("sucursales").style.opacity="0";
});

var mouseSobreSucursal=document.getElementById("sucursalCba");

mouseSobreSucursal.addEventListener("mouseover", ()=> {
    document.getElementById("sucursales").style.visibility="visible";
    document.getElementById("sucursales").style.opacity="1";
});

var mouseSobreSucursal=document.getElementById("sucursalCba");

mouseSobreSucursal.addEventListener("mouseout", ()=> {
    document.getElementById("sucursales").style.visibility="hidden";
    document.getElementById("sucursales").style.opacity="0";
});

var mouseSobreSucursal=document.getElementById("sucursalVCP");

mouseSobreSucursal.addEventListener("mouseover", ()=> {
    document.getElementById("sucursales").style.visibility="visible";
    document.getElementById("sucursales").style.opacity="1";
});

var mouseSobreSucursal=document.getElementById("sucursalVCP");

mouseSobreSucursal.addEventListener("mouseout", ()=> {
    document.getElementById("sucursales").style.visibility="hidden";
    document.getElementById("sucursales").style.opacity="0";
});

var mouseSobreSucursal=document.getElementById("sucursalAG");

mouseSobreSucursal.addEventListener("mouseover", ()=> {
    document.getElementById("sucursales").style.visibility="visible";
    document.getElementById("sucursales").style.opacity="1";
});

var mouseSobreSucursal=document.getElementById("sucursalAG");

mouseSobreSucursal.addEventListener("mouseout", ()=> {
    document.getElementById("sucursales").style.visibility="hidden";
    document.getElementById("sucursales").style.opacity="0";
});

var mouseSobreOferta1=document.getElementById("imgPrinc1");

mouseSobreOferta1.addEventListener("mouseover",()=>{
    document.getElementById("imgSec1").style.opacity="1";
    document.getElementById("imgSec1").style.visibility="visible";
})

var mouseSobreOferta1=document.getElementById("imgSec1");

mouseSobreOferta1.addEventListener("mouseout",()=>{
    document.getElementById("imgSec1").style.opacity="0";
    document.getElementById("imgSec1").style.visibility="hidden";
})




