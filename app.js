let slides = document.querySelectorAll(".slide")
let prevBtn = document.querySelector(".prevbtn")
let nextBtn = document.querySelector(".nextbtn")


slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
    // console.log(slide)
})
let counter = 0

nextBtn.addEventListener("click", () => {
    counter++;

    carousel()
})
prevBtn.addEventListener("click", () => {
    counter--
    carousel()
})


function carousel() {

    // if (counter == slides.length) {
    //     counter = 0
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1
    // }




    if (counter < 0) {
        counter = 0
    }

    if (counter < slides.length - 1) {
        nextBtn.style.display = "block"
    } else {
        nextBtn.style.display = "none"

    }
    if (counter > 0) {
        prevBtn.style.display = "block"
    }
    else {
        prevBtn.style.display = "none"

    }
    slides.forEach((slide) => {


        slide.style.transform = `translateX(-${counter * 100}%)`
    })








}
prevBtn.style.display = "none"




