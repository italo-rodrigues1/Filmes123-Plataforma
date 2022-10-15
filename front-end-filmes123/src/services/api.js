import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_BASE_URL
});

api.interceptors.request.use(
    (config) => {
        console.log('config', config)
    },
    (error) => {
        console.log('error', error)
//        return window.location.reload()
    }
)