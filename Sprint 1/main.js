let registro = [];

const infoPersona = 2;

for (let i = 0; i < infoPersona; i++) {
  let userInfo = {
    name: prompt(`Escribe tu nombre`),
    numeroDocumento: prompt(`Numero de documento`),
    contraseña: prompt(`Ingrese su contraseña`),
    tipoUsuario: prompt(
      `Ingrese 1 si es cliente o Ingrese 2 si es administrador`
    ),
  };
  registro.push(userInfo);
}
console.log(registro);
let totalGeneral = 0;
let billetes = {};
while (true) {
  const preguntarDocumento = prompt(`Ingrese su documento`);
  const preguntarClave = prompt(`Ingrese su clave`);
  let registro2 = registro.find(
    (element) => element.numeroDocumento == preguntarDocumento
  );
  if (registro2) {
    if (
      preguntarClave == registro2.contraseña &&
      registro2.tipoUsuario == `2`
    ) {
      alert(`Bienvenido`);
      const cdEntrarDinero = 1;
      //   for (let i = 0; i < cdEntrarDinero; i++) {
      let saldo = {
        billetes5: Number(prompt(`Cuantos billetes de 5 va a entrar?`)),
        billetes10: Number(prompt(`Cuantos billetes de 10 va a entrar?`)),
        billetes20: Number(prompt(`Cuantos billetes de 20 va a entrar?`)),
        billetes50: Number(prompt(`Cuantos billetes de 50 va a entrar?`)),
        billetes100: Number(prompt(`Cuantos billetes de 100 va a entrar?`)),
      };
      billetes = saldo;
      //   }
      console.log(billetes);
      const calculateMoney = (a, b) => {
        let total = a * b;
        return total;
      };
      const totalMoney = {
        total5: calculateMoney(billetes.billetes5, 5000),
        total10: calculateMoney(billetes.billetes10, 10000),
        total20: calculateMoney(billetes.billetes20, 20000),
        total50: calculateMoney(billetes.billetes50, 50000),
        total100: calculateMoney(billetes.billetes100, 100000),
      };
      totalGeneral =
        totalMoney.total5 +
        totalMoney.total10 +
        totalMoney.total20 +
        totalMoney.total50 +
        totalMoney.total100;
      console.log(totalMoney);
      console.log(totalGeneral);
      //   break;
    } else if (registro2 && registro2.contraseña === preguntarClave) {
      if (totalGeneral === 0) {
        console.log(`Cajero en mantenimiento, vuelva pronto`);
      } else {
        let cantidadDeseada = Number(prompt(`Cantidad deseada a retirar`));
        alert(
          `La cantidad de dinero que puede entregar el cajero es ${totalGeneral} \n Los tipos de billetes son:\n5.000\n10.000\n20.0000\n50.0000\n100.000`
        );
        console.log(totalGeneral, cantidadDeseada);
        if (totalGeneral > cantidadDeseada) {
          const devolverDinero = (cuanto) => {
            const {
              billetes5,
              billetes10,
              billetes20,
              billetes50,
              billetes100,
            } = billetes;
            let restante = cuanto - (cuanto % 5000);
            console.log(restante);
            let billetesUsados = { b5: 0, b10: 0, b20: 0, b50: 0, b100: 0 };
            console.log("Puede entregar maximo: ", totalGeneral);
            while (restante > 0) {
              if (restante / 100000 >= 1 && billetes100 > 0) {
                billetes.billetes100 -= 1;
                billetesUsados.b100 += 1;
                restante -= 100000;
              } else if (restante / 50000 >= 1 && billetes50 > 0) {
                billetes.billetes50 -= 1;
                billetesUsados.b50 += 1;
                restante -= 50000;
              } else if (restante / 20000 >= 1 && billetes20 > 0) {
                billetes.billetes20 -= 1;
                billetesUsados.b20 += 1;
                restante -= 20000;
              } else if (restante / 10000 >= 1 && billetes10 > 0) {
                billetes.billetes10 -= 1;
                billetesUsados.b10 += 1;
                restante -= 10000;
              } else if (restante / 5000 >= 1 && billetes5 > 0) {
                billetes.billetes5 -= 1;
                billetesUsados.b5 += 1;
                restante -= 5000;
              }
            }
            console.log(
              `Se usaron ${billetesUsados.b5} billetes de 5, ${billetesUsados.b10} billetes de 10, ${billetesUsados.b20} billetes de 20, ${billetesUsados.b50} billetes de 50, ${billetesUsados.b100} billetes de 100`
            );
            console.log(
              `Quedaron ${billetes.billetes5} billetes de 5, ${billetes.billetes10} billetes de 10, ${billetes.billetes20} billetes de 20, ${billetes.billetes50} billetes de 50, ${billetes.billetes100} billetes de 100`
            );
          };
          devolverDinero(cantidadDeseada);
          break;
        } else {
          console.log(`Amiwo te pasas de vg`);
        }
      }
    }
  }
}
