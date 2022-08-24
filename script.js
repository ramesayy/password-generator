//Created variables for our elements from the html file

const pw = document.getElementById("pw");
const copy = document.getElementById("copy");
const length = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");

//Added the characters from which the password will be created

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+={}[]\|;'<>,.?";

//Added functions for each category of characters in order to select them randomly

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//Generate the password according to users' preference

function generatePassword() {
    const len = length.value;

    let password = "";

    if (upper.checked) {
        password += getUppercase();
    }

    if (lower.checked) {
        password += getLowercase();
    }

    if (number.checked) {
        password += getNumber();
    }

    if (symbol.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pw.innerText = password;
}

function generateX() {
    const xs = [];
    if (upper.checked) {
        xs.push(getUppercase());
    }

    if (lower.checked) {
        xs.push(getLowercase());
    }

    if (number.checked) {
        xs.push(getNumber());
    }

    if (symbol.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

//Connect a frontend displayed button with the a backend function ("generate password"  button with its function)

generate.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
    const textbox = document.createElement("textbox");
    const password = pw.innerText;

    if (!password) {
        return;
    }

    textbox.value = password;
    document.body.appendChild(textarea);
    textbox.select();
    document.execCommand("copy");
    textbox.remove();
    alert("Password copied to clipboard");
});