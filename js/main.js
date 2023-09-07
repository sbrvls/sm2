let cityname = prompt('Введите название города');
let year = prompt('Введите год образования города');
let count = prompt('Введите население города');
let now_year = new Date().getFullYear();
let cityAge = now_year - year;
alert("городу " + cityname + " исполнилось " + cityAge + " лет с момента его образования. Население " + count + " человек " )
