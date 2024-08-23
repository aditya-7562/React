// const students = ['Aditya', 'Arpit', 'Vikas'];
// console.log(students);

// for (const i of students) {
//     console.log('Name: ' + i);
// }

// console.log(students.map(students => 'Name: ' + students));

// Slice method

// const item1 = ['idly', 'dosa'];
// item1.push('sambar');
// const item2 = item1.slice();
// item1.push('Chapati');
// console.log(item1);
// console.log(item2);

// Spread Operator

// const item1 = ['idly', 'dosa'];
// item1.push('sambar');
// const item2 = [...item1];
// item1.push('Chapati');
// console.log(item1);
// console.log(item2);


// Rest Operator

// const items = (...i) => {
//     return i;
// }

// console.log(items(1,2,3,4,5,6));


// Destructring

// const market = {stock : 'HDFC'};
// const lpu = market.stock;
// console.log(lpu);

// const person = {name: 'Vikas'};
// const {name} = person;
// console.log(name);

// const arr = ['Idly', 'Dosa'];
// const [item1, item2] = arr;
// console.log(item1, item2);


// function product(a, b){
//     return a*b;
// }

// console.log(product(2,6));

// const multiply = function product(a, b){
//     return a*b;
// }

// console.log(multiply(3, 4));

const product = (a, b) => {
    return a*b;
}

console.log(product(4, 3));