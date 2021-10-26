'use strict';

// Mi función 
function calcularBinarioVanila(numero) {
    let output = "";
    while (numero > 0 || numero < 0) {
        // Concateno si el resto es igual a 0 un 0 y si es igual a 1(o verdadero) un 1.
        output += (numero % 2 === 0) ? "0" : "1"; 
        numero >>>= 1;
    }
    // Le doy la vuelta a la cadena para que me saque el numero en binario.
    return output.split("").reverse().join("");
}

// La función de clase
function calcularBinarioOptimizado(numero) {
    let output = "";
    while ((numero > 0) || (numero < 0)) {
        output += (numero & 1) ? "1" : "0";
        numero >>>= 1;
    }
    return output.split("").reverse().join("");
}

// Devuelve un string con el numero en binario formateado para imprimir con un documet.write()
function imprimirNumeroBinario(stringNumero) {

    const BITS = 32; 
    let output = "<pre>";

    // Se crean los numeros de bits
    for (let i = BITS - 1; i >= 0; i--) {
        if (i < 10) {
            output += "B" + i + "  ";
        } else {
            output += "B" + i + " ";
        }
    }
    output += "\n";
    
    // Se crea la linea separadora
    for (let i = 0; i < BITS; i++) {
        output += "--- ";
    }
    output += "\n";

    // Se imprimen 0s cuando un numero es positivo
    for (let i = 0; i < BITS - stringNumero.length; i++) {
        output += '0   ';
    }
    // Imprime el binario del argumento como string
    for (let i of stringNumero) {
        output += i + "   ";
    } 
    output += "</pre>"
    
    return output;
}

let valor = parseInt(prompt("Dime el valor de a"));
let num = calcularBinarioOptimizado(valor);

document.write(imprimirNumeroBinario(num));