// Reversing a String
function reverseString() {
    const input = document.getElementById("reverseInput").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("reverseResult").textContent = `Reversed: ${reversed}`;
}

// Checking for a palindrome
function checkPalindrome() {
    const input = document.getElementById("palindromeInput").value.trim();
    
    // Check if input is empty
    if (input === "") {
        document.getElementById("palindromeResult").textContent = "Give me a valid input.";
        return;
    }
    
    const reversed = input.split("").reverse().join("");
    const isPalindrome = input === reversed;
    document.getElementById("palindromeResult").textContent = isPalindrome ? "It's a palindrome!" : "Not a palindrome.";
}

// Total bill calculator
function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        document.getElementById("totalResult").textContent = "Please enter valid numbers for both fields.";
        return;
    }

    const tipAmount = (subtotal * tipPercentage) / 100;
    const total = subtotal + tipAmount;

    document.getElementById("totalResult").textContent = `Total amount with tip: $${total.toFixed(2)}`;
}
