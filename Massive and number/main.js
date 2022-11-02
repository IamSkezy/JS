"use script"

//Создание делителя
let del = Math.floor(Math.random() * 10);
console.log("Делитель:\n",del);
//Создание массива
let mas = [];
let n = +prompt('Укажите размерность массива:');
for (let i = 0; i < n; i ++){
    mas.push(Math.floor((Math.random())*100));
}
console.log("Ваш массив:\n",mas);
//Создание функции
function divisibleBy(mas, del) {
let mas2=[];
for (let i = 0; i < n; i++) {
    if (mas[i] % del == 0) {
        mas2.push(mas[i]);
    }
}
return mas2;
}
console.log(divisibleBy(mas,del));