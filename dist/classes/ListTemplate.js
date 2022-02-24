export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        console.log(li);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
// 1. register a list container (ul) in the constructor
// 2. create a render method to render a new 'li' to the CredentialsContainer
//     -- accepts arguments: invoice or Payment, a HTMLHeadingElement, a position
