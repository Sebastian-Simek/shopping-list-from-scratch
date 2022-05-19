export function renderList(list) {
    const ul = document.createElement('ul');
    
    const li = document.createElement('li');
    li.textContent = `${list.qty}: ${list.name}`; 

    ul.append(li);
    return ul;
}