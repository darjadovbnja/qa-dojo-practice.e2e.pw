//Створіть функцію multiplyNumeric(obj), 
//яка примножує всі числові властивості об’єкта obj на 2.

// до виклику функції
let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof(obj[key]) == 'number'){
            obj[key]=obj[key]*2;
        }
    }
}


multiplyNumeric(menu);

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "Моє меню"
// };
//Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об’єкт.
//P.S. Використовуйте typeof для перевірки, що значення властивості числове.

console.log(menu);
