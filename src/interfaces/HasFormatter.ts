//===================================
//INTERFACES
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void; //method takes param string, and returns void
    spend(a: number): number; //method takes param string, and returns number
  }
  const me: IsPerson = {
    name: "shaun",
    age: 30,
    speak(text: string): void{
      console.log(text);
    },
    spend(amount:number): number {
      console.log("I spent", amount);
      return amount;
    }
  };
  
  const greetPerson = (person: IsPerson) => {
    console.log("hello", person.name);
  }
  
  greetPerson(me);


export interface HasFormatter{
    format(): string; //should return a string
}