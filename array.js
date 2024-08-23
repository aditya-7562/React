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

const items = (...i) => {
    return i;
}

console.log(items(1,2,3,4,5,6));


