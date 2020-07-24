// const person = {
//   name: 'So',
//   age: 26,
//   loc: {
//     city: 'Te',
//     temp: 82
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const {name: firstname = 'anonymus', age} = person;
// console.log(`${firstname} is ${age}`);

// const {city, temp: temperare} = person.loc;

// if(temperare && city) {
//   console.log(`It's ${temperare} in ${city}`)
// };

// const book = {
//   title: ' edfj dkjf sdkj',
//   author: 'So Krav',
//   publisher: {
//     name: 'Pengvin'
//   }
// };

// const { name: publisherName = 'self'} = book.publisher;

// console.log(publisherName);

const addres = ['1299 S Jun Street', 'Te', 'Penns', '19147'];
const [, city, state = 'New York', ] = addres;
console.log(`u r in ${city} ${state}`);

const item = ['coffee',  '$2', '$4', '$5'];
const [coffee, , mPrice ] = item;

console.log(`a m ${coffee} costs ${mPrice}`)