// variables

// var name = "kalam";
// console.log(name);

// var age = 83;
// console.log(age);

// let place = "punjab";
// console.log(place);

// function display(userName, userAge){
//     return 'My inspiration name is ' + userName + '\n' + 'the age is ' + userAge + ' ';
// }
// console.log(display(name,age));

// function display(userName, userAge){
//     return 'My inspiration name is ' + name + '\n' + 'the age is ' + age + ' ';
// }
// console.log(display());

// console.log("hey there");

// var num = 50;

// function add(){
//     var sum = num * 10;
//     console.log(sum);
//     console.log(num);
// }
// add();
// console.log(num);
// console.log(sum);

// function multiply(){
//     var number =50
//     console.log(number)

//     var number=100
//     console.log(number)

//     var square=number*number
//     console.log(square)
// }

// multiply();

// function varscope(){
//     var x = 1;
//     if(true){
//         var x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// varscope();

// function varscope(){
//     let x = 1;
//     if(true){
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// varscope();

// function varscope() {
//     const x = 1;
//     if (true) {
//         const x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// varscope();

// var m1 = 20;
// var m2 = 60;

// function add(a, b){
//     return "the sum of the values are " + (a + b);
// }

// console.log(add(m1, m2));

// const Car = {
//     Name: 'Hyundai',
//     Model: 'Verna'
// }
// console.log(Car);

// const Car = {
//     Name: 'Hyundai',
//     Model: 'Verna',
//     Mssg1: () => {
//         console.log("My car name is: " + Car.Name);
//     },
//     Mssg2: () => {
//         console.log("My car model is: " + Car.Model);
//     },
//     Start: () => {
//         console.log("My car is starting!");
//     },
//     Stop: () => {
//         console.log("My car is Stoping!");
//     }
// }
// // console.log(Car);
// Car.Mssg1();
// Car.Mssg2();
// Car.Start();
// Car.Stop();

class Teacher{
    constructor(Name, UID){
        this.Name  = Name;
        this.UID = UID;
    }

    display(){
        console.log(`Hello, my teacher's name is ${this.Name} and his UID is ${this.UID}`)
    }
}

let obj1 = new Teacher("Karthick", 20165);
obj1.display();