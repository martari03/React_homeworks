import {urlService} from "./URLService";
import {urls} from "../configs";

const userService = {
    getAll: () => urlService.get(urls.users),
    createUser: (newUser) => urlService.post(urls.users, newUser)
};

export {userService};