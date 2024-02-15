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
// close the nav
function closenav() {
    var dropdown = document.getElementById("checkout");
    dropdown.classList.remove('show');
    dropdown.style.height = "0";
}


document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");
    const lottieContainer = document.getElementById("lottie");

    // Function to show the Lottie animation
    function showLottieAnimation() {
        lottieContainer.classList.add("shows");
        setTimeout(function () {
            lottieContainer.classList.remove("shows");
        }, 4000);
    }

    // Add event listener to the submit button to trigger animation
    document.getElementById("send-button").addEventListener("click", function (e) {
        e.preventDefault();
        
        // Show the Lottie animation
        showLottieAnimation();
    });

    // Add event listener to form to prevent default form submission
    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65936c07e98eb10765ce0164";
    document.getElementById("send-button").addEventListener("click", function (e) {

        e.preventDefault();
        
        let Name = document.getElementById("name").value;
        let Email = document.getElementById("email-about").value;
        let comments = document.getElementById("Comments").value;

        let jsondata = {
            "Name": Name,
            "Email": Email,
            "comments": comments
        };
        // send the data to the database
        let settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata),
            beforeSend: function () {
                document.getElementById("send-button").disabled = true;
                // Clear our form using the form ID and triggering its reset feature
                document.getElementById("feedback-form").reset();
            }
        }
        fetch("https://interactivedev-10a5.restdb.io/rest/accounts", settings)
            //inform problem with network
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                document.getElementById("send-button").disabled = false;
            })
            //inform problem with input
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                alert("There was an error processing your request. Please try again later or check if input in the valid data.");
                document.getElementById("send-button").disabled = false;
            });
    });
});