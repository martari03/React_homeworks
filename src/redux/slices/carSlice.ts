import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface IState {
    cars: ICar[],
    updateCar: ICar | null
}

const initialState: IState = {
    cars: [],
    updateCar: null
};

const getAllCars = createAsyncThunk<ICar[], void>(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAllCars();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const createCar = createAsyncThunk<ICar, { car: ICar }>(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const updateCar = createAsyncThunk<ICar, { car: ICar, id: string }>(
    'carSlice/updateCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateCar(id, car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const deleteCar = createAsyncThunk<ICar, { id: string }>(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await carService.deleteCar(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                state.cars = [action.payload];
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.cars = [action.payload];
            })
});

const {reducer: carReducer} = carSlice;

const carActions = {
    getAllCars,
    createCar,
    updateCar,
    deleteCar
};

export {carActions, carReducer};