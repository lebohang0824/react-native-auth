import axios from 'axios'

const client = axios.create({
    baseURL: 'https://0b854293ec94.ngrok.io/api/'
});

export default client;


