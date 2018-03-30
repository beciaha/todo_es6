export class Template {
    /**
     * 
     * @param {Array} items 
     */

    itemList(items) {
        if (items !== null) {
            return items.reduce((a, item) => a + `
            <li id="${item.id}" class="item-on-list">
            <input class="form-check-input" type="checkbox" ${item.checked}>
                <label>${item.title}</label>
                <button class="destroy btn-outline btn-danger "> &#10007; </button>
            </li>`, '');
        }
        else {
            return [];
        }

    }
}