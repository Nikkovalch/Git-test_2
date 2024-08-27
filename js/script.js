// const num = ["one", "two", "three", "four", "fife"];
// console.log(num.length);
// for(let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }


// const clients = ["Mango", "Ajax", "Poly"];
// const clientToFind = "Ajax"
// let message = "Ми не знайшли!"

// for(const client of clients) {
//   if(client === clientToFind) {
//     message = `Ми знайшли ${client}`;
//     break
//   } 

// }
// console.log(message);


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;


// for(const number of numbers) {

//   if(number < threshold) {
//     continue
//   }
//   console.log(number);
// }


// const clients = ["Mango", "Ajax", "Poly"];

// const clients2 = clients

// clients.push("Mykola")
// clients2.push("Katerina")

// console.log(clients);
// console.log(clients2);



// const name = "JavaScript це цікаво";

// const a = name.split(" ")
// console.log(a);

// const b = a.join(" ")
// console.log(b);

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

const result = clients.push("Mykola")

const delElem = clients.pop("mykola")

console.log(result);
console.log(delElem);