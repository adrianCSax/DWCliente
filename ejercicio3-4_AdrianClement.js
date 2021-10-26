'use strict'

function generateMatrix(width, height) {
    let matrix = [];
    let array = [];
    const MIN = (-10);
    const MAX = 10;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
           array.push(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));
        }
        matrix.push(array);
        array = [];
    }
    return matrix;
}

function calculateScaleProduct(matix, scale) {
    let outputMatrix = [];
    let outputRow = [];

    for (let row of matix) {
        for (let value of row) {
            outputRow.push(value * scale);
        }
        outputMatrix.push(outputRow);
        outputRow = [];
    }
    return outputMatrix;
}

function calculateMatrixProduct(firstMatix, secondMatrix) {
    let outputRow = [];
    let outputMatrix = [];
    let matrixCompatible = firstMatix[0].length === secondMatrix.length || secondMatrix[0].length === firstMatix[0].length;
    
    if (matrixCompatible) {
        
        for (let i in firstMatix) {
            let result = 0;

            for (let counter in firstMatix[i]) {
                for (let j in secondMatrix) {
                    let fMValue = firstMatix[i][j];
                    let sMValue = secondMatrix[j][counter];
                    result += sMValue * fMValue;
                }
                outputRow.push(result);
                result = 0;
            }
            outputMatrix.push(outputRow);
            outputRow = [];
        }
        return outputMatrix;
    }

    return "Las matrices son incompatibles";
}

let matriz1 = generateMatrix(3,3);
let matriz2 = generateMatrix(3,3);
let matriz3 = generateMatrix(3,3);

console.log(matriz1);
console.log(matriz2);
console.log(matriz3);