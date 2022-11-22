const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password = "";
function rndPassword(size) {
    //Проверка на пустое значение password
    if (password.length != 0) {
        password = "";
    }

    //Генерация пароля
    for (let i = 0; i < size; i++) {
        let rnd_num = Math.floor(Math.random() * chars.length);
        password += chars[rnd_num];
    }
    return password;
}

rndPassword(5);
console.log(password);