let marks = [72, 26, 78, 90, 56];
console.log(marks);
console.log(marks.length);
let heroes = [
  "Ironman",
  "Spiderman",
  "Antman",
  "Shaktiman",
  "Batman",
  "Superman",
];
console.log(heroes);
console.log(heroes.length);
console.log(typeof heroes);
console.log(heroes[2]);
heroes[2] = "Ritik";
console.log("Updated Value : ", heroes);

// Loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// For of Loop
for (let el of heroes) {
  console.log(el);
}

let cities = ["Delhi", "Mumbai", "Agra", "Bhopal", "Chandigarh"];
for (let city of cities) {
  console.log(city.toUpperCase());
}

// Practice Question
// find the average marks of entire class
const mark = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of mark) {
  sum = sum + val;
}
console.log("Total sum: ", sum);
let avg = sum / mark.length;
console.log("Average Marks of the class is : ", avg);

// Prctice Question
// For a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.

const prices = [250, 645, 300, 900, 50];

// Using For-Of Loop
let index = 0;
for (let val of prices) {
  console.log(`value at index ${index} is:`, val);
  let offer = val / 10;
  prices[index] = prices[index] - offer;
  console.log("Discount Price : ", prices[index]);
  index++;
}

// Using for loop
for (let i = 0; i < prices.length; i++) {
  let offer = prices[i] / 10;
  prices[i] -= offer;
}
console.log(prices);

// Arrays Methods
let foodItems = ["Apple", "Orange", "Potato", "Banana", "Almonds", "Nutella"];
console.log(foodItems);
foodItems.push("chips", "Burger");
console.log(foodItems);

let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("Deleted: ", deletedItem);

console.log("Array to string:", foodItems.toString());
console.log(foodItems);

let hero = ["Ritik", "Ranveer", "Akhil", "Ronak"];
let heroines = ["katrina", "Deepika", "Sunny", "kiara", "medha"];

let film__industry = hero.concat(heroines);
console.log(film__industry);
console.log(film__industry.slice(0, 4));
console.log(film__industry.splice(1, 1, "Kartik"));
console.log(film__industry);

// Practice Question
// Create an array to store companies-> "Bloomberg", "microsoft","Uber","Google","Ibm","Netflix".
// 1 ==> Remove the first company from the array
// 2 ==> Remove Uber and Add Ola in its place
// 3 ==> Add Amazon at the end

const company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(company);
company.shift();
console.log(company);

company[2] = "OLA";
console.log(company);

company.push("Amazon");
console.log(company);
