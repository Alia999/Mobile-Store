'use strict'

let mobileArray = [];
let user = document.getElementById('user');
let type = document.getElementById('type');
let table = document.getElementById('table');
let condition;
let price;

function Mobile(name, type) {
    this.name = name;
    this.type = type;

    mobileArray.push(this);
    Mobile.prototype.randomPrice(100, 500);
};
function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
/*
  let tableResult=document.getElementById('tableResult');
  
  let table=document.createElement('table');
  tableResult.appendChild(table);
  //table head
  let tableRow1=document.createElement('tr');
  table.appendChild(tableRow1);
  let tableHead=document.createElement('thead');
  tableRow1.appendChild(tableHead);
  let th1element=document.createElement('th');
  tableHead.appendChild(th1element);
  th1element.textContent="User";

  let th2element=document.createElement('th');
  tableHead.appendChild(th2element);
  th2element.textContent="Type";


  let th3element=document.createElement('th');
  tableHead.appendChild(th3element);
  th3element.textContent="Price";

  let th4element=document.createElement('th');
  tableHead.appendChild(th4element);
  th4element.textContent="Condition";
  */
let submit = document.getElementById('submit');
submit = document.addEventListener('click', submittion)
function submittion(event) {
    event.preventDefault();
    /*  if (randomPrice<200) {
         condition='Use';
          
      }else{condition='New';}  */

    let tableRow = document.getElementById('tableRow');
    //  table.appendChild(tableRow)
    let arrayOfdata = [mobileArray.name, mobileArray.type, price];
    for (let i = 0; i < mobileArray.length; i++) {
        let tdElement = document.createElement('td');
        tableRow.appendChild(tdElement);


        tdElement.textContent = arrayOfdata;
        settingItem()
    }
}
let button = document.createElement('button');
table.appendChild(button);
button.textContent = "remove";
button = document.addEventListener('click', remove);
function remove(event) {
    table.remove();
}


function settingItem() {

    let setArray = JSON.stringify(mobileArray);

    localStorage.setItem('info', setArray);
}

function gettingItems() {

    let userData = JSON.parse(setArray);

    localStorage.getItem('data', userData);
}
gettingItems();