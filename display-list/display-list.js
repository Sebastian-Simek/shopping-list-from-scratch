import { renderList } from '../render-utils.js';
import { fetchItems, } from '../fetch-utils.js';

const homeBtn = document.getElementById('home-button');

const shoppingListEL = document.getElementById('shopping-list');
export async function displayList() {
    shoppingListEL.textContent = '';
    const data = await fetchItems();
    if (data) {
        for (let item of data) {
            const listEl = renderList(item);
            shoppingListEL.append(listEl);
        }

    }
}

homeBtn.addEventListener('click', () => {
    location.replace('../create-page');
});


displayList();