import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authService} from "./authService";

const axiosService = axios.create({baseURL});

const history = createBrowserHistory();

axiosService.interceptors.request.use((config) => {
    if (authService.isValid()) {
        const accessToken = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

let isRefreshing = false;

axiosService.interceptors.response.use((config) => {
        return config;
    },
    async (error) => {
        const refreshToken = authService.getRefreshToken();

        if ((error.response?.status === 401 && refreshToken && !isRefreshing)) {
            isRefreshing = true;
            try {
                await authService.refresh(refreshToken)
            } catch (e) {
                authService.deleteTokens();
                history.replace('login?expSession=true');
            }
            isRefreshing = false;
            return axiosService(error.config);
        }
        return Promise.reject(error);
    })

export {axiosService, history};