for (let i = 1; i <= 10; i++) {
  console.log("Apna College", i);
}

// Calculate sum of n numbers

let sum = 0;
for (let i = 0; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum =", sum);

// Do while loop

let i = 1;
do {
  console.log("Apna College");
  i++;
} while (i <= 5);

// For-Of Loop
let str = "Javascript";
let size = 0;

for (let val of str) {
  console.log(val);
  size++;
}

console.log("Size: ", size);

// For-In Loop

const students = {
  name: "rahul kumar",
  age: 28,
  height: 6.5,
  isPass: true,
};

for (let key in students) {
  console.log("key:", key, "value=", students[key]);
}
