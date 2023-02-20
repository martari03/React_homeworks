import {apiService, IRes} from "./apiService";
import {ICar} from "../interfaces";
import {urls} from "../configs";

const carService = {
    getAllCars: (): IRes<ICar[]> => apiService.get(urls.cars),
    getCarById: (id: string): IRes<ICar> => apiService.get(urls.carById(id)),
    createCar: (car: ICar): IRes<ICar> => apiService.post(urls.cars, car),
    updateCar: (id: string, data: ICar): IRes<ICar> => apiService.put(urls.carById(id), data),
    deleteCar: (id: string): IRes<ICar> => apiService.delete(urls.carById(id))
};

export {carService}