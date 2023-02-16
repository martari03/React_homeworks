import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsService = {
    getAllPosts: () => axiosService.get(urls.posts)
};

export {postsService};