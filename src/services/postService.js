import {postAxiosService} from "./postAxiosService";

const postService = {
    getAll: () => postAxiosService.get('/posts')
}

export {postService}