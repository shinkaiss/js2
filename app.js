const starbucks = {
    coffee: {
      espresso: "Strong and rich flavor, made from finely ground coffee beans - price: 10$",
      latte: "Espresso with steamed milk and a small layer of foam on top - price: 5$",
      cappuccino: "Espresso with equal parts of steamed milk and foam - price: 15$",
      },
    tea: {
      greenTea: "Made from unfermented leaves, has a light and delicate flavor - price: 20$",
      blackTea: "Made from fermented leaves, has a bold and strong flavor - price: 25$",
        herbalTea:  "Made from various herbs and spices, has a range of flavors and health benefits - price 30$",
    }}
console.log(typeof starbucks);
console.log(starbucks.coffee.espresso);
console.log(starbucks.coffee.latte);     
console.log(starbucks.coffee.cappuccino); 
console.log(starbucks.tea.greenTea);
console.log(starbucks.tea.blackTea);
console.log(starbucks.tea.herbalTea);


//dop dz
let login = 'shinkay'
let password = "123456789"

var log = prompt("Напишите ваше логин")
var name2 =prompt('Напишите ваше пароль')

if(login === log && password===name2){
  alert("Произошло успешно")
}else{
  alert('ПРоизошло ошибка')
}