const pwd = document.querySelector("#pass");
const confpwd = document.querySelector("#confirmpass");
const myspan = document.querySelector("span");
const lebtn = document.querySelector("button");

pwd.addEventListener("input", function () {
    if (pwd.value != confpwd.value) {
        confpwd.setCustomValidity("Password and confirmed password must be the same");
        pwd.setCustomValidity("Password and confirmed password must be the same");
        pwd.classList.add("error");
        confpwd.classList.add("error");
        myspan.textContent = "*Passwords do not match";
    } else {
        myspan.textContent = "";
        pwd.classList.remove("error");
        confpwd.classList.remove("error");
        pwd.setCustomValidity("");
        confpwd.setCustomValidity("");
    }
})

confpwd.addEventListener("input", function () {
    if (pwd.value != confpwd.value) {
        confpwd.setCustomValidity("Password and confirmed password must be the same");
        pwd.classList.add("error");
        confpwd.classList.add("error");
        myspan.textContent = "*Passwords do not match";
    } else {
        myspan.textContent = "";
        pwd.classList.remove("error");
        confpwd.classList.remove("error");
        pwd.setCustomValidity("");
        confpwd.setCustomValidity("");
    }
})
