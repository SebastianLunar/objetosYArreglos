console.log("JS Conectado")

// CONDICIONAL IF

// let nota = Number(prompt("Ingrese la nota del estudiante"))

// if (nota < 3) {
//   console.log("Estudiante reprobado");
// } else if (nota >=3 && nota <= 4) {
//   console.log("Estudiante aprobado");
// } else {
//   console.log("Estudiante excelente")
// }

// CONDICIONAL TERNARIO

// nota < 3 ? alert("Est. reprobado") : nota >= 3 && nota <= 4 ? alert("Est. aprobado") : alert("Est. excelente")


// ESTRUCTURAS SWITCH - CASE

// let numeroDia = Number(prompt("Ingrese el número del día"))

// switch (numeroDia) {
//   case 1:
//     alert("Lunes")
//     break;
//   case 2:
//     alert("Martes")
//     break;
//   case 3:
//     alert("Miércoles")
//     break;
//   case 4:
//     alert("Jueves")
//     break;
//   case 5:
//     alert("Viernes")
//     break;
//   case 6:
//     alert("Sábado")
//     break;
//   case 7:
//     alert("Domingo")
//     break;

//   default:
//     alert("Número de día inválido o desconocido")
//     break;
// }

// CICLO WHILE

// let cont = 0

// while (cont < 5) {
//   let nota = Number(prompt("Ingrese la nota del estudiante"))

//   if (nota < 3) {
//     alert("Estudiante reprobado");
//   } else if (nota >= 3 && nota <= 4) {
//     alert("Estudiante aprobado");
//   } else {
//     alert("Estudiante excelente")
//   }

//   cont++
// }

// CICLO FOR
// 0 - 1 - 2 - 3 - 4
// for (let index = 0; index < 5; index++) {
//   let nota = Number(prompt("Ingrese la nota del estudiante"))

//   if (nota < 3) {
//     alert("Vuelta No. " + index + "Estudiante reprobado");
//   } else if (nota >= 3 && nota <= 4) {
//     alert("Vuelta No. " + index + "Estudiante aprobado");
//   } else {
//     alert("Vuelta No. " + index + "Estudiante excelente")
//   }
// }

let elegido = Math.round(Math.random() * 9)
console.log(elegido)


let persona = {
  edad: 15,
  nombre: "Sebastian",
  apellido: "Luna",
  isMarried: false,
  personalidad: {
    isPhsysicallyActive: false,
    isSelfish: true
  }
}

console.log(persona.personalidad.isSelfish)

persona.personalidad.isSelfish = false

console.log(persona.personalidad.isSelfish)

persona.personalidad.trastornos = 0

console.log(persona)

delete persona.personalidad

console.log(persona.hasOwnProperty("nombre"))

console.log(`Mi nombre completo es: ${persona.nombre} ${persona.apellido}`)

const { apellido: lastname, edad: age } = persona

// Arreglos unidimensionales:

//                         0          1         2          3         4          5        6
const estudiantes = ['Alejandra', 'Hanny', 'Isabella', 'Kevin', 'Santiago', 'Victor', "Alex"]

// Arreglo multidimensional (matrices):

const estudiantes2 = [
  //          0 - Mujeres
  //    0           1         2
  ['Alejandra', 'Hanny', 'Isabella'],
  //          1 - Hombres
  //   0          1         2
  ['Kevin', 'Santiago', 'Victor']
]

console.log(estudiantes2[0][2]);

const estudiantes3 = [
  // 0 - Mujeres
  [
    {
      nombre: "Diana",
      apellido: "Suarez",
      edad: 20
    },
    {
      nombre: "Laura",
      apellido: "Ruiz",
      edad: 14
    }
  ],
  // 1 - Hombres
  [
    {
      nombre: "Diego",
      apellido: "Salazar",
      edad: 28,
      pertenencias: [ "celular", "tv", "computador" ]
    },
    {
      nombre: "Anibal",
      apellido: "Guerrero",
      edad: 43
    }
  ]
]
// Anibal Ruiz tiene 20 años

console.log(`${estudiantes3[1][1].nombre} ${estudiantes3[0][1].apellido} tiene un ${estudiantes3[1][0].pertenencias[2]}`)

let nuevoEstudiante = {
  nombre: "Milena",
  apellido: "Ortiz",
  edad: 18,
}

// Push: Añade al final
// estudiantes3[0].push(nuevoEstudiante)
// console.log(estudiantes3)

// Unshift: Añade al principio
estudiantes3[0].unshift(nuevoEstudiante)
console.log(estudiantes3)

// Pop: Elimina el úlitmo
estudiantes3[0].pop()
console.log(estudiantes3)

// Shift: Elimina el primero
estudiantes3[1].shift()


