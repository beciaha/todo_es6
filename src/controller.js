import {$ew,qs} from './helpers';

export class Controller {
    
    constructor(view,storage) {
        this.view = view;
        this.storage =storage;
        this.view.makeList(this.storage.getLocalStorage());
        this.view.bindAddItem(this.addItem.bind(this));
        this.view.bindRemoveItem(this.removeItem.bind(this)); 

    }
    addItem(title) {
       let itemsArray = this.storage.getLocalStorage();
       itemsArray.push({id:Date.now().toString(),title:title,checked:""});
       this.storage.setLocalStorage(itemsArray);
       this.view.makeList(this.storage.getLocalStorage());
       this.view.clearNewItem();
        }
    removeItem(id) {
            let itemsArray = this.storage.getLocalStorage();
            itemsArray = itemsArray.filter( i => i.id !== id);
            this.storage.setLocalStorage(itemsArray);
            this.view.makeList(this.storage.getLocalStorage());
        }        
}