
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


let grid5 = document.getElementById('grid5')
let grid5a = document.getElementById('grid5a')

function forwomen() {
    grid5.style.display = "none"
    grid5a.style.display = "flex"

}
function formen() {
    grid5.style.display = "flex"
    grid5a.style.display = "none"
}


let post = document.getElementById('post')

post.onclick = function () {
    let modal = document.getElementById('modal')
    modal.style.display = "block"
    post.style.display="none"
    overlay1.style.display="block"
}

let btn = document.getElementById('btn')

btn.onclick = function () {
    let modal = document.getElementById('modal')
    modal.style.display = "none"
    post.style.display="block"
    overlay1.style.display="none"
}

let btn1 = document.getElementById('btn1')

btn1.onclick = function () {
    let modal = document.getElementById('modal')
    modal.style.display = "none"
    post.style.display="block"
    overlay1.style.display="none"
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

// let click1 = document.getElementById('click1')
// let click2 = document.getElementById('click2')
// let category = document.getElementById('category')


// click1.onclick = function(){
//     category.style.display="block"
//     click1.style.display="none"
//     click2.style.display="block"
// }
// click2.onclick = function(){
//     category.style.display="none"
//      click1.style.display="block"
//     click2.style.display="none"
// }


// let click3 = document.getElementById('click3')
// let click4 = document.getElementById('click4')
// let color = document.getElementById('color')


// click3.onclick = function(){
//     color.style.display="block"
//     click3.style.display="none"
//     click4.style.display="block"
// }
// click4.onclick = function(){
//     color.style.display="none"
//      click3.style.display="block"
//     click4.style.display="none"
// }



// let click5 = document.getElementById('click5')
// let click6 = document.getElementById('click6')
// let size = document.getElementById('size')


// click5.onclick = function(){
//     size.style.display="block"
//     click5.style.display="none"
//     click6.style.display="block"
// }
// click6.onclick = function(){
//     size.style.display="none"
//      click5.style.display="block"
//     click6.style.display="none"
// }



// let click9 = document.getElementById('click9')
// let click = document.getElementById('click')
// let materials = document.getElementById('materials')


// click9.onclick = function(){
//     materials.style.display="block"
//     click9.style.display="none"
//     click.style.display="block"
// }
// click.onclick = function(){
//     materials.style.display="none"
//      click9.style.display="block"
//     click.style.display="none"
// }


// let click7 = document.getElementById('click7')
// let click8 = document.getElementById('click8')
// let style = document.getElementById('style')


// click7.onclick = function(){
//     style.style.display="block"
//     click7.style.display="none"
//     click8.style.display="block"
// }
// click8.onclick = function(){
//     style.style.display="none"
//      click7.style.display="block"
//     click8.style.display="none"
// }


// let ash = document.getElementById('ash')
// let white = document.getElementById('white')
// let one = document.getElementById('one')
// let black = document.getElementById('black')
// let brown = document.getElementById('brown')
// let key1 = document.getElementById('key1')
// let key2 = document.getElementById('key2')
// let key3 = document.getElementById('key3')
// let key4 = document.getElementById('key4')
// let key5 = document.getElementById('key5')
// let text = document.getElementById('text')
// let git1 = document.getElementById('git1')
// let git2 = document.getElementById('git2')
// let git3 = document.getElementById('git3')
// let git4 = document.getElementById('git4')
// let git5 = document.getElementById('git5')
// let pra1 = document.getElementById('pra1')
// let pra2 = document.getElementById('pra2')
// let pra3 = document.getElementById('pra3')
// let pra4 = document.getElementById('pra4')
// let pra5 = document.getElementById('pra5')
// let text2 = document.getElementById('text2')
// let text1 = document.getElementById('text1')
// let text4 = document.getElementById('text4')
// let good1 = document.getElementById('good1')
// let good2 = document.getElementById('good2')
// let good3 = document.getElementById('good3')
// let good4 = document.getElementById('good4')
// let good5 = document.getElementById('good5')
// let text5 = document.getElementById('text5')
// let dot1 = document.getElementById('dot1')
// let dot2 = document.getElementById('dot2')
// let dot3 = document.getElementById('dot3')
// let rus1 = document.getElementById('rus1')
// let rus2 = document.getElementById('rus2')
// let rus3 = document.getElementById('rus3')
// let rus4 = document.getElementById('rus4')
// let rus5 = document.getElementById('rus5')
// let dus1 = document.getElementById('dus1')
// let dus2 = document.getElementById('dus2')
// let dus3 = document.getElementById('dus3')
// let dus4 = document.getElementById('dus4')
// let dus5 = document.getElementById('dus5')
// let good6 = document.getElementById('good6')
// let text6 = document.getElementById('text6')
// let good7 = document.getElementById('good7')
// let text7 = document.getElementById('text7')
// let buut = document.getElementById('buut')


// ash.onclick = function(){
//     text.innerHTML = "Black/Grey"
//     good1.src = "image/good1.png"
//     buut.style.display="none"
// }

// white.onclick = function(){
//     text.innerHTML='White/Black'
//     good1.src = "image/three.webp"
//     buut.style.display="none"
// }
// brown.onclick = function(){
//     text.innerHTML='Grey'
//     good1.src = "image/five.jpg"
//     buut.style.display="none"
// }
// black.onclick = function(){
//     text.innerHTML='Blue Multi'
//     good1.src = "image/four.webp"
//     buut.style.display="none"
// }
// one.onclick = function(){
//     text.innerHTML='Red'
//     good1.src = "image/six.jpg"
//     buut.style.display="none"
// }



// key1.onclick = function(){
//     text1.innerHTML = "Cargo/Multi"
//     good2.src = "image/key1.webp"
//     buut.style.display="none"
// }

// key2.onclick = function(){
//     text1.innerHTML='Black/White'
//     good2.src = "image/key2.jpg"
//     buut.style.display="none"
// }
// key3.onclick = function(){
//     text1.innerHTML='Retro Red/Black'
//     good2.src = "image/key3.jpg"
//     buut.style.display="none"
// }
// key4.onclick = function(){
//     text1.innerHTML='Blue Multi'
//     good2.src = "image/key4.jpg"
//     buut.style.display="none"
// }
// key5.onclick = function(){
//     text1.innerHTML='Cuoio'
//     good2.src = "image/key5.jpg"
//     buut.style.display="none"
// }



// git1.onclick = function(){
//     text2.innerHTML = "Cargo"
//     good3.src = "image/git1.webp"
//     buut.style.display="none"
// }

// git2.onclick = function(){
//     text2.innerHTML='Ash Grey'
//     good3.src = "image/git2.webp"
//     buut.style.display="none"
// }
// git3.onclick = function(){
//     text2.innerHTML='Black/White'
//     good3.src = "image/git3.webp"
//     buut.style.display="none"
// }
// git4.onclick = function(){
//     text2.innerHTML='Blanco Gum'
//     good3.src = "image/git4.webp"
//     buut.style.display="none"
// }
// git5.onclick = function(){
//     text2.innerHTML='Blanco'
//     good3.src = "image/git5.webp"
//     buut.style.display="none"
// }


// pra1.onclick = function(){
//     text4.innerHTML = "Cuoio"
//     good4.src = "image/key5.jpg"
//     buut.style.display="none"
// }

// pra2.onclick = function(){
//     text4.innerHTML='Black/White'
//     good4.src = "image/key2.jpg"
//     buut.style.display="none"
// }
// pra3.onclick = function(){
//     text4.innerHTML='Cargo Multi'
//     good4.src = "image/key1.webp"
//     buut.style.display="none"
// }
// pra4.onclick = function(){
//     text4.innerHTML='Retro Red/Black'
//     good4.src = "image/key3.jpg"
//     buut.style.display="none"
// }
// pra5.onclick = function(){
//     text4.innerHTML='Blue Multi'
//     good4.src = "image/key4.jpg"
//     buut.style.display="none"
// }



// dot1.onclick = function(){
//     text5.innerHTML = "Blanco"
//     good5.src = "image/rop1.jpg"
//     buut.style.display="none"
// }

// dot2.onclick = function(){
//     text5.innerHTML='Nero'
//     good5.src = "image/rop2.jpg"
//     buut.style.display="none"
// }
// dot3.onclick = function(){
//     text5.innerHTML='Black/White'
//     good5.src = "image/rop3.jpg"
//     buut.style.display="none"
// }


// rus1.onclick = function(){
//     text6.innerHTML = "Black/White"
//     good6.src = "image/key2.jpg"
//     buut.style.display="none"
// }

// rus2.onclick = function(){
//     text6.innerHTML='Cargo Multi'
//     good6.src = "image/key1.webp"
//     buut.style.display="none"
// }
// rus3.onclick = function(){
//     text6.innerHTML='Retro Red/Black'
//     good6.src = "image/key3.jpg"
//     buut.style.display="none"
// }
// rus4.onclick = function(){
//     text6.innerHTML='Blue Multi'
//     good6.src = "image/key4.jpg"
//     buut.style.display="none"
// }
// rus5.onclick = function(){
//     text6.innerHTML='Cuoio'
//     good6.src = "image/key5.jpg"
//     buut.style.display="none"
// }


// dus1.onclick = function(){
//     text7.innerHTML = "Blue Multi"
//     good7.src = "image/key4.jpg"
//     buut.style.display="none"
// }


// dus2.onclick = function(){
//     text7.innerHTML='Black/White'
//     good7.src = "image/key2.jpg"
//     buut.style.display="none"
// }

// dus3.onclick = function(){
//     text7.innerHTML='Cargo Multi'
//     good7.src = "image/key1.webp"
//     buut.style.display="none"
// }
// dus4.onclick = function(){
//     text7.innerHTML='Retro Red/Black'
//     good7.src = "image/key3.jpg"
//     buut.style.display="none"
// }

// dus5.onclick = function(){
//     text7.innerHTML='Cuoio'
//     good7.src = "image/key5.jpg"
//     buut.style.display="none"
// }

// let img_all = document.getElementById('img_all')
// let img_all2 = document.getElementById('img_all2')
// let all1 = document.getElementById('all1')

// img_all.onclick=function(){
//     all1.style.display="flex"
//     img_all.style.display="none"
//     img_all2.style.display="block"
// }
// img_all2.onclick=function(){
//     all1.style.display="none"
//     img_all.style.display="block"
//     img_all2.style.display="none"
// }


// let valry = document.getElementById('valry')
// let one1 = document.getElementById('one1')
// let two2 = document.getElementById('two2')
// let three3 = document.getElementById('three3')
// let four4 = document.getElementById('four4')

// one1.onclick=function(){
//     valry.innerHTML="Best Match"
//     // one1.style.color = "grey"
//     all1.style.display="none"
// }
// two2.onclick=function(){
//     valry.innerHTML="Price: Low to High"
//     // two2.style.color = "grey"
//     all1.style.display="none"
// }
// three3.onclick=function(){
//     valry.innerHTML="Price: High to Low"
//     // three3.style.color = "grey"
//     all1.style.display="none"
// }
// four4.onclick=function(){
//     valry.innerHTML="Newest Arrivals"
//     // four4.style.color = "grey"
//     all1.style.display="none"
// }
 


let cart_img1 = document.getElementById('cart_img1')

let cart1 = document.getElementById('cart1')
let overlay1 = document.getElementById('overlay1')
cart_img1.onclick = function(){
    cart1.style.display="block"
    overlay1.style.display="block"
}

overlay1.onclick = function(){
    cart1.style.display="none"
    overlay1.style.display="none"
    modal.style.display="none"
    post.style.display="block"
}

let close1 = document.getElementById('close')

close1.onclick=function(){
    overlay1.style.display="none"
    cart1.style.display="none"
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
