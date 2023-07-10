// ----------NAVIGATION----------

let menu = document.getElementsByClassName("menu")[0];
let links = document.getElementsByClassName("links")[0];
let link = document.querySelectorAll(".link");

menu.addEventListener("click",()=>{
    links.classList.toggle("active");
});

link.forEach((item,i) => {
    link[i].addEventListener("click",()=>{
        links.classList.toggle("active");
    })
});


// ---------COUNTER----------

let sectAbout = document.getElementsByClassName("about")[0];
let counter = document.querySelectorAll(".counter span");
let counterActivated = false;

window.addEventListener("scroll",() => {

    if (pageYOffset > sectAbout.offsetTop - (0.75 * sectAbout.offsetHeight) && counterActivated === false){
        
        counter.forEach(count => {
            count.innerText = 0;
            let countNum = 0;
            const target = parseInt(count.dataset.count);

            function updateCount(){
                if(countNum < target){
                    countNum++;
                    count.innerText = countNum;
                    
                    setTimeout(updateCount,0.1);
                }
            }

            updateCount();
            counterActivated = true;

        })
    }
});


// ----------SWIPER-1----------

const swiper1 = new Swiper(".gallery #swiper-1",{
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 15,

    pagination: {
        el: ("#swiper-1 .swiper-custom-pagination"),
        clickable: true,
    },

    navigation: {
        nextEl:".swiper-1-custom-nav .nav-right",
        prevEl:".swiper-1-custom-nav .nav-left"
    },

    loop: true,


});


// ----------GREENSHADE-----------

const slide = document.getElementsByClassName("swiper-wrapper")[0];
const shadeLeft = document.getElementsByClassName("greenShade")[0];
const shadeRight = document.getElementsByClassName("greenShade")[1];

window.addEventListener("scroll",() =>{
    const sheight = slide.offsetHeight;
    const hhh = sheight + "px";
    shadeLeft.style.height = hhh;
    shadeRight.style.height = hhh; 
});


// ----------SWIPER-2-----------
const swiper2 = new Swiper(".testimonials .slider-testimonial #swiper-2",{
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,

    navigation: {
        nextEl:"#swiper-2 .swiper-2-custom-nav .nav-right",
        prevEl:"#swiper-2 .swiper-2-custom-nav .nav-left"
    },

    pagination: {
        el: ("#swiper-2 .swiper-2-custom-pagination"),
        clickable: true,
    },
});