console.log('hey calculator');

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide (n1, n2) {
    return n1 / n2;
}

function operate (n1, operand, n2) {

    answer = 'error in operate function';

    switch (operand) {
        case '+':
            answer = add(n1, n2);
            break;
        case '-':
            answer = subtract (n1, n2);
            break;
        case '*':
            answer = multiply (n1, n2);
            break;
        case '/':
            answer = divide(n1, n2);
            break;
        default:
            answer = 'error in operate function';
    }

    return answer;
}

//operate function next, (n1, operand, n2)

/*
t1 = divide(8 , 3);
console.log(operate(20, '-', 3));
console.log(operate(20, '+', 3));
console.log(operate(20, '*', 3));
console.log(operate(20, '/', 3));
console.log(t1);
*/
