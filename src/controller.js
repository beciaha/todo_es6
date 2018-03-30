import { $ew, qs } from './helpers';

export class Controller {

    constructor(view, storage) {
        this.view = view;
        this.storage = storage;
        this.view.makeList(this.storage.getLocalStorage());
        this.view.bindAddItem(this.addItem.bind(this));
        this.view.bindRemoveItem(this.removeItem.bind(this));

    }
    addItem(title) {
        let item = {
            id: Date.now().toString(),
            title: title,
            checked: ""
        }
        this.storage.insert(item);
        this.view.makeList(this.storage.getLocalStorage());
        this.view.clearNewItem();
    }
    removeItem(id) {
        this.storage.remove(id);
        this.view.makeList(this.storage.getLocalStorage());
    }
}