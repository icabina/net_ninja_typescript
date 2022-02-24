import Invoice from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import Payment from './classes/Payments.js';
let docOne; //type HasFormatter
let docTwo;
docOne = new Invoice("cata", "hey", 400); //invoice implements HasFormatter
docTwo = new Payment("mario", "work", 100); //payment implements HasFormatter
let docs = []; //only object who implements hasFormatter can go in
docs.push(docOne);
docs.push(docTwo);
// docs.forEach(inv => {
//   console.log("test" + inv.format());
// });
//====================================
const invOne = new Invoice("rellath", "test", 200);
const invTwo = new Invoice("Tatia", "work", 300);
//=================================
//ARRAY OF INVOICES
//set to empty array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(/* inv.client, inv.details, inv.amount,  */inv.format());
// })
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
// =====================================
// =====================================
// =====================================
const ul = document.querySelector('ul');
//CREATE ListTemplate instance
const list = new ListTemplate(ul);
// =====================================
// =====================================
// =====================================
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //CHECK IF IS PAYMENT O INVOICE
    let doc;
    if (type.value === "invoice") {
        //create a new invoice and store it in doc
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    /*   console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber //turns into number
      ) */
    // console.log(doc);
});
