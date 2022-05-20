
export function renderList(list) {
    const ul = document.createElement('ul');
    
    const li = document.createElement('li');
    li.textContent = `${list.qty}: ${list.name}`; 

    const button = document.createElement('button');
    button.textContent = 'Purchased';

    const button2 = document.createElement('button');
    button2.textContent = 'Delete Item';

    if (list.purchased) {
        ul.classList.add('purchased');
    }

    ul.append(li, button, button2);
    return ul;
}