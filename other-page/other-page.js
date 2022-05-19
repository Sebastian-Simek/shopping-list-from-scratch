import { addItems, checkAuth, logout } from '../fetch-utils.js';

const userInput = document.getElementById('item-form');

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
    console.log(newPost);
    userInput.reset();
    await addItems(newPost);
});