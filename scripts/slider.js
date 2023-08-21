const sliderContainer = document.getElementById('slider-container');
const sliderBlocks = document.getElementsByClassName('table-main__slide');
const circles = document.getElementById('circles');

let currentIndex = 0;

function updateSliderPosition() {
	const offset = currentIndex * -100;
	sliderContainer.style.transform = `translateX(${offset}%)`;
	removeCircleActiveClasses();
	circles.children[currentIndex].classList.add('navigation__circle_active');
}

function removeCircleActiveClasses() {
	for (let i = 0; i < circles.children.length; i++) {
		if (circles.children[i].classList.contains('navigation__circle_active')) {
			circles.children[i].classList.remove('navigation__circle_active');
			break;
		}
	}
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % sliderBlocks.length;
	console.log(currentIndex);
	updateSliderPosition();
}

function prevSlide() {
	currentIndex = (currentIndex - 1 + sliderBlocks.length) % sliderBlocks.length;
	updateSliderPosition();
}

const nextButton = document.getElementById('btn-next');
const prevButton = document.getElementById('btn-prev');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);