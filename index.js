// Function 1: calculateTax
function calculateTax(amount) {
  return amount * 0.10;
}
console.log(calculateTax(5000))
// Function 2: convertToUpperCase
function convertToUpperCase(text) {
  return text.toUpperCase();
}
console.log(convertToUpperCase("timseymiriti"))

// Function 3: findMaximum
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(findMaximum(830,406))

// Function 4: isPalindrome
function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}
console.log(isPalindrome("tim"))

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100);
  return originalPrice - discount;
}
console.log(calculateDiscountedPrice(1000,10))




// This is required for the test to function properly  
//module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };// Function 1: calculateTax
