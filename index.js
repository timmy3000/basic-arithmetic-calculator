
let result;

    
const user_operator = prompt('Enter operator ( either +, -, * or / ): ');

const first_num = parseFloat(prompt('Enter first number: '));
const second_num = parseFloat(prompt('Enter second number: '));

console.log(isNaN(first_num))

if(isNaN(first_num) || isNaN(second_num)) {
    alert("Invalid number")
} else {

    switch(user_operator) {
        case '+':
            result = first_num + second_num;
            alert(`${first_num} + ${second_num} = ${result}`);
            break;

        case '-':
            result = first_num - second_num;
            alert(`${first_num} - ${second_num} = ${result}`);
            break;

        case '*':
            result = first_num * second_num;
            alert(`${first_num} * ${second_num} = ${result}`);
            break;

        case '/':
            result = first_num / second_num;
            alert(`${first_num} / ${second_num} = ${result}`);
            break;

        default:
            alert('Invalid operator');
            break;
    }


}
