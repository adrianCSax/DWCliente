// No funciona
function clearAccents(str) {
    // creo una matriz con las letras acentuadas y sin acentuar 
    const ACENTOS = [["á", "a"],["é", "e"],["í", "i"],["ó", "o"],["ú", "u"],["Á", "A"],["É", "E"],["Í", "I"],["Ó", "O"],["Ú", "U"]];

    for (let i in str) {
        // Por cada indice de la cadena de entrada compruebo si es vocal con acento
        let letra = str[i];
        if (letra.search(/[áéíóúÁÉÍÓÚ]/) == 0) {
            for (let j in ACENTOS) {
                // Si lo es sustituyo la letra acentuada por la no acentuada
                if (letra === ACENTOS[j][0]) {
                    str.replace(letra, ACENTOS[j][1]);
                }
            }
        }
    }
    return str;
}

console.log(clearAccents("Hola qué"));