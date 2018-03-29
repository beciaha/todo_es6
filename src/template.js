export class Template {
    /**
     * 
     * @param {Array} items 
     */
    itemList(items) {
        return items.reduce((a, item) => a + `
    <li id="${item.id}" class="items-on-list">
    <button class="destroy">X</button>
        <label>${item.title}</label>
    </li>`, '');
    }
}