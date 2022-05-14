import axios from 'axios';
import config from '../config/config';

const instance = axios.create({
    baseURL: config.baseUrl,
})

export default instance;