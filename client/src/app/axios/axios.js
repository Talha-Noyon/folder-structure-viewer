import axios from 'axios';

const baseURL = "/api";
const instance = axios.create({
    baseURL:baseURL
});

export default instance;
