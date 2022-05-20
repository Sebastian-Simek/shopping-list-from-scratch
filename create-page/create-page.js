import { addItems, checkAuth, logout } from '../fetch-utils.js';

const userInput = document.getElementById('item-form');
const listBtn = document.getElementById('shopping-list');

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

userInput.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData (userInput);
    const newPost = {
        qty: data.get('qty'),
        name: data.get('item-name')
    };
    userInput.reset();
    await addItems(newPost);
});

listBtn.addEventListener('click', () => {
    location.replace('../display-list');
});