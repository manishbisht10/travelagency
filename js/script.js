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