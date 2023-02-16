import axios from "axios";

const baseURLService = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})

export {baseURLService}