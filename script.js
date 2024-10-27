
// if (Array.isArray(data)) {
//     data.forEach(e => {
//         console.log('Mapping product:', e);
//         let dis_grid = $('#dis_grid');
//         let grid = document.createElement('div');
//         grid.innerHTML = `
//             <!-- Your HTML structure here -->
//         `;
//         dis_grid.append(grid);
//     });
// } else {
//     console.error('Invalid data structure:', typeof data);
// }
// })
// .catch(error => console.error('API Error:', error));

$(document).ready(function () {
    let merchant = localStorage.getItem('user')
    console.log(merchant)
    fetch(`http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merchant}`)
        .then(res => res.json())
        // .then(res => console.log(res))
  
        .then(res => {
            let  dataArray = res?.data
            if (dataArray && Array.isArray(dataArray)) {
                dataArray.forEach(e => {
                  let dis_grid = $('#dis_grid')
                  let grid = document.createElement('div')
                  grid.innerHTML = `
                  <div
                style="background-color: rgba(255, 255, 255, 0.477); border: .1px solid rgb(200, 200, 200); height: 440px;">
                <div class="good2">
                  <div>
                     <a href="detail.html"> <img src=${e.image} alt="" id="good2" class="good2" style="position: relative;"></a>
                  </div>
                    <!-- <button id="buut"
                        style="width: 110px; height: 30px; border-radius: 30px; font-weight: 700; margin-top: 10px; margin-left: 170px; background-color: rgba(255, 255, 255, 0.479) ; border: .6px solid black; font-size: .7rem;">MADE IN ITALY</button> -->
                </div>
                <div style="margin-left: 10px;">
                    <div style="line-height: .4em;">
                        <div style="display: flex; justify-content: space-between; margin-right: 10px;">
                            <p>${e.brand}</p>
                            <p>$${e.price}.00</p>
                        </div>
                        
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <div style="width: 30px; height: 30px; border-radius: 50%; margin-top: 10px; background-image: url(image/led1.png) ; background-position: center; background-size: contain;"
                            id="key1">

                        </div>
                        <div style="width: 30px; height: 30px; border-radius: 50%; margin-top: 10px; background-image: url(image/led2.png) ; background-position: center; background-size: contain;"
                            id="key2">

                        </div>
                        <div style="width: 30px; height: 30px; border-radius: 50%; margin-top: 10px; background-image: url(image/led3.png) ; background-position: center;  background-size: contain;"
                            id="key3">

                        </div>
                        <div style="width: 30px; height: 30px; border-radius: 50%; margin-top: 10px; background-image: url(image/led4.png) ; background-position: center; background-size: contain;"
                            id="key4">

                        </div>
                        <div style="width: 30px; height: 30px; border-radius: 50%; margin-top: 10px; background-image: url(image/led5.png) ; background-position: center; background-size: contain;"
                            id="key5">

                        </div>
                    </div>
                    <div
                        style="display: flex; justify-content: space-between; align-items: center; margin-left: 10px; margin-right: 10px;">
                        <p class="add_cart" style="cursor:pointer;">Quick add</p>
                        <p style="font-size: 1.2rem; cursor: pointer;">+</p>
                    </div>
                </div>
            </div>
                  `
                  dis_grid.append(grid)
                });

            }
            })
})
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
    post.style.display = "none"
    overlay.style.display = "block"
}

let btn = document.getElementById('btn')

btn.onclick = function () {
    let modal = document.getElementById('modal')
    modal.style.display = "none"
    post.style.display = "block"
    overlay.style.display = "none"
}

let btn1 = document.getElementById('btn1')

btn1.onclick = function () {
    let modal = document.getElementById('modal')
    modal.style.display = "none"
    post.style.display = "block"
    overlay.style.display = "none"
}

let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
function sub() {
    console.log('working')
    let emailErr = document.getElementById('emailErr').value
    let span = document.getElementById('span')
    if (emailErr === "") {
        span.innerHTML = "Please enter an email address"
    } else if (!emailRegex.test(emailErr)) {
        span.innerHTML = "Please enter a valid email address"
    } else {
        span.innerHTML = "You have successufully Suscribed!!"
        span.style.color = "green"
    }
}

let click1 = document.getElementById('click1')
let click2 = document.getElementById('click2')
let category = document.getElementById('category')


click1.onclick = function () {
    category.style.display = "block"
    click1.style.display = "none"
    click2.style.display = "block"
}
click2.onclick = function () {
    category.style.display = "none"
    click1.style.display = "block"
    click2.style.display = "none"
}


