// Crear array generar valores y mostrar

function createArray(length, max, min) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * (max-min+1)+min);
    }  
    return array;
}

function printArray(array) {
    array.forEach(element => {
        console.log(element);
    });
}

function showMax(array) {
    let max;
    let firstTime = true;
    for (let i of array) {
        if (firstTime) {
            max = i;
            console.log(max);
            firstTime = false;
            continue;
        }
        max = (max < i) ? i : max;
    }
    return max;
}

let exam = createArray(20, 0, 50);

console.log(exam);
console.log(showMax(exam));

