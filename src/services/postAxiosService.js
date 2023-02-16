import axios from "axios";

const postAxiosService = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})

export {postAxiosService}