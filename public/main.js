

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "black";
    }


    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
    elmnt.style.color = 'white';
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("defaultOpen").click();
});

var swiperOptions2 = {
    loop: true,
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 6,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    speed: 4000,
    freeModeMomentum: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
};

var swiper = new Swiper(".swiper-container2", swiperOptions2);


let buttons = document.querySelectorAll(".slider-button");
let counter = 1;
let numberOfSlides = document.querySelector(".slider-parent").childElementCount;
let interval;

function back(button) {
    counter--;
    if (counter < 1) {
        counter = numberOfSlides;
    }
    button.href = `#slide-${counter}`;
    updateSlides();
}

function next(button) {
    counter++;
    if (counter > numberOfSlides) {
        counter = 1;
    }
    button.href = `#slide-${counter}`;
    updateSlides();
}

function updateSlides() {
    document.querySelectorAll('[data-slide-key]').forEach(slide => {
        slide.classList.remove('bg-green-600');
    });

    let currentSlide = document.querySelector(`[data-slide-key="${counter}"]`);
    if (currentSlide) {
        currentSlide.classList.add('bg-green-600');
    }
}

function startAutoscroll(intervalTime) {
    interval = setInterval(() => {
        let nextButton = document.querySelector(".slider-button.next");
        if (nextButton) {
            next(nextButton);
        }
    }, intervalTime);
}

function stopAutoscroll() {
    clearInterval(interval);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("next")) {
            next(button);
        } else if (button.classList.contains("back")) {
            back(button);
        }
        stopAutoscroll();
    });
});

startAutoscroll(3000);


