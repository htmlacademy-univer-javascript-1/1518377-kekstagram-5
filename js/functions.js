// Проверка длины строки
function isShorterThanOrEqual(str, maxLength) {
  return str.length <= maxLength;
}

// Проверка палиндрома
function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/\s/g, '');
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

// Извлечение цифр
function extractDigits(input) {
  const str = String(input);
  const digits = str.match(/\d/g);
  return digits ? parseInt(digits.join(''), 10) : NaN;
}

// Тесты
console.log(isShorterThanOrEqual('проверяемая строка', 20)); // true
console.log(isPalindrome('Лёша на полке клопа нашёл'));       // true
console.log(extractDigits('агент 007'));                      // 7
