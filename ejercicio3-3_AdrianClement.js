// Creo una funcion que pregunte las opciones adicionales
function askOptions(sentence) {
    let input;
    // Creo un bucle para cercionarme de que los inputs son buenos y devuelven un bool
    while (true) {
        input = prompt(sentence);
        if (input === 's' || input === 'S') {
            return true;
        } else if (input === 'n' || input === 'N') {
            return false;
        }
    }
}

function clearAccents(str) {
    let newString = "";
    // creo una matriz con las letras acentuadas y sin acentuar 
    const ACENTOS = [["á", "a"],["é", "e"],["í", "i"],["ó", "o"],["ú", "u"],["Á", "A"],["É", "E"],["Í", "I"],["Ó", "O"],["Ú", "U"]];
    for (let i in str) {
        // Por cada indice de la cadena de entrada compruebo si es vocal con acento
        if (str[i].search(/[áéíóúÁÉÍÓÚ]/) === 0) {
            for (let j in ACENTOS) {
                // Si lo es sustituyo añado la letra sin acentuar a la acentuada
                if (str[i] === ACENTOS[j][0]) {
                    newString += ACENTOS[j][1];
                }
            }
        } else {
            newString += str.charAt(i);
        }
    }
    return newString;
}

// Funcion que resuelve el palindromo
function resolvePalindrome(str) {
    let reversedStr = "";

    // Pregunto por las opciones haciendo uso de la funcion askOptions y lo almaceno en variables
    let blankSpace = askOptions("¿Quieres quitar ESPACIOS EN BLANCO? 'S' o 'N' ");
    let caseSensitive = askOptions("¿Quieres ser CASE SENSITIVE? 'S' o 'N' ");
    let withAccent = askOptions("¿Quieres ser ACENTO SENSITIVE? 'S' o 'N' ");

    // Una vez preguntado se hacen los cambios
    str = blankSpace ? str.replace(/\s/g, "") : str;
    str = caseSensitive ? str : str.toLowerCase();
    str = withAccent ? str : clearAccents(str);

    // Creo una cadena dada la vuelta para posterior comparacion
    for (let i = 0; i < str.length; i++) {
        reversedStr += str[str.length - i - 1];
    }

    return reversedStr === str;
}

// Pido la frase
let frase = prompt("Escribe una Frase");

// La resuelvo y me devuelve un bool
let isPalindrome = resolvePalindrome(frase);

let result = isPalindrome ? "SI" : "NO";
let output = "La frase " + frase + " " + result + " es un palíndromo";
// Muestro resultado
alert(output);