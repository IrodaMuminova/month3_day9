let submit = document.getElementById("submit");
let form = document.getElementById("form");

submit.addEventListener("click", function (e) {
    e.preventDefault();
    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let name_text = document.getElementById("name-text");
    let email_text = document.getElementById("email-text");
    let password_text = document.getElementById("password-text");

    // Remove
    first_name.classList.remove("border");
    last_name.classList.remove("border");
    email.classList.remove("border");
    password.classList.remove("border");
    name_text.innerHTML = "";
    password_text.innerHTML = "";
    email_text.innerHTML = "";

    if (first_name.value === "" || last_name.value === "") {
        name_text.innerHTML = 'Enter first and last names';
        first_name.classList.add("border");
        last_name.classList.add("border");
    }
    if (email.value == "") {
        email_text.innerHTML = 'Enter first and last names';
        email.classList.add("border");
    }
    if (password.value == "") {
        password_text.innerHTML = 'Enter first and last names';
        password.classList.add("border");
    }
})