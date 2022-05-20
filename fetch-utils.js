const SUPABASE_URL = 'https://aqordevvnruktzytnrtm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxb3JkZXZ2bnJ1a3R6eXRucnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTc4ODUsImV4cCI6MTk2Nzg3Mzg4NX0.paVZTcltRhN61IqrwWNRAkNdX3pf7FOsHUYHh2DnJ_8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./create-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }

export async function addItems(name, qty) {
    const response = await client.from('shopping_list').insert(name, qty);
    if (response.data) {
        alert('Item added to list');
    } else {
        console.error(response.error.message);
    }
}

export async function fetchItems() {
    const response = await client.from('shopping_list').select('*').order('name');
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function togglePurchase(item) {
    const response = await client
        .from('shopping_list')
        .update({ purchased: !item.purchased })
        .match({ id: item.id });
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function removePurchase(userId) {
    const response = await client
        .from('shopping_list')
        .delete()
        .eq('id', userId);
    return response.data;
}