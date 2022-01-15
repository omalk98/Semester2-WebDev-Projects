var err = "";
const sucess = "Good!";
const exprLetr = /^[a-zA-Z ]*$/;
const exprLett = /^[a-zA-Z]/;
const exprNum = /\d/;
const exprCap = /[A-Z]/;

document.getElementById("fname").addEventListener("change", function () {
    err = "";
    let name = document.getElementById("fname").value;
    if (!exprLetr.test(name)) {
        err = "Name must contain letters only!";
    }
    let element = document.getElementById("err_fname");
    element.style.background = "red";
    element.innerHTML = err;
    if(!err) {
       element.innerHTML = sucess;
       element.style.background = "green";
    }
});

document.getElementById("lname").addEventListener("change", function () {
    err = "";
    let name = document.getElementById("lname").value;
    if (!exprLetr.test(name)) {
        err = "Name must contain letters only!";
    }
    let element = document.getElementById("err_lname");
    element.style.background = "red";
    element.innerHTML = err;
    if(!err) {
       element.innerHTML = sucess;
       element.style.background = "green";
    }
});

document.getElementById("passw").addEventListener("change", function() {
    err = "";
    let password = document.getElementById("passw").value;
    if(password.length < 6){
        err = "Password must be at least <u>6 characters</u> long.";
    }
    else {
        if(!exprLett.test(password)){
            err = "Password must <u>Start</u> with a <u>Letter</u>."
        }
        else{ 
            if(!exprCap.test(password)){
                err = "Password must contain a <u>Capital Letter</u>."
            }
            else {
                if(!exprNum.test(password)){
                    err = "Password must contain a <u>Number</u>."
                }
            }
        }
    }
    let element = document.getElementById("err_passw");
    element.style.background = "red";
    element.innerHTML = err;
    if(!err) {
       element.innerHTML = sucess;
       element.style.background = "green";
    }
});

document.getElementById("passw2").addEventListener("change", function() {
    err = "";
    let pass = document.getElementById("passw").value;
    let pass2 = document.getElementById("passw2").value;
    if (pass != pass2) {
        err = "Passwords must Match!";
    }
    let element = document.getElementById("err_passw2");
    element.style.background = "red";
    element.innerHTML = err;
    if(!err) {
       element.innerHTML = sucess;
       element.style.background = "green";
    }
});

document.getElementById("uname").addEventListener("change", function() {
    err = "";
    let uname = document.getElementById("uname").value;
    if(uname.length < 6){
        err = "Username must be at least <u>6 characters</u> long.";
    }
    else{
        if(!exprLett.test(uname)){
            err = "Username must <u>Start</u> with a <u>Letter</u>."
        }
    }
    let element =  document.getElementById("err_uname");
    element.style.background = "red";
    element.innerHTML = err;
    if(!err) {
       element.innerHTML = sucess;
       element.style.background = "green";
    }
});

document.getElementById("province").addEventListener("change", function(){
    err = "";
    let prov = document.getElementById("province").value
    if(prov == 0){
        err = "Please choose a Province!"
    }
    let element = document.getElementById("err_province");
    element.style.background = "red";
    element.innerHTML = err;
    if(!err) {
       element.innerHTML = sucess;
       element.style.background = "green";
    }
});

document.getElementById("signup").onsubmit = function() {
    err = "";
    let rd1 = document.getElementById("male");
    let rd2 = document.getElementById("female");
    let rd3 = document.getElementById("other");
    if(!rd1.checked && !rd2.checked && !rd3.checked){
        err = "Please select <u>1 Option</u>"
    } 
    let element = document.getElementById("err_gender");
    element.style.background = "red";
    element.innerHTML = err;
    if(!err) {
       element.innerHTML = sucess;
       element.style.background = "green";
    }
}

document.getElementById("age").addEventListener("change", function() {
    err = "";
    let age = document.getElementById("age").value;
    if(isNaN(age)){
        err = "Please Enter a <u>Number</u>.";
    }
    else if (parseInt(age) < 18 || parseInt(age) > 80){
        err = "Age should be Between <u>18-80</u>!";
    }
    let element = document.getElementById("err_age");
    element.style.background = "red";
    element.innerHTML = err;
    if(!err) {
       element.innerHTML = sucess;
       element.style.background = "green";
    }
});

document.getElementById("review").addEventListener("change", function() {
    err = "";
    let review = document.getElementById("review").value;
    if(review.length > 160){
        err = "Maximum of <u>160 Charachers</u> allowed!"
    }
    let element = document.getElementById("err_review");
    element.style.background = "red";
    element.innerHTML = err;
    if(!err) {
       element.innerHTML = sucess;
       element.style.background = "green";
    }
});

document.getElementById("signup").addEventListener("submit", (form) => {
    if(err !== ""){
        form.preventDefault();
    }
});
