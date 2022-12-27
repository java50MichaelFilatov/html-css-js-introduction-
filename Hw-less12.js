function myParseInt(str, base) {
    base = base || 10;
    let res = NaN;
    const firstsIndex = str[0] === '-' ? 1 : 0;
    let code = 1;
    let index = firstsIndex;
    code = getCode(str[index], base);
    if(code>0){
        res = code;
        index++;
    }
    while (index < str.length && code >= 0) {
        code = getCode(str[index], base);
        if (code >=0) {
            res = res * base + code;
        }
        index++;
    }
    if (firstsIndex === 1)
        res = -res;
    return res;
}
function getCode(symbol,base) {
    let res = -1;
    const codeA = 'a'.charCodeAt();
    if ((symbol <= '9' && symbol >= '0') || (symbol >= "a" && symbol <= 'z')) {
        symbol = symbol.toLowerCase();
        res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
        if (res >= base) {
            res = -1;
        }
    }
    return res;
}
function myToString(number, base) {
    let res = '';

    base = base || 10;
    const sign = number < 0 ? "-" : "";
    const integerPart = Math.trunc(Math.abs(number));
    const fractinPart = number - integerPart;
    res = convertIntegerPart(integerPart, base) + '.' +
        convertFraictionPart(fractinPart, base);
   
    return sign + res;

}
function convertIntegerPart(number, base) {
    let res = '';
    do {
        const digit = number % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        number = Math.trunc(number / base);

    } while (number);
    return res;
}
function convertFraictionPart(number, base, precision) {
    let res = '';
    precision = precision || 7
    let count = 0;
    let intPart;
    do {
        
        number *= base;
        intPart = Math.trunc(number);
        if (intPart != 0) {
            if (count ===  precision && intPart > base / 2) {
                intPart++;
            }
            const symb = getSymbol(intPart);
            res += symb;
            number = number - intPart;
        }
        count++;

    } while (intPart && count <= precision);
    return res;
}
function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
    if (digit < 10) {
        symbol = "" + digit;
    } else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;

}
console.log(myParseInt("-1012",10))
