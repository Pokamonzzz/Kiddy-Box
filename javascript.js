function togglenav() {
    var dropdown = document.getElementById("checkout");
    dropdown.classList.toggle('show');

    if (dropdown.classList.contains('show')) {
        // Set height for fullscreen
        dropdown.style.height = "100%";
    } else {
        // Reset the height when closing
        dropdown.style.height = "0";
    }
}

function closenav() {
    var dropdown = document.getElementById("checkout");
    dropdown.classList.remove('show');
    dropdown.style.height = "0";
}


document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");
    const lottieContainer = document.getElementById("lottie");

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Show the Lottie animation
        lottieContainer.classList.add("shows");

        // Hide the Lottie animation after 3 seconds
        setTimeout(function () {
            lottieContainer.classList.remove("shows");
        }, 4000);

        // Here you can add your code to submit the form data
        // For example, you can use fetch or XMLHttpRequest to send the data to your server
    });
});

