import {Template} from './template';
import {View} from "./view";
import {$ew} from './helpers';
export class Controller {
    
    constructor(view,items) {
        this.view = view;
        this.items = items;
        this.view.makeList(items);
        this.view.bindAddItem(this.addItem.bind(this));
        this.view.bindRemoveItem(this.removeItem.bind(this));
        
    }
        addItem(title) {
            this.items.push({id:Date.now().toString(),title:title});
            this.view.makeList(this.items);
        }
        removeItem(id) {
            this.items = this.items.filter( i => i.id !== id);
            this.view.makeList(this.items);
        }
}