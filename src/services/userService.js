import {placeholderAxiosService} from "./placeholderAxiosService";
import {placeholderURLS as urls} from "../configs";

const userService = {
    getAllUsers: () => placeholderAxiosService.get(urls.users),
    getUserById: (id) => placeholderAxiosService.get(`${urls.users}/${id}`)
};

export {userService};