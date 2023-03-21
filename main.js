//console.error("Heads Up");
// var is global
//let when the value is to be changed
//const when the value should not be changed
// const age = 22;
// let score = 30;
// //age = 31;
// score = 33;
// console.log(score);
// console.log(age);

// const name = "Hammad";

// console.log("My Name is " + name + " My Age is " + age);
// console.log("Second way ");

// const dd = `My name is ${name} and my age is ${age}`;
// const s = "hello world";
// console.log(s);
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.split(""));

//ARRAYS
// const arr = ["apples", "banana", "pear"];
// arr.push("grapes", "");
// console.log(arr);
// console.log(arr[1]);

// //Object Literals

// const person = {
//   firstname: "Hammad",
//   lastname: "Ul Hassan",
//   age: 22,
//   hobbies: ["Riding", "Gaming", "Praying"],
//   address: {
//     House: "116-k",
//     Street: 8,
//     City: "RAWALPINDI ",
//     Country: "Pakistan",
//   },
//   email: "hammadulhassanqureshi@gmail.com",
// };

// console.log(person.hobbies[1]);
// console.log(person.address.Country);

// const {
//   firstname,
//   lastname,
//   address: { City },
// } = person;

// console.log(City);
// person.phone = "+92333-1234567";
// console.log(person);

// const todo = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with Boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Pick my nephew from his school",
//     isCompleted: false,
//   },
// ];

// For converting object literals into JSON
// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

//Loops

// //For 1st way
// for (let i = 0; i < todo.length; i++) {
//   console.log(todo[i].text);
// }

// //For 2nd way here todos is used as variable of todo array
// for (let todos of todo){
//   console.log(todos.text);
// }

//foreach
// todo.forEach(function (todos) {
//   console.log(todos.text);
// });

//map
// const todoText = todo.map(function (todos) {
//   return todos.text;
// });
//console.log(todoText);

//filter => that returns array parts which are only true
// const todoCompleted = todo.filter(function (todos) {
//   return todos.isCompleted === true;
// });

//filter=> that returns the text of array parts which are only true
// const todoCompleted = todo
//   .filter(function (todos) {
//     return todos.isCompleted === true;
//   })
//   .map(function (todos) {
//     return todos.text;
//   });
// console.log(todoCompleted);

//Conditionals 9skipped to the if then? else: with switch statements
// const x = 10;
// const clr = x > 10 ? "red" : "blue";

// switch (clr) {
//   case "red":
//     console.log(`Color is ${clr}`);
//     break;
//   case "blue":
//     console.log(`Color is ${clr}`);
//     break;
//   default:
//     console.log("Color is neither red nor blue");
//     break;
// }

//OOP
//Constructor functions

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);

// Without Prototypes
// this.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// this.getFullname = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// }
// Prototypes
// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullname = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// ES6 Class recomended as they are easier to write and are more organized
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullname() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// //Instantiate Object
// const person1 = new Person("Hammad", "Ul Hassan", "1-6-2001");
// const person2 = new Person("Muhammad", "Ali Jinnah", "25-12-1876");
// console.log(person1);
// console.log(person1.getBirthYear());
// console.log(person2.getFullname());

// console.log(window); //Window object is the parent object of the browser
// window.alert(1);

// Single Element Selectors
// console.log(document.getElementById("my-form")); // can also use it by assigning to const
// console.log(document.querySelector("h1")); // since its sigle selctr so its firts one

// //Multiple Element Selectors
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));

// const items = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "hello";
// ul.children[1].innerText = "hammad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
// const btn = document.querySelector(".btn");
// btn.style.background = "lightcoral";
// //Event
// btn.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   // console.log(e.target);
//   // e.target will give you buttons details on the html part
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1> ";
// });

// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");

// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   if (nameInput.value === "" || emailInput.value === "") {
//     msg.classList.add("error");
//     msg.innerHTML = "Please fill all fields";
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
//     );
//     userList.appendChild(li);
//     //clear fields
//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }
