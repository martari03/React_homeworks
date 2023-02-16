import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postService = {
    getPostByComment: (id) => axiosService.get(urls.postByComment(id))
};

export {postService};