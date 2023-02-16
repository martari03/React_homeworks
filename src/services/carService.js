import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAllCars: (page = 1) => axiosService.get(urls.cars.cars, {params: {page}}),
    createCar: (newCar) => axiosService.post(urls.cars.cars, newCar),
    updateSelectedCar: (id, newValue) => axiosService.put(urls.cars.carById(id), newValue),
    deleteSelectedCar: (id) => axiosService.delete(urls.cars.carById(id))
};

export {carService};