function men() {
    let drop = document.getElementById('drop')
    drop.style.display = "block"
}
function men2() {
    let drop = document.getElementById('drop')
    let drop1 = document.getElementById('drop1')
    drop.style.display = "none"
    drop1.style.display = "none"
}
function women() {
    let drop1 = document.getElementById('drop1')
    drop1.style.display = "block"
}
function women2() {
    let drop1 = document.getElementById('drop1')
    drop1.style.display = "none"
}
function Access() {
    let drop2 = document.getElementById('drop2')
    drop2.style.display = "block"
}
function Access2() {
    let drop2 = document.getElementById('drop2')
    drop2.style.display = "none"
}

let post = document.getElementById('post')

post.onclick = function () {
    let modal = document.getElementById('modal')
    modal.style.display = "block"
    post.style.display="none"
    overlay.style.display="block"
}

let btn = document.getElementById('btn')

btn.onclick = function () {
    let modal = document.getElementById('modal')
    modal.style.display = "none"
    post.style.display="block"
    overlay.style.display="none"
}

let btn1 = document.getElementById('btn1')

btn1.onclick = function () {
    let modal = document.getElementById('modal')
    modal.style.display = "none"
    post.style.display="block"
    overlay.style.display="none"
}


let boru = document.getElementById('boru')

boru.onclick = function(){
    let sara = document.getElementById('sara')
    let mail = document.getElementById('mail').value
    if(mail === ""){
        sara.style.display="block"
    }else{
        sara.style.display="none"
    }
}

let cart_img = document.getElementById('cart_img')

let cart = document.getElementById('cart')
let overlay = document.getElementById('overlay')
cart_img.onclick = function(){
    cart.style.display="block"
    overlay.style.display="block"
}

overlay.onclick = function(){
    cart.style.display="none"
    overlay.style.display="none"
    modal.style.display="none"
    post.style.display="block"
}

let close1 = document.getElementById('close')

close1.onclick=function(){
    overlay.style.display="none"
    cart.style.display="none"
}


let instagram = document.getElementById('instagram')
let twitter = document.getElementById('twitter')
let youtube = document.getElementById('youtube')
let face = document.getElementById('face')

instagram.onclick  = function(){
    window.location.href="https://www.instagram.com/greats/?hl=en"
}
face.onclick  = function(){
    window.location.href="https://web.facebook.com/GreatsBrand/?_rdc=1&_rdr"
}
twitter.onclick  = function(){
    window.location.href="https://x.com/greatsbrand?lang=en"
}
youtube.onclick  = function(){
    window.location.href="https://www.youtube.com/channel/UC6aQTqGoLwQNiVTlBh9eZhQ"
}

let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
function sub(){
    console.log('working')
    let emailErr = document.getElementById('emailErr').value
    let span = document.getElementById('span')
    if(emailErr === ""){
        span.innerHTML = "Please enter an email address"
    }else if(!emailRegex.test(emailErr)){
        span.innerHTML = "Please enter a valid email address"
    }else{
        span.innerHTML = "You have successufully Suscribed!!"
        span.style.color="green"
    }
}