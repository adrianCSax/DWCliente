function pushIntoOrderedArray(newValue, array) {
    let i = array.length - 1;
    while (newValue < array[i]) {
        array[i+1] = array[i];
        i--;
    }
    array[i+1] = newValue;
    return array;
}

let input = [4, 5, 10, 15, 20];
input = pushIntoOrderedArray(30, input);
console.log(input);
