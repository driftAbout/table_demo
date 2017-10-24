'use strict';

var table  = document.getElementById('table_content');
var data = [];

var cars = [
  {
    make: 'Honda',
    model: 'accord',
    year: 2011,
    milage:87000
  },
  {
    make: 'Toyota',
    model: 'corolla',
    year: 1999,
    milage:213000
  },
  {
    make: 'Ford',
    model: 'Escort',
    year: 1993,
    milage: 98000
  }
];

for (var i = 0; i < cars.length; i++){
  data.push(
    '<td>' + cars[i].make + '</td>' +
    '<td>' + cars[i].model + '</td>' +
    '<td>' + cars[i].year + '</td>' +
    '<td>' + cars[i].milage + '</td>'
  );
}

var newRow;
for (var j = 0; j < data.length; j++){
  newRow = document.createElement('tr');
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}
