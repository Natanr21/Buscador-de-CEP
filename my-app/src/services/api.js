import axios from 'axios';

let api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;
