'use strict';

let ladoExterior = parseInt(prompt("Cuando va a ser el lado exerior"));
let ladoInterior = parseInt(prompt("Cuando va a ser el lado interior"));
let total = 2 * ladoExterior + ladoInterior;

// Función que devuelve un string repitiendo un signo "sign" una cantidad "width" de veces. 
let printsLine = (width, sign) => {
    let str = '';
    for (let i = 0; i < width; i++) {
        str += sign;
    }
    return str;
}

// Función que añade lineas "lines" a un string segun un callback para que devuelva un bloque con saltos de linea.
let printsBlock = (lines, callback) => {
    let str = '';
    for (let i = 0; i < lines; i++) {
        str += callback() + '\n';
    }
    return str;
}

// Imprime una figura si es "isMarco" == 0 / false imprime la cruz si es diferente a "isMarco" !== 0 / true imprime marco.
function printFigura(isMarco) {

    // Guardo en variable un string con un bloque entero con el mismo signo 
    let printWhole = printsBlock(ladoExterior, () => {
        return printsLine(total, isMarco ? '#' :'.');
    });
    
    // Guardo en variable un string con un bloque intecalando signos 
    let printWithSpace = printsBlock(ladoExterior, () => {
        return printsLine(ladoExterior, '#') + printsLine(ladoInterior, '.') + printsLine(ladoExterior, '#');
    });
    
    // Pinto la figura
    document.write(isMarco ? '<h3>MARCO</h3>' : '<h3>CRUZ</h3>');
    document.write('</br>');
    for (let i = 0; i < 3; i++) {
        if (i === 1) {
            document.write(isMarco ? printWithSpace : printWhole);
        } else {
            document.write(isMarco ? printWhole : printWithSpace);
        }
    }
}

// Imprime las 2 figuras. 
function printFiguras() {
    document.write('<pre>');
    for (let j = 0; j < 2; j++) {        
        printFigura(j);
    }
    document.write('</pre>');
}

printFiguras();