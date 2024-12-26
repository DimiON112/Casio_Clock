let currentNumber = '';
let previousNumber = '';
let operator = '';

const display = document.getElementById("display");

function appedNumber(number)
{
    currentNumber += number;
    updateDisplay();
}

function updateDisplay()
{
    display.textContent=currentNumber || '0';
    console.log("2:", previousNumber);
    console.log("1:", currentNumber);
}

function clearDasplay()
{
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay();
}

function setOperator (op)
{
    if(op !== '=')
    {
        operator = op;
    }
    console.log("мой оператор ", op);
    console.log("мой оператор 2", operator);
    if (currentNumber === '') 
    {
        console.log("возрощаюсь потому что у меня нет первого числа и сосу")
        return;
    }
    
    if (previousNumber !== '' && op !== '' && op === '=')
    {
        console.log("Я буду переходить в калькулятор что бы посчитать с оператором ", operator)
        calculate();
    }

    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate()
{
    if(currentNumber ==='' || previousNumber === '' || operator === '') return;
    
    let result;
    let num1 = parseFloat(currentNumber);
    let num2 = parseFloat(previousNumber);
    console.log("num2: ", num2);
    console.log("num1: ", num1);
    console.log("op ", operator);

    switch (operator)
    {
        case '+':
            result = num1 + num2;
            console.log(result);
            break;
        case '/':
            result = num2 / num1;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '-':
            result = num2 - num1;
            break;
        default:
             return;

    }
    currentNumber=result.toString();
    previousNumber = '';
    updateDisplay();            
}