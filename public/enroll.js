// enroll.js

// Unlock Course button
const unlockBtn = document.querySelector(".unlock");

// Bottom bar button
const bottomBtn = document.querySelector(".bottom-bar button");

// Payment page URL
const paymentPage = "payment.html";

// Redirect function
function unlockCourse() {
    window.location.href = paymentPage;
}

// Events
if (unlockBtn) {
    unlockBtn.addEventListener("click", unlockCourse);
}

if (bottomBtn) {
    bottomBtn.addEventListener("click", unlockCourse);
}