 module.exports = function toReadable (number) {    
    
    let number1 = number.toString();
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
    
    let strLength = number1.length;

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
    
    function twoNumbers(number1) {

        if (number1[0] === '0') {
            return numTwenty[number1[1]];
        }else if (number1[0] === '1') {
            return numTwenty[number1];
        } else if (number1[1] === '0'){
            return twentyPlus[number1[0]];
        }
        else {
            return `${twentyPlus[number1[0]] + ' ' + numTwenty[number1[1]]}`
        }
        
    }
    
    
    switch (strLength) {
        case 1:
            return numTwenty[number1];
            break;
        case 2:
           return twoNumbers(number1);
           break;
        case 3:
            if (number1.slice(1) === '00') {
                return numTwenty[number1[0]] + ' hundred';
            } else {
                return numTwenty[number1[0]] + ' hundred ' + twoNumbers(number1.slice(1));
            }
            break;
            
    }
}

