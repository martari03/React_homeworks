import {axiosService} from "./axiosService";
import {urls} from "../configs";

const todosService = {
    getAllTodos: () => axiosService.get(urls.todos)
};

export {todosService};