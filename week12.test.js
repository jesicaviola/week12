const week12 = require('./week12');

describe('texto', function() {
  test('text expected is the result text', function () {
    var t = "Jesica";
    var expected = "Jesica";
    var result = week12.texto(t);
    expect(result).toBe(expected);
  });
}); 

describe('suma', function() {
  test('two positive numbers gets a positive number', function() {
    var sumandoA = 2;
    var sumandoB = 3;
    var expected = 5;
    var result = week12.suma(sumandoA, sumandoB);
    expect(result).toBe(expected);
  });
});

describe('resta', function() {
  test('two positive numbers gets a positive number', function() {
    var minuendo = 2;
    var sustraendo = 1;
    var expected = 1;
    var result = week12.resta(minuendo, sustraendo);
    expect(result).toBe(expected);
  });
});

describe('multiplicacion', function() {
  test('two positive numbers gets a positive number', function() {
    var factorA = 2;
    var factorB = 1;
    var expected = 2;
    var result = week12.multiplicacion(factorA, factorB);
    expect(result).toBe(expected);
  });
});

describe('division', function() {
  test('cannot be divided by 0', function() {
    var dividendo = 2;
    var divisor = 0;
    var expected = ("cannot be divided by 0");
    var result = week12.division(dividendo, divisor);
    expect(result).toBe(expected);
  });
  test('division', function() {
    var dividendo = 6;
    var divisor = 3;
    var expected = 2;
    var result = week12.division(dividendo, divisor);
    expect(result).toBe(expected);
  });
});

describe('tablaMultiplicar', function() {
  test('multiplication table of 2 with 12 results', function() {
    var multiplicando = 2;
    var cantidad = 12;
    var expected = [0,2,4,6,8,10,12,14,16,18,20,22,24];
    var result = week12.tablaMultiplicar(multiplicando, cantidad);
    expect(result).toEqual(expected);
  });
  test('multiplication table of 2 with 10 results', function() {
    var multiplicando = 2;
    var expected = [0,2,4,6,8,10,12,14,16,18,20];
    var result = week12.tablaMultiplicar(multiplicando);
    expect(result).toEqual(expected);
  });
});

describe('potencia', function() {
  test('power', function() {
    var base = 2;
    var exponente = 2;
    var expected = 4;
    var result = week12.potencia(base, exponente);
    expect(result).toBe(expected);
  });
});

describe('anidada', function() {
  test('anidada', function() {
    var a = 3;
    var b = 4;
    var expected = 25;
    var result = week12.anidada(a, b);
    expect(result).toBe(expected);
  });
});

describe('cerosIzq', function() {
  test('cerosIzq', function() {
    var num = 3;
    var totalLength = 4;
    var expected = ('0003');
    var result = week12.cerosIzq(num, totalLength);
    expect(result).toBe(expected);
  });
});

