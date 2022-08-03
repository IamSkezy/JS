//Калькулятор JS
let first_number;
let second_number;
let sign;
//Проверка
first_number = +prompt('Введите первое число: ');
second_number = +prompt('Введите второе число: ');
while (true) {
	sign = prompt('Введите знак: ');
	if (sign == '+' || sign == '-' || sign == '*' || sign == '/' || sign == '%' || sign == '**') {
		break;
	}
	else {
		alert('Вы ввели несуществующий знак!');
	}
}

let result = 0;

//Обработка действий
if (sign == '+') {
	result = first_number + second_number;
}
else if (sign == '-') {
	result = first_number - second_number;
}
else if (sign == '*') {
	result = first_number * second_number;
}
else if (sign == '/') {
	result = first_number / second_number;
}
else if (sign == '%') {
	result = first_number % second_number;
}
else if (sign == '**') {
	result = first_number ** second_number;
}

//Вывод
alert(`${first_number} ${sign} ${second_number} = ${result}`);