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

const formOpenbtn = document.querySelector("#form-open");
const login = document.querySelector(".login");
const formCont = document.querySelector(".form-cont");
const formClosebtn = document.querySelector(".form-close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw-hide");

formOpenbtn.addEventListener("click",() => login.classList.add("shows"));
formClosebtn.addEventListener("click",() => login.classList.remove("shows"));

signupBtn.addEventListener("click", (sign) => {
    sign.preventDefault();
    formCont.classList.add("actives");
});
loginBtn.addEventListener("click", (sign) => {
    sign.preventDefault();
    formCont.classList.remove("actives");
});

pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});
