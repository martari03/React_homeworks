import {axiosService} from "./axiosService";
import {urls} from "../../../hw/src/configs";

const commentsService = {
    getAllComments: () => axiosService.get(urls.comments)
};

export {commentsService};