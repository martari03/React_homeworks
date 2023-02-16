import {axiosService} from "./axiosService";
import {urls} from "../configs";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {
    login: async function (credentials) {
        const response = await axiosService.post(urls.auth.auth, credentials);

        if (response.status === 200) {
            this.setTokens(response.data);
        }

        return response;
    },
    refresh: async function (refresh) {
        const response = await axiosService.post(urls.auth.refresh, {refresh})

        if (response.status === 200) {
            this.setTokens(response.data);
        }

        return response;
    },
    info: axiosService.get(urls.auth.info),
    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },
    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    },
    isValid: () => !!localStorage.getItem(accessTokenKey),
    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey)
};

export {authService};