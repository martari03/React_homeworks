import axios, {AxiosResponse} from "axios";

import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

export type IRes<T> = Promise<AxiosResponse<T>>;

export {apiService};