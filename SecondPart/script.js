
console.log("Задание 1"); 
let number = 42;
const string = "Hello";
const string1 = ", World!"
let boolean = true;
const array = [1, 2, 3];

console.log("Исходное число")
console.log(number)
number = number + 8
console.log(number); 

console.log("Исходное значение")
console.log(boolean)
boolean = !boolean;
console.log(boolean);

console.log("Исходный массив")
console.log(array)
array.push(4);
console.log("Дополненный массив")
console.log(array);

let str = string + string1
alert(str);

console.log("Задание 2"); 
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log("Исходный массив:", randomNumbers);

console.log("Перебор for:");
for (let i = 0; i < randomNumbers.length; i++) {
  console.log(randomNumbers[i]);
}

console.log("Перебор for...in:");
for (const index in randomNumbers) {
  console.log(randomNumbers[index]);
}

console.log("Перебор forEach:");
randomNumbers.forEach(function(num) { 
  console.log(num);
});

console.log("Задание 3"); 
function checkArr(num, arr) {
  if (arr.includes(num)) {
    return true;
  } else {
    arr.push(num);
    return false;
  }
}

console.log("Число 52?", checkArr(52, randomNumbers));
console.log("Обновлённый массив:", randomNumbers);

const car = {
    brand: "Toyota",
    model: "Camry",
    horsepower: 203,
    year: 2022,
    color: "Серебристый",
    isAutomatic: true,
  };
  
  const printProperty = (obj, key) => console.log(obj[key]);

printProperty(car, "brand");
printProperty(car, "model");
printProperty(car, "horsepower");
printProperty(car, "year");
printProperty(car, "color");
printProperty(car, "isAutomatic");