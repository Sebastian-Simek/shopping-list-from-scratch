import { renderList } from '../render-utils.js';
import { fetchItems, togglePurchase } from '../fetch-utils.js';

const shoppingListEL = document.getElementById('shopping-list');

async function displayList() {
    shoppingListEL.textContent = '';
    const data = await fetchItems();
    if (data) {
        for (let item of data) {
            const listEl = renderList(item);
            shoppingListEL.append(listEl);
            await togglePurchase(item);
            console.log(item);
        }
    }
    // displayList();
}
displayList();