
export function renderList(list) {
    const ul = document.createElement('ul');
    
    const li = document.createElement('li');
    li.textContent = `${list.qty}: ${list.name}`; 

    const button = document.createElement('button');
    button.textContent = 'Purchased';
    button.addEventListener('click', () => {
        alert('this works');
    });

    if (list.purchased) {
        ul.classList.add('purchased');
    }

    ul.append(li, button);
    return ul;
}