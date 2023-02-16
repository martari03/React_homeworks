import {owuAxiosService} from "./owuAxiosService";
import {owuURLS} from "../configs";

const carService = {
    getAllCars: () => owuAxiosService.get(owuURLS.cars.cars),
    createCar: (newCar) => owuAxiosService.post(owuURLS.cars.cars, newCar),
    updateSelectedCar: (id, newValue) => owuAxiosService.put(owuURLS.cars.carById(id), newValue),
    deleteSelectedCar: (id) => owuAxiosService.delete(owuURLS.cars.carById(id))
};

export {carService};