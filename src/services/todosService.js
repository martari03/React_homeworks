import {axiosService} from "./axiosService";
import {urls} from "../../../hw/src/configs";

const todosService = {
    getAllTodos: () => axiosService.get(urls.todos)
};

export {todosService};