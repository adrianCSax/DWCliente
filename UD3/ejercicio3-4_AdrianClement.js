'use strict'

// FUNCIONES

// Función que genera un matriz aleatoria
function generateMatrix(width, height) {
    let matrix = [];
    const MIN = (-10);
    const MAX = 10;

    // Recorro las filas de la matriz
    for (let i = 0; i < height; i++) {
        // Inserto en cada fila valores aleatorios por columna
        matrix[i] = []; 
        for (let j = 0; j < width; j++) {
           matrix[i][j] = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
        }
    }
    return matrix;
}

// Función que calcula el producto escalar
function calculateScaleProduct(matix, scale) {
    let outputMatrix = [];

    // Recorro las filas de la matriz
    for (let i in matix) {
        outputMatrix[i] = []; // creo un array nuevo en cada fila del outputMatrix
        for (let j in matix[i]) { // itero la fila y por cada columna multiplico el valor y lo pongo en la posición correspondiente.
            outputMatrix[i][j] = matix[i][j] * scale;
        }
    }
    return outputMatrix;
}

// Función que calcula producto de matrices
function calculateMatrixProduct(firstMatix, secondMatrix) {
    let outputMatrix = [];
    // Compruebo si la matriz es compatible. Si el numero de columnas de la primera es igual al numero de filas de la segunda o si el numero de columnas de la primera matriz es igual al numero de columnas de la segunda.
    let matrixCompatible = firstMatix[0].length === secondMatrix.length || secondMatrix[0].length === firstMatix[0].length;
    
    // Si son compatibles
    if (matrixCompatible) {

        // Por cada fila de la primera matriz
        for (let i in firstMatix) {
            outputMatrix[i] = []; // Creo un array por fila
            for (let counter in firstMatix[i]) { // Por cada columna en la primera matriz itero
                let result = 0;
                for (let j in secondMatrix) { // Recorro la segunda matriz
                    let fMValue = firstMatix[i][j]; // cojo el valor de la fila de la matriz primera
                    let sMValue = secondMatrix[j][counter]; // cojo el valor de cada columna de la segunda matriz
                    result += sMValue * fMValue; // sumo el producto total
                }
                outputMatrix[i][counter] = result; //Lo añado a la matriz de salida
            }
        }
        return outputMatrix;
    }

    return "Las matrices son incompatibles";
}

// Creo una funcion que pregunte que tipo de producto quiero
function askMatrixCalc(sentence) {
    // Creo un bucle para cercionarme de que los inputs son buenos y devuelven un si la matriz es escalar
    while (true) {
        let input = prompt(sentence);
        if (input === 'e' || input === 'E') {
            return true;
        } else if (input === 'm' || input === 'M') {
            return false;
        }
    }
}

// Función que pide numeros por pantalla
function askNumericValues(sentence) {
    // Creo un bucle para cercionarme de que los inputs son numeros enteros y devuelven un numero
    do {
        let input = prompt(sentence);
        if (input.match(/^\d+$/g)) {
            return input;
        }
    } while (true);
}

// Función que pinta la matriz por pantalla o si no es una matriz 
function printMatrix(matrix, matrixName) {
    // Si la matriz es un array pinto la matriz como una tabla
    if (Array.isArray(matrix)) {
        document.write("<br>");
        document.write("<table style='text-align:center; border: none; width: 150px;'><caption style='text-align:left;'>" + matrixName + "</caption>");
        for (let row of matrix){
            document.write("<tr>");
            for (let value of row) {
                document.write("<td>" + value + "</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
    } else {
        document.write("<p>" + matrix + "</p>");
    }
}

// Función que pide por pantalla las filas y columnas de una matriz y la crea
function askMatrixAndCreate(matrixName) {
    let height = askNumericValues("¿Cuantas filas tendrá la " + matrixName + "?");
    let width = askNumericValues("¿Cuantas columnas tendrá la " + matrixName + "?");
    return generateMatrix(width, height);
} 

// RUN

// Pregunto que tipo de matriz quiero
let matrizKindIsEscalar = askMatrixCalc("¿Qué producto matricial vas a querer realizar? Escalar(E) o Matricial(M)");

// Si es escalar
if (matrizKindIsEscalar) {
    let matrixScale = askMatrixAndCreate("matriz de entrada"); // Creo la matriz
    let scale = askNumericValues("¿Cual va a ser el producto escalar?"); // Pido el producto escalar
    printMatrix(matrixScale, "Matriz de entrada"); // Pinto la matriz de entrada
    document.write("<br><p>Siendo " + scale + " el producto escalar</p>") 
    printMatrix(calculateScaleProduct(matrixScale, scale), "<strong>Resultado</strong>"); // Pinto el producto escalar de la matriz
} else { 
    //Creo matrices
    let matrix1 = askMatrixAndCreate("la primera matriz"); 
    let matrix2 = askMatrixAndCreate("la segunda matriz"); 
    
    // Pinto matrices de entrada
    printMatrix(matrix1, "Primera Matriz"); 
    printMatrix(matrix2, "Segunda Matriz");

    // Pinto producto matricial
    printMatrix(calculateMatrixProduct(matrix1, matrix2), "<strong>Resultado</strong>");
}