document.getElementById('sum').addEventListener('click', sumClick);
document.getElementById('sub').addEventListener('click', subClick);
document.getElementById('multi').addEventListener('click', multiClick);
document.getElementById('div').addEventListener('click', divClick);


function getNmbr1() {
  return document.getElementById('num1').value;
}

function getNmbr2() {
  return document.getElementById('num2').value;
}

function sumClick() {
  let nro1 = Number(getNmbr1());
  let nro2 = Number(getNmbr2());
  document.getElementById('vastaus').innerHTML = nro1 + nro2;
}

function subClick() {
  let nro1 = Number(getNmbr1());
  let nro2 = Number(getNmbr2());
  document.getElementById('vastaus').innerHTML = nro1 - nro2;
}

function multiClick() {
  let nro1 = Number(getNmbr1());
  let nro2 = Number(getNmbr2());
  document.getElementById('vastaus').innerHTML = nro1 * nro2;
}

function divClick() {
  let nro1 = Number(getNmbr1());
  let nro2 = Number(getNmbr2());
  document.getElementById('vastaus').innerHTML = nro1 / nro2;
}

