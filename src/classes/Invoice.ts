import {HasFormatter} from '../interfaces/HasFormatter.js';
export default class Invoice implements HasFormatter{

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
  constructor( 
    readonly client: string,
    private details: string,
    public amount: number,
  ){}
  
    format(){ //format method from interface, shape of class
      return `${this.client} owes ${this.amount} for ${this.details}`
    }
  }