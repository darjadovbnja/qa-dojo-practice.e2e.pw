// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням senpai.
// Додайте властивість surname зі значенням qa.
// Змініть значення name на ваше імʼя.
// Видаліть властивість name з об’єкта.

const user = {};
user['name'] = 'pavlo';
user['surname'] = 'qa';
user['name'] = 'daryna'
//delete user.name;
console.log(user);

const i = Object.keys(user)[0]
console.log(i);

function isEmpty(obj){
    if (Object.keys(obj).length === 0) {
        return 'Snooze'
    }
    else {
        return 'Wake up'
    }
}

let schedule = {};

alert( isEmpty(schedule) ); // true

alert( isEmpty(schedule) ); // false

schedule['gym'] = '8:30'