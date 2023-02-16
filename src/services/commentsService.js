import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsService = {
    getAllComments: () => axiosService.get(urls.comments)
};

export {commentsService};