// Questi1 ==> Print all even numbers from 0 to 100;
console.log("Hii Riitk");

// for(let i=1; i<=100; i++){
//     if(i%2 !== 0){
//         console.log("Even number:",i)
//     }
// }



// Question 2 ==> Guessing game number

// let gameNumber = "25";
// let userNum = prompt("guess the game number");
// while(userNum !== gameNumber){
//     userNum = prompt("wrong ! guess again");
// }
// alert("Congrats! You entered the correct answer");


// Question 2 Generate a username starts with @

let fullName = prompt("Enter You Full Name");

console.log(fullName)
let userId = "@".trim();

let username = userId.concat(fullName).trim();

console.log(username)


