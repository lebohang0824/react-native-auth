import * as SecureStore from 'expo-secure-store';

export async function saveToken(token) {
    await await SecureStore.setItemAsync('secure-token', token);
}

export async function deleteToken() {
    await SecureStore.deleteItemAsync('secure-token');
}

export async function getToken() {
    return await SecureStore.getItemAsync('secure-token');
}