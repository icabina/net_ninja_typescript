export function enums() {
    let ResourceType;
    (function (ResourceType) {
        ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
        ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
        ResourceType[ResourceType["FILM"] = 2] = "FILM";
        ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
        ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    })(ResourceType || (ResourceType = {}));
    const docSix = {
        uid: 1,
        // resourceType: 3,
        resourceType: ResourceType.BOOK,
        data: { title: 'name of the wind' }
    };
    const docSeven = {
        uid: 10,
        // resourceType: 4,
        resourceType: ResourceType.PERSON,
        data: { name: 'yoshi' }
    };
    console.log(docSix, docSeven);
}
