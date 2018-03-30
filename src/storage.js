export class Storage {
    constructor(name) {
        const localStorage = window.localStorage;
        let todo = [
            {
                id: '0',
                title: 'write good code',
                checked: 'checked'
            },
            {
                id: '1',
                title: 'find good job',
                checked: ''
            },
        ];
        this.getLocalStorage = () => {
            const storageParsed = JSON.parse(localStorage.getItem(name));
            return (storageParsed.length!=0 ?storageParsed:todo);
        }
        this.setLocalStorage = (todo) => {
            localStorage.setItem(name, JSON.stringify(todo));
        }
    }
    insert(item) {
        let todo = this.getLocalStorage();
        todo.push(item);
        this.setLocalStorage(todo);
    }
    remove(id) {
        let todo = this.getLocalStorage();
        todo = todo.filter(i => i.id !== id);
        this.setLocalStorage(todo);
    }
}