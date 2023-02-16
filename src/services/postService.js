import {placeholderURLS} from "../configs";
import {placeholderAxiosService} from "./placeholderAxiosService";

const postService = {
    getAllPosts: () => placeholderAxiosService.get(placeholderURLS.posts),
    getPostById: (id) => placeholderAxiosService.get(`${placeholderURLS.posts}/${id}`)
}

export {postService};