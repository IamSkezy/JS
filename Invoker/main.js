const skills = {
    Cold_Snap: "qqq",
    Ghost_Walk: "qqw",
    Ice_walk: "qqe",
    EMP: "www",
    Tornado: "wwq",
    Alacrity: "wwe",
    Sun_Strike: "eee",
    Force_Spirit: "eeq",
    Chaos_Meteor: "eew",
    Deafening_Blast: "qwe"  
}

let mas = [];
let mas_names = [];
let count = 0;
let user_variant;
let random_num_skill;
let score = 0;
let mas_used_skills = [];
let menu;
let users = [];
let nickname;
let game_menu;

for (let key in skills) {
    count++;
}

function push_mas() {
    for (let key in skills) {
        mas.push(skills[key]);
    }    
}

function push_mas_names() {
    mas_names = (Object.keys(skills));
}

function game() { 
    nickname = prompt("Введите ваш никнейм:");
    users.push(nickname);
    for (let i = 0; i < Object.keys(mas_names).length; i++) {
        do {
            random_num_skill = Math.floor(Math.random() * Object.keys(mas_names).length); 
        } while (mas_used_skills.includes(random_num_skill));
        user_variant = prompt(`Скастуйте ${mas_names[random_num_skill]}!\n`);
        mas_used_skills.push(random_num_skill);
        if(mas[random_num_skill] == user_variant && mas[random_num_skill].includes(user_variant)) {
            score++;
        }
    }
    users.push(score);
    alert(`Вы набрали ${score} очков!\n`);  
    score = 0;
    nickname = '';  
    mas_used_skills = [];
}

function showSkills() {
    alert(`Загляните в консоль!`);
    for (let i = 0; i < Object.keys(mas_names).length; i++) {
        console.log(`Название:\t${mas_names[i]}\nКаст:\t\t${mas[i]}\n`);
    }
}

push_mas();
push_mas_names();

do{
    menu = +prompt("Введите 1, если хотите начать игру\nВведите 2, если хотите посмотреть скиллы\nВведите 3, если хотите посмотреть попытки\nВведите 4, если хотите выйти:");

    if(menu == 1) { 
        game();
        
    }
    else if(menu == 2) {
        showSkills()
    }
    else if(menu == 3) {
        alert(`Загляните в консоль!`);
        for (let i = 0; i < users.length; i = i + 2) {
            console.log(`Никнейм:\t\t${users[i]}\nКоличество очков:\t${users[i+1]}`)
        }
    }
    else if(menu == 4) {
    
    }
    else {
        alert("ERORR!");
    }
} while (menu != 4)
