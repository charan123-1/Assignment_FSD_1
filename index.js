function validateForm() {
    const email = document.getElementById("email").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phonenumber").value;
    const roll = document.getElementById("rollnumber").value;
    return (isValidEmail(email) && isValidname(firstname) && isValidname(lastname) && isValidPhone(phone) && isValidroll(roll));
}
function isValidEmail(email) {
    let valid = email.includes('@');
    if (!valid) {
        alert("Invalid Email ID!")
    }
    console.log(valid);
    return valid;
}
function isValidname(name) {
    let valid = (name !== "");
    console.log(valid);
    if (!valid) {
        alert("Invalid Name!");
    }
    return valid;
}
function isValidPhone(phone) {
    let valid = (phone.length == 10);
    console.log(valid);
    if (!valid) {
        alert("Invalid Phone number!");
    }
    return valid;
}
function isValidroll(roll) {
    let valid = roll.startsWith("S2019");
    console.log(valid);
    if (!valid) {
        alert("Invalid Roll number!");
    }
    return valid;
}