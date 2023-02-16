import {axiosService} from "./axiosService";
import {urls} from "../configs";

const userService = {
    createUser: (user) => axiosService.post(urls.users, user)
}

export {userService};