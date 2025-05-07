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
    mobileNav.classList.toggle('show');
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


//show notifications msg  not submit input form
document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const checkinInput = document.getElementById("datepicker");
    const checkoutInput = document.getElementById("datepickers");
    const travellerInput = document.querySelector(".Traveller-box");
    const submitBtn = document.querySelector(".cabins-box");

    submitBtn.addEventListener("click", function (event) {
        const location = locationInput.value.trim();
        const checkin = checkinInput.value.trim();
        const checkout = checkoutInput.value.trim();
        const travellers = travellerInput.value.trim();

        if (!location || !checkin || !checkout || !travellers) {
            alert("Please fill out all fields before submitting.");
            return;
        }
        alert("Your form has been submitted successfully!");
    });
});


// click the button change heart icon

document.addEventListener("DOMContentLoaded", function () {
    const heartIcons = document.querySelectorAll(".heart-icon");

    heartIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            if (icon.classList.contains("active-heart")) {
                // Return to outline (unfilled) and black
                icon.classList.remove("bxs-heart", "active-heart");
                icon.classList.add("bx-heart");
                icon.style.color = "black";
            } else {
                // Fill heart and make it red
                icon.classList.remove("bx-heart");
                icon.classList.add("bxs-heart", "active-heart");
                icon.style.color = "red";
            }
        });
    });
});

