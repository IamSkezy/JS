//Пользователи
let admin = {
    name: "Vladimir Putin",
    login: "admin",
    password: "admin"
}

let user01 = {
    name: "Dmitry Anufriev",
    login: "Skezy",
    password: "amid0202"
}

let user02 = {
    name: "Danil Sirotkin",
    login:"Sirons",
    password: "sda2004123"
}

//Примитивная регистрация и авторизация
let users = [];

users.push(admin, user01, user02);

let start_menu;

do {
    start_menu = +prompt("Выберите, что хотите сделать:\n1 - Зарегистрироваться\n2 - Авторизироваться");
} while(start_menu != 1 && start_menu != 2);

let amount_users = users.length;

let user_state;

let current_user = {
    name: "",
    login: "",
    password: ""
}

function reg_user() {
    current_user.name = prompt("Введите ваше имя и фамилию:")
    current_user.login = prompt("Введите ваш логин:");
    current_user.password = prompt("Введите ваш пароль:");
    return current_user;
}

function push_user() {
    users.push(current_user);
    return users;
}

function auth_user() {
    let score = 0;
    let login01 = users[0].login;
    let login02 = users[1].login;
    let login03 = users[2].login;
    let current_login = prompt("Введите ваш логин:");

    if (current_login == login01 || current_login == login02 || current_login == login03) {
        score++;
    }

    let password01 = users[0].password;
    let password02 = users[1].password;
    let password03 = users[2].password;
    let current_password = prompt("Введите ваш пароль:");

    if (current_login == login01) {
        if (current_password == password01) {
            score++;
        }
        if (score == 2) {
            alert(`Вы успешно авторизировались под пользователем ${users[0].login}!`);
            user_state = "admin";
        }
        else {
            alert("Вы ввели неверные логин или пароль!")
        }
    }
    else if (current_login == login02) {
        if(current_password == password02) {
            score++;
        }
        if (score == 2) {
            alert("Вы успешно авторизировались!");
            user_state = "user";
        }
        else {
            alert("Вы ввели неверные логин или пароль!")
        }
    }
    else if (current_login == login03) {
        if (current_password == password03) {
            score++;
        }
        if (score == 2) {
            alert("Вы успешно авторизировались!");
            user_state = "user";
        }
        else {
            alert("Вы ввели неверные логин или пароль!")
        }
    }
}

if (start_menu == 1) {
    reg_user();
    push_user();
}
else if (start_menu == 2) {
    auth_user();
}
else {
    alert("Error");
}

let admin_menu;
//Примитивная админка
function admin_user() {
    if (user_state == "admin") {
        admin_menu = +prompt("Выберите список действий:\n1 - Посмотреть список пользователей\n2 - Удалить пользователя\n3 - Выйти");
    }
}
admin_user();
if (admin_menu == 1) {
    alert(`Имя:${admin.name} Логин:${admin.login} Пароль:${admin.password}\n\nИмя:${user01.name} Логин:${user01.name} Пароль:${user01.password}\n\nИмя:${user02.name} Логин:${user02.name} Пароль:${user02.password}`);
}
else if (admin_menu == 2) {
    let admin_step = prompt(`Введите логин пользователя, которого хотите удалить:\nСписок логинов:${users[0].login}, ${users[1].login}, ${users[2].login}`);
    if (admin_step == "admin") {
        alert("ERROR\nВы не можете удалить сами себя!");
        admin_user();
    }
    else if (admin_step == "Skezy") {
        users.splice(1,1);
        admin_user();
    }
    else if (admin_step == "Sirons") {
        users.splice(2.1);
        admin_user();
    }
}
else if (admin_menu == 3) {
    window.location.reload();
}
