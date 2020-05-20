// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

//challenge

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { title } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`${title} is published by ${publisherName}`);

//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '193464'];
const [, city, state = 'New York'] = address;

console.log(`You are in ${state}.`);

//challenge

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];
const [name, s, m, l ] = item;

console.log(`A medium ${name} costs ${m}.`);

//