let click3 = document.getElementById('click3')
let click4 = document.getElementById('click4')
let color = document.getElementById('color')


click3.onclick = function () {
    color.style.display = "block"
    click3.style.display = "none"
    click4.style.display = "block"
}
click4.onclick = function () {
    color.style.display = "none"
    click3.style.display = "block"
    click4.style.display = "none"
}



let click5 = document.getElementById('click5')
let click6 = document.getElementById('click6')
let size = document.getElementById('size')


click5.onclick = function () {
    size.style.display = "block"
    click5.style.display = "none"
    click6.style.display = "block"
}
click6.onclick = function () {
    size.style.display = "none"
    click5.style.display = "block"
    click6.style.display = "none"
}



let click9 = document.getElementById('click9')
let click = document.getElementById('click')
let materials = document.getElementById('materials')


click9.onclick = function () {
    materials.style.display = "block"
    click9.style.display = "none"
    click.style.display = "block"
}
click.onclick = function () {
    materials.style.display = "none"
    click9.style.display = "block"
    click.style.display = "none"
}


let click7 = document.getElementById('click7')
let click8 = document.getElementById('click8')
let style = document.getElementById('style')


click7.onclick = function () {
    style.style.display = "block"
    click7.style.display = "none"
    click8.style.display = "block"
}
click8.onclick = function () {
    style.style.display = "none"
    click7.style.display = "block"
    click8.style.display = "none"
}


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


// ash.onclick = function () {
//     text.innerHTML = "Black/Grey"
//     good1.src = "image/good1.webp"
// }

// white.onclick = function () {
//     text.innerHTML = 'White/Black'
//     good1.src = "image/three.webp"
// }
// brown.onclick = function () {
//     text.innerHTML = 'Grey'
//     good1.src = "image/five.jpg"
// }
// black.onclick = function () {
//     text.innerHTML = 'Blue Multi'
//     good1.src = "image/four.webp"
// }
// one.onclick = function () {
//     text.innerHTML = 'Red'
//     good1.src = "image/six.jpg"
  
// }



// key1.onclick = function () {
//     text1.innerHTML = "Cargo/Multi"
//     good2.src = "image/key1.webp"
// }

// key2.onclick = function () {
//     text1.innerHTML = 'Black/White'
//     good2.src = "image/key2.jpg"
// }
// key3.onclick = function () {
//     text1.innerHTML = 'Retro Red/Black'
//     good2.src = "image/key3.jpg"
// }
// key4.onclick = function () {
//     text1.innerHTML = 'Blue Multi'
//     good2.src = "image/key4.jpg"
// }
// key5.onclick = function () {
//     text1.innerHTML = 'Cuoio'
//     good2.src = "image/key5.jpg"
// }



// git1.onclick = function () {
//     text2.innerHTML = "Cargo"
//     good3.src = "image/git1.webp"
// }

// git2.onclick = function () {
//     text2.innerHTML = 'Ash Grey'
//     good3.src = "image/git2.webp"
// }
// git3.onclick = function () {
//     text2.innerHTML = 'Black/White'
//     good3.src = "image/git3.webp"
// }
// git4.onclick = function () {
//     text2.innerHTML = 'Blanco Gum'
//     good3.src = "image/git4.webp"
// }
// git5.onclick = function () {
//     text2.innerHTML = 'Blanco'
//     good3.src = "image/git5.webp"
// }


// pra1.onclick = function () {
//     text4.innerHTML = "Cuoio"
//     good4.src = "image/key5.jpg"
// }

// pra2.onclick = function () {
//     text4.innerHTML = 'Black/White'
//     good4.src = "image/key2.jpg"
// }
// pra3.onclick = function () {
//     text4.innerHTML = 'Cargo Multi'
//     good4.src = "image/key1.webp"
// }
// pra4.onclick = function () {
//     text4.innerHTML = 'Retro Red/Black'
//     good4.src = "image/key3.jpg"
// }
// pra5.onclick = function () {
//     text4.innerHTML = 'Blue Multi'
//     good4.src = "image/key4.jpg"
// }



// dot1.onclick = function () {
//     text5.innerHTML = "Blanco"
//     good5.src = "image/rop1.jpg"
// }

// dot2.onclick = function () {
//     text5.innerHTML = 'Nero'
//     good5.src = "image/rop2.jpg"
// }
// dot3.onclick = function () {
//     text5.innerHTML = 'Black/White'
//     good5.src = "image/rop3.jpg"
// }


// rus1.onclick = function () {
//     text6.innerHTML = "Black/White"
//     good6.src = "image/key2.jpg"
// }

