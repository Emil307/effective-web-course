const next = document.getElementById('next');
const prev = document.getElementById('prev');

let slideIndex = localStorage.getItem('index');
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
    localStorage.setItem('index', slideIndex);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
	localStorage.setItem('index', slideIndex);
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
        localStorage.setItem('index', slideIndex);
    };
    if (event.code == 'ArrowRight') {
        nextSlide();
        localStorage.setItem('index', slideIndex);
    };
    if (event.code == 'ArrowLeft') {
        previousSlide();
        localStorage.setItem('index', slideIndex);
    };
});

let timer = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
	localStorage.setItem('index', slideIndex);
}, 7000);