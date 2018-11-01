document.getElementsByTagName('td')[0].innerHTML = 'Juho';
document.getElementsByTagName('td')[1].innerHTML = 'Huhtanen';
document.getElementsByTagName('td')[2].innerHTML = 'Juhislol';
document.getElementsByTagName('td')[3].innerHTML = 'Mannerheimintie 200';

const tr1 = document.querySelector('tr:first-child');
const th = document.createElement('th');
const p = document.createTextNode('Puhelinnumero');
th.appendChild(p);
tr1.appendChild(th);
const tr2 = document.querySelector('tr:last-child');
const td = document.createElement('td');
const p2 = document.createTextNode('4063464');
td.appendChild(p2);
tr2.appendChild(td);

let parent = document.getElementsByTagName('tr');
let node = document.getElementsByTagName('th')[2];
parent[0].removeChild(node);

let node2 = document.getElementsByTagName('td')[2];
parent[1].removeChild(node2);