// rus2.onclick = function () {
//     text6.innerHTML = 'Cargo Multi'
//     good6.src = "image/key1.webp"
// }
// rus3.onclick = function () {
//     text6.innerHTML = 'Retro Red/Black'
//     good6.src = "image/key3.jpg"
// }
// rus4.onclick = function () {
//     text6.innerHTML = 'Blue Multi'
//     good6.src = "image/key4.jpg"
// }
// rus5.onclick = function () {
//     text6.innerHTML = 'Cuoio'
//     good6.src = "image/key5.jpg"

// }


// dus1.onclick = function () {
//     text7.innerHTML = "Blue Multi"
//     good7.src = "image/key4.jpg"

// }


// dus2.onclick = function () {
//     text7.innerHTML = 'Black/White'
//     good7.src = "image/key2.jpg"
// }

// dus3.onclick = function () {
//     text7.innerHTML = 'Cargo Multi'
//     good7.src = "image/key1.webp"
// }
// dus4.onclick = function () {
//     text7.innerHTML = 'Retro Red/Black'
//     good7.src = "image/key3.jpg"
// }

// dus5.onclick = function () {
//     text7.innerHTML = 'Cuoio'
//     good7.src = "image/key5.jpg"
// }

let img_all = document.getElementById('img_all')
let img_all2 = document.getElementById('img_all2')
let all1 = document.getElementById('all1')

img_all.onclick = function () {
    all1.style.display = "flex"
    img_all.style.display = "none"
    img_all2.style.display = "block"
}
img_all2.onclick = function () {
    all1.style.display = "none"
    img_all.style.display = "block"
    img_all2.style.display = "none"
}


let valry = document.getElementById('valry')
let one1 = document.getElementById('one1')
let two2 = document.getElementById('two2')
let three3 = document.getElementById('three3')
let four4 = document.getElementById('four4')

one1.onclick = function () {
    valry.innerHTML = "Best Match"
    // one1.style.color = "grey"
    all1.style.display = "none"
}
two2.onclick = function () {
    valry.innerHTML = "Price: Low to High"
    // two2.style.color = "grey"
    all1.style.display = "none"
}
three3.onclick = function () {
    valry.innerHTML = "Price: High to Low"
    // three3.style.color = "grey"
    all1.style.display = "none"
}
four4.onclick = function () {
    valry.innerHTML = "Newest Arrivals"
    // four4.style.color = "grey"
    all1.style.display = "none"
}



let cart_img = document.getElementById('cart_img')

let cart = document.getElementById('cart')
let overlay = document.getElementById('overlay')
cart_img.onclick = function () {
    cart.style.display = "block"
    overlay.style.display = "block"
}

overlay.onclick = function () {
    cart.style.display = "none"
    overlay.style.display = "none"
    modal.style.display = "none"
    post.style.display = "block"
}

let close = document.getElementById('close')

close.onclick = function () {
    overlay.style.display = "none"
    cart.style.display = "none"
}


let instagram = document.getElementById('instagram')
let twitter = document.getElementById('twitter')
let youtube = document.getElementById('youtube')
let face = document.getElementById('face')

instagram.onclick = function () {
    window.location.href = "https://www.instagram.com/greats/?hl=en"
}
face.onclick = function () {
    window.location.href = "https://web.facebook.com/GreatsBrand/?_rdc=1&_rdr"
}
twitter.onclick = function () {
    window.location.href = "https://x.com/greatsbrand?lang=en"
}
youtube.onclick = function () {
    window.location.href = "https://www.youtube.com/channel/UC6aQTqGoLwQNiVTlBh9eZhQ"
}

let increase = document.getElementById('increase')
let zero = document.getElementById('zero')
let zero1 = document.getElementById('zero1')
let decrease = document.getElementById('decrease')
let wire = document.getElementById('wire')
let money = document.getElementById('money')

// wire.innerHTML = '0'
// let price = '189.00'
// zero.innerHTML = 0
// g = 0
// increase.onclick = function () {
//     g += 1
//     zero.innerHTML = g
//     zero1.innerHTML = g
//     money.innerHTML = price + 189
// }
// decrease.onclick = function () {
//     if (g == 0) {
//         g -= 0
//         zero.innerHTML = g
//         zero1.innerHTML = g
//         money.innerHTML = price - 189
//     } else {
//         g -= 1
//         zero.innerHTML = g
//         zero1.innerHTML = g
//         wire.innerHTML = price + 189
//     }
// }







// let quick = document.getElementById('quick')

// quick.onclick = function(){
// JSON.stringify(localStorage.setItem('user', local)) || {}
// }