document.getElementById('sum').click = function() {
  sumClick();
};

function sumClick() {
  let nro1 = function() {
    getNmbr1();
  };
  let nro2 = function() {
    getNmbr2();
  };
  document.getElementById('vastaus').innerHTML = nro1 + nro2;
}

function getNmbr1() {
  return document.getElementById('num1').value;
}

function getNmbr2() {
  return document.getElementById('num2').value;
}