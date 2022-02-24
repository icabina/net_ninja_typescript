export function generics(){
 // =====================================
  // =====================================
  // =====================================
//GENERICS: create an ID
//reusable code to use with different types

// const addUID = (obj: object) => {
// const addUID = <T extends {name:string}>(obj: T) => { 
    const addUID = <T extends object>(obj: T) => { 
        // T captures properties form instance, not type
        // extend to object to give type again
      let uid = Math.floor(Math.random() * 100);
      return{...obj, uid}
      //nuevo obj + id
    }
    
    let docThree = addUID({name: 'Yoshi', age: 40});
    console.log(docThree.name);
    
    
    //GENERICS W/ INTERFACES
    interface Resource<T>{
      uid: number;
      resourceName: string;
      data: T; //T is type of property data of instance when is created
    }
    const docFour: Resource<string> = { //we give the type of T
      uid: 1,
      resourceName: 'persons',
      data: 'test'
    }
    const docFive: Resource<string[]> = { //we give the type of T
      uid: 2,
      resourceName: 'persons',
      data: ['test', 'yeah', 'ok']
    }
} 
