export function generics() {
    // =====================================
    // =====================================
    // =====================================
    //GENERICS: create an ID
    //reusable code to use with different types
    // const addUID = (obj: object) => {
    // const addUID = <T extends {name:string}>(obj: T) => { 
    const addUID = (obj) => {
        // T captures properties form instance, not type
        // extend to object to give type again
        let uid = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), { uid });
        //nuevo obj + id
    };
    let docThree = addUID({ name: 'Yoshi', age: 40 });
    console.log(docThree.name);
    const docFour = {
        uid: 1,
        resourceName: 'persons',
        data: 'test'
    };
    const docFive = {
        uid: 2,
        resourceName: 'persons',
        data: ['test', 'yeah', 'ok']
    };
}
