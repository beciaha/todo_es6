export class Storage {
    constructor(name) {
        const localStorage = window.localStorage;
        let todo;
        this.getLocalStorage = ()=> {
                return (todo || JSON.parse(localStorage.getItem(name)));
        }
        this.setLocalStorage =(todo) => {
            localStorage.setItem(name,JSON.stringify(todo));
        }
    }
}