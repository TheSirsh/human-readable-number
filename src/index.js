module.exports = function toReadable(number) {
    let str = ''

    function hrn3(n) {
    let k = Math.trunc(n/100);
    hrn1(k);
    str +=' hunderd ';
    k = n%100;
    if (k > 0 && k < 10) {
        hrn1(k)
            }
    if (k >= 10 && k < 20) {
        hrn2(k)
    }
    if (k >=20 && k < 100) {
        hrn2m(k)
    }
    return str;
}

function hrn2m(n) {
    if (n>=90) {
        str += 'ninety ';
        n = n%10;
        hrn1(n)
    }
    if (n>=80) {
        str += 'eighty ';
        n = n%10;
        hrn1(n)
    }
    if (n>=70) {
        str += 'seventy ';
        n = n%10;
        hrn1(n)
    }
    if (n>=60) {
        str += 'sixty ';
        n = n%10;
        hrn1(n)
    }
    if (n>=50) {
        str += 'fivety ';
        n = n%10;
        hrn1(n)
    }
    if (n>=40) {
        str += 'fourty ';
        n = n%10;
        hrn1(n)
    }
    if (n>=30) {
        str += 'thirty ';
        n = n%10;
        hrn1(n)
    }
    if (n>=20) {
        str += 'twenty ';
        n = n%10;
        hrn1(n)
    }
    return str
}

function hrn2(n) {
    if (n == 10) {
        str += 'ten'
    }
    if (n == 11) {
        str += 'eleven'
    }
    if (n == 12) {
        str += 'twelve'
    }
    if (n == 13) {
        str += 'thirteen'
    }
    if (n == 14) {
        str += 'fourteen'
    }
    if (n == 15) {
        str += 'fifteen'
    }
    if (n == 16) {
        str += 'sixteen'
    }
    if (n == 17) {
        str += 'seventeen'
    }
    if (n == 18) {
        str += 'eightteen'
    }
    if (n == 19) {
        str +='nineteen'
    }
    return str
}

function hrn1(n) {
    if (n == 1) {
        str += 'one'
    }
    if (n == 2) {
        str1 += 'two'
    }
    if (n == 3) {
        str += 'three'
    }
    if (n == 4) {
        str += 'four'
    }
    if (n == 5) {
        str += 'five'
    }
    if (n == 6) {
        str += 'six'
    }
    if (n == 7) {
        str += 'seven'
    }
    if (n == 8) {
        str += 'eight'
    } 
    if (n == 9) {
        str +='nine'
    }
    return str
}









    
    if (number == 0) {
        str = 'zero'
    }
    if (number > 0 && number < 10) {
        hrn1(number)
            }
    if (number >= 10 && number < 20) {
        hrn2(number)
    }
    if (number >=20 && number < 100) {
        hrn2m(number)
    }
    if (number >=100 && number < 1000) {
        hrn3(number)
    }
    return str
}