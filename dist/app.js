import Invoice from "./classes/Invoice.js";
import Payment from './classes/Payments.js';
let docOne; //type HasFormatter
let docTwo;
docOne = new Invoice("cata", "hey", 400); //invoice implements HasFormatter
docTwo = new Payment("mario", "work", 100); //payment implements HasFormatter
let docs = []; //only object who implements hasFormatter can go in
docs.push(docOne);
docs.push(docTwo);
//====================================
const invOne = new Invoice("rellath", "test", 200);
const invTwo = new Invoice("Tatia", "work", 300);
//=================================
//ARRAY OF INVOICES
//set to empty array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(/* inv.client, inv.details, inv.amount,  */ inv.format());
});
//=================================
//=================================
//=================================
//=================================
const form = document.querySelector('.new-item-form'); //cast type 'form'
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //turns into number
    );
});
