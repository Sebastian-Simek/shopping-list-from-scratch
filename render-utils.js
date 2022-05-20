import { removePurchase, togglePurchase, } from './fetch-utils.js';
import { displayList } from './display-list/display-list.js';

export function renderList(item) {
    const div = document.createElement('div');

    const ul = document.createElement('ul');
    
    const li = document.createElement('li');
    li.textContent = `${item.qty}: ${item.name}`; 

    const button = document.createElement('button');
    button.textContent = 'Bought';
    button.addEventListener('click', async () => {
        await togglePurchase(item); 
        displayList();
    });
    
    const button2 = document.createElement('button');
    button2.textContent = 'Delete';
    button2.addEventListener('click', async () => {
        await removePurchase(item.id);
        displayList();
    });

    if (item.purchased === true) {
        ul.classList.add('purchased');
    }

    ul.append(li,);
    div.append(ul, button, button2);
    return div;
}