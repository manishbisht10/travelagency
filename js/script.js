// date picker 

flatpickr("#datepicker", {
    minDate: "today",
    dateFormat: "Y-m-d"
});

//date pickers

flatpickr("#datepickers", {
    minDate: "today",
    dateFormat: "Y-m-d"
});

//toggle button clikc on js
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

hamburgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('d-none');
});

// click the video open popup box 
const videoSrc = "https://youtu.be/O4Jfs26XwpE?si=dc5s5MrQ3bsY0-e3"; 
const videoFrame = document.getElementById("videoFrame");

document.getElementById("videoModal").addEventListener("show.bs.modal", () => {
    videoFrame.src = videoSrc;
});

document.getElementById("videoModal").addEventListener("hidden.bs.modal", () => {
    videoFrame.src = "";
});
