const next = document.getElementById('next');
const prev = document.getElementById('prev');

let slideIndex = localStorage.getItem('index');
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
    localStorage.setItem('index', slideIndex);
    addTimer();
}

function previousSlide() {
    showSlides(slideIndex -= 1);
	localStorage.setItem('index', slideIndex);
    addTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

next.onclick = function() {
	nextSlide();
};

prev.onclick = function() {
	previousSlide();
};

document.addEventListener('keydown', function (event) {
    if (event.code == 'Space') {
        nextSlide();
        addTimer();
        localStorage.setItem('index', slideIndex);
    };
    if (event.code == 'ArrowRight') {
        nextSlide();
        addTimer();
        localStorage.setItem('index', slideIndex);
    };
    if (event.code == 'ArrowLeft') {
        previousSlide();
        addTimer();
        localStorage.setItem('index', slideIndex);
    };
});

let timer = 0;
addTimer();
function addTimer() {
    clearInterval(timer)
    timer = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
        localStorage.setItem('index', slideIndex);
    }, 7000);
}