function calculateTax(amount) {
  return amount * 0.10;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function isPalindrome(word) {
  // Handle empty strings or single characters as true per your test requirements
  if (word === "") return true;
  
  const cleanWord = word.toLowerCase();
  const reversed = cleanWord.split('').reverse().join('');
  return cleanWord === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}

// CRITICAL: This allows the test suite to find your functions
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
}; 
//module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };// Function 1: calculateTax
