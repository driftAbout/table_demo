'use strict';

var table  = document.getElementById('table_content');
var data = [];
var cars = [];

function Car(make, model, year, milage){
  this.make = make;
  this.model = model;
  this.year = year;
  this.milage = milage;
}


var toyota = new Car('toyota', 'corrolla', 1991, 213000);
var honda = new Car('honda', 'civic', 1980, 212698);
var ford = new Car('ford', 'Escort', 1998, 129000);

cars.push(toyota);
cars.push(honda);
cars.push(ford);

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
