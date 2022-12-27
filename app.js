// let str="123m";
// let num =parseInt(str)+10;
// let str1="123.5m";
// let num1=parseFloat(str1)+10;
// let str2="js.55";
// let num3=parseInt(str2,32);
function myParseInt(str,base )
{base=base ||10;
    let res=0;
    
    let firstIndex=str[0]==="-"?1:0;
    let index=firstIndex;
    let code=1;
    while (index<str.length && code>0){
        code =getCode(str[index],base);
        if(code>0){
            res=res*base+code;
        }
index++;
    }
    if(firstIndex)
    return res;
    
}
function getCode(symbol,base)
{
    let res=-1;
    symbol=symbol.toLowerCase();
    const codeA='a'.charCodeAt();
    if((symbol<='9' && symbol>='0')||(symbol>='a'&&symbol<='z')){
        res=symbol<='9'?+symbol:symbol.charCodeAt()-codeA+10;
        if(res>=base){
            res=-1;
        }
    }
return res;

}
// let str1="ff";
// let str2="123";
// let str22="Java";
// let str3="123m";
// let str4="123.5";
// let num=parseInt(str1,16);
// let myNum=myParseInt(str1,16);
// num=parseInt(str22,36);
// myNum=myParseInt(str22,36);
// num=parseInt(str2);
// myNum=myParseInt(str2);
// num=parseInt(str3);
// myNum=myParseInt(str3);
// num=parseInt(str4);
// myNum=myParseInt(str4);
// let number=255;
// let str=""+number;
// str=number.toString(36);
function myToString(number,base)
{
   let res="";
   number =Math.trunc(Math.abs(number));
   do{
    const digit=(number%10);
    const symbol=getSymbol(digit );
    res=symbol+res;
    number=Math.trunc(number/base);
   } while(number);
   return res;
}
function getSymbol(digit )
{
    const codeA='a'.charCodeAt();
    let symbol;
    if(digit<10)
    {symbol=" "+digit;}
    else{
        const codeAscii=digit-10+codeA;
        symbol=String.fromCharCode(codeAscii);

    }
    return symbol; 
}

let num100=90500;
let str100 = num100.toString();
let myStr100 = myToString(num100);
console.log (str100, "=", myStr100);
let Str100 = num100.toString(36);
let MyStr100 = myToString(num100, 36);
console.log (Str100, "=", MyStr100);
let num1000 = 123.45;
let str1000 = num1000.toString();
let myStr1000 = myToString(num1000);
console.log (str1000, "=", myStr1000);
let num10000 = -123;
let str10000 = num10000.toString();
let myStr10000 = myToString(num10000);
console.log (str10000, "=", myStr10000);
let num10001 = -123.45;
let str10001 = num10001.toString();
let myStr10001 = myToString(num10001);
console.log (str10001, "=", myStr10001);

