import { renderList } from '../render-utils.js';
import { deleteList, fetchItems, logout } from '../fetch-utils.js';

const homeBtn = document.getElementById('home-button');
const deleteBtn = document.getElementById('delete-button');
const logoutButton = document.getElementById('log-out');

const shoppingListEL = document.getElementById('shopping-list');
export async function displayList() {
    shoppingListEL.textContent = '';
    const data = await fetchItems();
    if (data) {
        for (let item of data) {
            const listEl = renderList(item,);
            shoppingListEL.append(listEl);
        }
    }
}

homeBtn.addEventListener('click', () => {
    location.replace('../create-page');
});

deleteBtn.addEventListener('click', async () => {
    await deleteList();
    displayList();
});

displayList();

logoutButton.addEventListener('click', () => {
    logout();
});
