let cadena = "Para más información, vea Capítulo 3.4.5.1";
let expresion = /(capítulo \d+(\.\d)*)/ig;
let hallado = cadena.matchAll(expresion);

// console.log(hallado);

function clearAccents(str) {
    // creo una matriz con las letras acentuadas y sin acentuar 
    const ACENTOS = [["á", "a"],["é", "e"],["í", "i"],["ó", "o"],["ú", "u"],["Á", "A"],["É", "E"],["Í", "I"],["Ó", "O"],["Ú", "U"]];
    // Compruebo si existe algún acento

    let length = str.match(/[áéíóúÁÉÍÓÚ]/g).length;
    let occurencies = str.matchAll(/[áéíóúÁÉÍÓÚ]/g);

    if (length != null) {
        for (let i = 0; i < length; i++) {
            let occurence = occurencies.next();
            for (let j in ACENTOS) {
                if (occurence.value[0] === ACENTOS[j][0]) {
                    str[occurence.value.index] = ACENTOS[j][1];
                }
            }
        }
    }
    return str;
}

let str = "Hola qué tal";


const ACENTOS = [["á", "a"],["é", "e"],["í", "i"],["ó", "o"],["ú", "u"],["Á", "A"],["É", "E"],["Í", "I"],["Ó", "O"],["Ú", "U"]];
    // Compruebo si existe algún acento

let length = str.match(/[áéíóúÁÉÍÓÚ]/g).length;
console.log(length);
let occurencies = str.matchAll(/[áéíóúÁÉÍÓÚ]/g);
console.dir(occurencies);
    if (length != null) {
        for (let i = 0; i < length; i++) {
            let occurence = occurencies.next();
            for (let j in ACENTOS) {
                if (occurence.value[0] == ACENTOS[j][0]) {
                    console.log(occurence.value[0], ACENTOS[j][0]);
                    console.log(occurence.value.index, ACENTOS[j][1])
                    let x = occurence.value.index;
                    str.replace(); = ACENTOS[j][1];
                    console.log(str);
                }
            }
        }
    }


    console.log(clearAccents1("HOla qué"));