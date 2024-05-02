let email = document.querySelector(".email_field");
let submitBtn = document.querySelector(".submit_btn");
let dismissBtn = document.querySelector(".dismiss_btn");
let container = document.querySelector(".container");
let successMsgBox = document.querySelector(".success_message_box");
let emailError = document.querySelector(".emailError");
let form = document.querySelector("form");
let width = window.innerWidth;
console.log(width)

window.addEventListener('resize', () => {
    width = window.innerWidth;
    // console.log(width)

});

form.addEventListener("click", (e) => {
    e.preventDefault();
})


function validEmail() {

    if (email.value.length == 0) {
        emailError.style.display = "block";
        email.classList.add("mailError");
        return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailError.style.display = "block";
        email.classList.add("mailError");
        return false;
    }

    emailError.style.display = "none";
    email.classList.remove("mailError");
    return true;
}



function submitForm() {


    if (!validEmail()) {
        emailError.style.display = "block";
        email.classList.add("mailError");
        return false;
    }
    else {
        if ((width >= 320 && width < 768)) {
            container.style.display = "none";
            successMsgBox.classList.add("showBox");
        }
        else {
            container.style.display = "none";
            successMsgBox.classList.add("showMsgBox");
        }
    }

    email.value = " ";

}

function dismiss_box() {

    if ((width >= 320 && width < 768)) {
        container.style.display = "block";
        successMsgBox.classList.remove("showBox");
    }
    else {
        container.style.display = "flex";
        successMsgBox.classList.remove("showMsgBox");
    }
}


