import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentService = {
    getAllComments: () => axiosService.get(urls.comments),
    createComment: (newComment) => axiosService.post(urls.comments, newComment)
};

export {commentService};