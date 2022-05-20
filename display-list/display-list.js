import { renderList } from '../render-utils.js';
import { fetchItems, removePurchase, togglePurchase, } from '../fetch-utils.js';

const shoppingListEL = document.getElementById('shopping-list');

async function displayList() {
    shoppingListEL.textContent = '';
    const data = await fetchItems();
    if (data) {
        for (let item of data) {
            const listEl = renderList(item);
            shoppingListEL.append(listEl);
            listEl.addEventListener('click', async () => {
                alert('this works');
                await togglePurchase(item);
                await removePurchase(item.id);
                console.log(item);
                displayList();
            });
        }
    }
}

displayList();