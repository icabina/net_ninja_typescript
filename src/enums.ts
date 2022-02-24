export function enums(){
   enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
//each string associate with specific number

interface Recurso<T>{
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docSix: Recurso<object> = {
    uid: 1,
    // resourceType: 3,
    resourceType: ResourceType.BOOK,
    data: {title: 'name of the wind'}
}

const docSeven: Recurso<object> = {
    uid: 10,
    // resourceType: 4,
    resourceType: ResourceType.PERSON,
    data: {name: 'yoshi'}
}

console.log(docSix, docSeven);
}
