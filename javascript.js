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