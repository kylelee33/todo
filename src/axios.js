import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-app-bef75.firebaseio.com/'
})

export default instance;