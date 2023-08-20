"use strict";

const burger = document.getElementById('burger');
const mobileLinks = document.getElementById('mobile-links');

burger.addEventListener('click', () => {
	mobileLinks.classList.toggle('active');
	burger.classList.toggle('active');
});