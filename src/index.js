module.exports = function toReadable(number) {
    const ones = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 0: ''}
    const tens = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'};

    if (number === 0) {
        return 'zero';
    }

    let result = '';
    if (number / 100 >= 1) {
        result = result + ones[Math.floor(number / 100)] + ' hundred';
    }

    let teens = number % 100;
    if (teens >= 20) {
        result = result + ' ' + tens[Math.floor(teens / 10)];
        teens = teens % 10;
    }

    result = result + ' ' + ones[teens];

    return result.trim()
};