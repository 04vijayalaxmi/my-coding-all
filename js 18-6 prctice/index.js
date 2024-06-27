/*
// square root numbers
const number1=4.5;
const number2=-6;
const number3='helo';

result1=Math.sqrt(number1);
result2=Math.sqrt(number2);
result3=Math.sqrt(number3);
console.log(`squre root of ${number1} is ${result1} `);
console.log(`squre root of ${number2} is ${result2} `);
console.log(`squre root of ${number3} is ${result3} `);*/

/*const number=prompt("Enter the number");
const result= Math.sqrt(number);
console.log(`Square root of  ${number} is ${result}`);*/
/*
let a=prompt("Enter the first variable");
let b=prompt("Enter the second variable");
let temp;
temp=a;
a=b;
b=temp;
console.log(`The value of a after swaping :${a}`);
console.log(`The value of b after swaping :${b}`);*/

/*
// swaping using ES6
let a=prompt("Enter the first variable");
let b=prompt("Enter the second variable");
[a,b]=[b,a];
console.log(`The value of a after swaping :${a}`);
console.log(`The value of b after swaping :${b}`);*/

/*
let root1,root2;
let a=prompt("Enter the first number:");
let b=prompt("Enter the second number:");
let c=prompt("Enter the third number:");
let discriminant= b* b- 4* a* c;

if(discriminant>0){
    root1=(-b+Math.sqrt(discriminant)/(2*a));
    root2=(-b-Math.sqrt(discriminant)/(2*a));
}
console.log(`roots of quadratic equation are ${root1} and ${root2}`);
*/
/*
const kilometers = prompt("Enter value in kilometers:");
const factor=0.621371;
const miles= kilometers*factor;
console.log(`${kilometers} kilometers is equal to ${miles}:`);
*/
/*
const number=parseInt(prompt("Enter a positive Number"));

if(number<0){
    console.log(`Error! Factorial of negative number does not exist`);

}
else if(number==0){
    console.log(`Factorial of zero is ${number} is 1`);

}
else{
     let fact = 1;
    for(i=1;i<=number;i++){
        fact*=i;

    }
console.log(`The Factorial of ${number} is ${fact}`);
}*/
/*
function fibonacci(num){
    if(num<2){
        return num;
        
    }
    else{

    }return fibonacci(num-1)+fibonacci(num-2);

}
const nTerms=prompt("Enter the number of terms");
if(nTerms<0){
    console.log(`Enter a positive Integer`);

}
else{
   for(let i=0; i<nTerms;i++){
    console.log(fibonacci(i));

   } 
}
*/





