let num1=prompt("Enter 1st number");
num1=Number(num1);
let num2=prompt("Enter 2nd number");
num2=Number(num2);
let operator=prompt("Enter operator");
let result;
result=Number(result);

switch(operator){
    case '+':
        result=num1+num2;
        console.log(result);     
        break;
    case '-':
        result=num1-num2;
        console.log(result);
        break;
    case '*':
        result=num1*num2;
        console.log(result);
        break;
    case '/':
        result=num1/num2;
        console.log(result);
        break; 
    default:
        console.log("Invalid operator");
        break;
}

