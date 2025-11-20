const palindromes = function (string) {
    let sep_string = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reverse_string = sep_string.split('').reverse().join("");
    return reverse_string === sep_string;
};

// Do not edit below this line
module.exports = palindromes;
