/ Цикли 
// - Виведіть в консоль числа від 1 до 345 (while)
// - Знайти суму чисел від 1 до 100 (тобто  1 + 2 + 3 + 4 + 5 + 6....)
// - Виведіть в консоль числа від 241  до 1 (do while)
// - Напишіть програму  яка відображає найбільше ціле число з двох цілих чисел. (if.. + покрийте тестами)

let i = 1;
while (i <= 345){
    console.log(i);
    i++;    
}

let sum = 0;
for (let x = 0; x<=100; x++){
    sum = sum+x;
};
console.log(sum);

let y = 241;
while (y > 0) {
    console.log(y);
    y-=1;
}

function findMax(n,m){
    if (n>m){
        return n
    }
    else {
        return m
    }
};
