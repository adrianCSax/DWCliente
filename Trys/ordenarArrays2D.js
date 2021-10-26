
// Ordenación de array2D segun campo
// let personas = [[24, 'Giorgi'], [27, 'Pepe'], [23, 'ioio']];
// personas.sort((a, b) => b[0]-a[0]); // this
// console.log(personas);


// Profesores, administrativos, alumnos - edad - alfabeticamente.

let personas = [
    [24, 'Giorgi', 'alumno'], 
    [27, 'Pepe', 'profesor'], 
    [23, 'Marta', 'alumno'],
    [40, 'Raul', 'administrativo'],
    [43, 'Manolo', 'profesor'],
    [50, 'Alicia', 'administrativo'],
    [31, 'Silvia', 'profesor'],
    [29, 'Eva', 'alumno'],
    [13, 'Ambrosio', 'alumno'],
    [16, 'Juan', 'alumno'],
];

let prueba = [
    [27, 'Pepe', 'profesor'], 
    [23, 'Marta', 'alumno'],
    [40, 'Raul', 'administrativo']
]

personas.sort((a, b) => {
    if (a[2]!=b[2]) {
        if (a[2]=='profesor') {
            return -1;
        } else if (a[2]=='administrativo' && b[2]=='alumno') {
            return -1;
        } else {
            return 1;
        }
    } else if (a[0]!=b[0]) {
        return b[0] - a[0];
    } else if(a[1]<b[1]) {
        return -1;
    } else {
        return 1;
    }
});


console.log(personas);

