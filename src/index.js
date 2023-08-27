 module.exports = function toReadable (number) {    
    
    let numberString = number.toString();
    let strLength = numberString.length;

    const numTwenty = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
       
    }
    
    const twentyPlus = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    
    function twoNumbers(numberStr) {

        if (numberStr[0] === '0') {
            return numTwenty[numberStr[1]];
        }else if (numberStr[0] === '1') {
            return numTwenty[numberStr];
        } else if (numberStr[1] === '0'){
            return twentyPlus[numberStr[0]];
        }
        else {
            return `${twentyPlus[numberStr[0]] + ' ' + numTwenty[numberStr[1]]}`;
        }   
    }
    
    
    switch (strLength) {
        case 1:
            return numTwenty[numberString];
            break;
        case 2:
           return twoNumbers(numberString);
           break;
        case 3:
            if (numberString.slice(1) === '00') {
                return numTwenty[numberString[0]] + ' hundred';
            } else {
                return numTwenty[numberString[0]] + ' hundred ' + twoNumbers(numberString.slice(1));
            }
            break;           
    }
}
