// calculadora

function calculadora(n1, n2, operation) {
   if (operation === `suma`) {
     return n1 + n2;
   } else if (operation === `resta`) {
     return n1 - n2;
   } else if (operation === `multiplicacion`) {
     return n1 * n2;
   } else if (operation === `division`) {
     return n1 / n2;
   } else {
     return "operationNotAdmited";
   }
}

console.log(calculadora(60, 70, `resta`))

// generar 100 numeros aleatorios entre 1 y 1000 que no se repitan y luego muestralos ordenados en consola

const arr = 100;
const randomArray = [];

for(let i = 1; i<=arr; i++) {
    randomArray.push(Math.floor(Math.random() * 1000))
}

randomArray.sort((a, b) => a - b);

console.log([...new Set(randomArray)]);