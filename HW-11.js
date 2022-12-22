let res="1234";
let sum=getDigitsSum(res)
function getDigitsSum(res){

if(res<0)
{res=-res;}
let ser=0;
let res1=0;
do{ser=res%10;
res1=Math.trunc(res1+ser);
res=Math.trunc(res/10);
}while(res!=0)
return res1;}
console.log(sum);




//
let string= ("9000 / ((10 + 20) ** 2)");
let string1= ("9 + 100 / 2");
console.log(eval(string));
console.log(eval(string1));
//

let num=-1234;
let res2=revers(num);
function revers(num)
{let newNum=" ";
if(num<0)
{newNum="- ";
num=-num;}
    do{
        let dig=num%10;
        newNum=newNum+dig;
       num=Math.trunc(num/10);}
    while(num!=0)

return newNum;}
console.log(res2);
//

    res="asa"/2;
    res1="a"+res+"a"+"s";


console.log(res1.toLowerCase());


