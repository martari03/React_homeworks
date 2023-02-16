import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAllCars: () => axiosService.get(urls.cars.cars),
    createCar: (newCar) => axiosService.post(urls.cars.cars, newCar),
    updateSelectedCar: (id, newValue) => axiosService.put(urls.cars.carById(id), newValue),
    deleteSelectedCar: (id) => axiosService.delete(urls.cars.carById(id))
};

export {carService};