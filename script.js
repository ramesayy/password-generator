const pw = document.getElementById("pw");
const copy = document.getElementById("copy");
const length = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+={}[]\|;'<>,.?";

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