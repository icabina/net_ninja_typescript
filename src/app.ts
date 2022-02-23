 import Invoice from "./classes/Invoice.js";
 import Payment from './classes/Payments.js';
 import { HasFormatter } from "./interfaces/HasFormatter.js";

 let docOne: HasFormatter; //type HasFormatter
 let docTwo: HasFormatter;
 

docOne = new Invoice("cata", "hey", 400); //invoice implements HasFormatter
docTwo = new Payment("mario", "work", 100); //payment implements HasFormatter

let docs: HasFormatter[] = [];  //only object who implements hasFormatter can go in

docs.push(docOne);
docs.push(docTwo);

//====================================
const invOne = new Invoice("rellath","test",200);
const invTwo = new Invoice("Tatia", "work", 300);


//=================================
//ARRAY OF INVOICES
//set to empty array
let invoices:Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(/* inv.client, inv.details, inv.amount,  */inv.format());
})
//=================================
//=================================
//=================================
//=================================
const form = document.querySelector('.new-item-form') as HTMLFormElement; //cast type 'form'
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event)=>{
  e.preventDefault();
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber //turns into number
  )
})