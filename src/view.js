import {qs,$delegate} from "./helpers";
import {$ew} from './helpers';
export class View {
    /**
     * 
     * @param {*} template 
     */
    constructor(template) { 
        this.template = template;
        this.$todoList = qs('.todo-list');
        this.$newItem = qs('.new-item');
        this.$itemsOnList = qs('.items-on-list');
        this.$destroy = qs('.destroy'); 
    }
    /**
     * 
     * @param {Array} items 
     */
    makeList(items) {
        let list =this.template.itemList(items);
        this.$todoList.innerHTML=list;
    }
    
    bindAddItem(handler) {
		$ew(this.$newItem, 'change', ({target}) => {
			const title = target.value.trim();
			if (title) {
                handler(title);
			}
        });
    }
    clearNewItem() {
        this.$newItem.value="";
    }
    bindRemoveItem(handler) {
        $delegate(this.$todoList, '.destroy', 'click', ({target}) => {
			handler(target.parentNode.id);
		});
    }
}