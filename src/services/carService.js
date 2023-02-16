import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAllCars: () => axiosService.get(urls.cars),
    createCar: (newCar) => axiosService.post(urls.cars, newCar),
    updateSelectedCar: (id, newValue) => axiosService.put(`${urls.cars}/${id}`, newValue),
    deleteSelectedCar: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {carService};