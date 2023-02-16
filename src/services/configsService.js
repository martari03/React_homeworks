import {baseURLService} from "./baseURLService";

const configsService = {
    getAll: () => baseURLService.get('/users'),
    getUserPosts: (id) => baseURLService.get(`/users/${id}/posts`)
}

export {configsService}