export default class Payment {
    //ACCESS MODIFIERS
    // readonly client: string; //cannot be changed, only read //inside and outside the class
    // private details: string; //cant be accesed from outside class
    // public amount:number //default public
    // constructor(c: string, d: string, a: number){
    //   //this to refer to the instance of class being created
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    //this version works only with ACCESS MODIFIERS
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} paid ${this.amount} to ${this.details}`;
    }
}
