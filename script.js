const pwd = document.querySelector("#pass");
const confpwd = document.querySelector("#confirmpass");
const myspan = document.querySelector("span");
const lebtn = document.querySelector("button");

function confirmcorrect() {
    if (pwd.value != confpwd.value) {
        confpwd.setCustomValidity("Password and confirmed password must be the same");
        pwd.setCustomValidity("Password and confirmed password must be the same");
        myspan.textContent = "*Passwords do not match";
    } else {
        myspan.textContent = "";
        pwd.setCustomValidity("");
        confpwd.setCustomValidity("");
    }
}

pwd.addEventListener("input", function () {
    confirmcorrect()
})

confpwd.addEventListener("input", function () {
    confirmcorrect()
})
