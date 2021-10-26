let a = "Hola";
let b = "'caracola'";
let c = a + " " + b;
// for (let i of c) {
//     console.log(i);
// }

let hello = "HelloWorld this is meee, love me like you would and say my name";

let expR = hello.match(/.a/g);
let count = 0;
for (let i of expR) {
    count++;
    console.log(i + " " + count);
}

[0, 3, 1].reduce()


