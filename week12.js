//1
const texto = (t) => {
  return t
}
//2
const suma = (sumandoA, sumandoB) => {
  return sumandoA + sumandoB;
}
//3
const resta = (minuendo, sustraendo) => {
  return minuendo - sustraendo;
}
//4
const multiplicacion = (factorA, factorB) => {
  return factorA * factorB;
}
//5
const division = (dividendo, divisor) => {
  if  ( divisor === 0)  {
    return 'cannot be divided by 0';
  } else  {
    return dividendo / divisor;
  }
}
//6
const tablaMultiplicar = (multiplicando, cantidad) => {
  if (cantidad === undefined) cantidad = 10;
  let table = []
  for (let i = 0; i <= cantidad; i++){
    table.push(multiplicando * i)
  }
return table
}
//7
const potencia = (base, exponente) => {
  return Math.pow(base, exponente)
}
//8
const anidada = (a,b) => {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}
//9
const cerosIzq = (num, totalLength) => {
  var numStr = num.toString();
  var numCeros = totalLength - numStr.length;
  for (var i = 1; i <= numCeros; i++) {
      numStr = "0" + numStr;
  }
  return numStr;
}

module.exports = {
  texto: texto,
  suma: suma,
  resta: resta,
  multiplicacion: multiplicacion,
  division: division,
  tablaMultiplicar: tablaMultiplicar,
  potencia: potencia,
  anidada: anidada,
  cerosIzq: cerosIzq
}