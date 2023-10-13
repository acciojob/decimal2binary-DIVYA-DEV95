function convertToBinary() {
    var decimalNumber = parseInt(document.getElementById("decimalInput").value);

    if (!isNaN(decimalNumber) && decimalNumber >= 0) {
        var binaryNumber = decimalNumber.toString(2);
        document.getElementById("binaryResult").textContent = "Binary Equivalent: " + binaryNumber;
    } else {
        alert("Please enter a valid non-negative decimal number.");
    }
}
