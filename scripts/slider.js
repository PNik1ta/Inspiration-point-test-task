function initializeSlider(sliderId, prevBtnId, nextBtnId, circlesId) {
	const sliderContainer = document.getElementById(sliderId);
	const sliderBlocks = sliderContainer.getElementsByClassName('table-main__slide');
	const circles = document.getElementById(circlesId);

	const nextButton = document.getElementById(nextBtnId);
	const prevButton = document.getElementById(prevBtnId);

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
		if (currentIndex >= sliderBlocks.length) {
			nextButton.classList.add('disabled');
			return;
		}

		if (prevButton.classList.contains('disabled')) {
			prevButton.classList.remove('disabled');
		}
		currentIndex = (currentIndex + 1) % sliderBlocks.length;
		updateSliderPosition();

	}

	function prevSlide() {
		if (currentIndex <= 0) {
			prevButton.classList.add('disabled');
			return;
		}

		if (nextButton.classList.contains('disabled')) {
			nextButton.classList.remove('disabled');
		}
		currentIndex = (currentIndex - 1 + sliderBlocks.length) % sliderBlocks.length;
		updateSliderPosition();
	}

	nextButton.addEventListener('click', nextSlide);
	prevButton.addEventListener('click', prevSlide);
}

initializeSlider('slider-container-1', 'btn-prev-1', 'btn-next-1', 'circles-1');
initializeSlider('slider-container-2', 'btn-prev-2', 'btn-next-2', 'circles-2');