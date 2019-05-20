import axios from 'axios';
const intance = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const registerUser = (user) => {
    return intance.post('/users', user);
}