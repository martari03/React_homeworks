import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    prev: null,
    next: null,
    errors: null,
    loading: null,
    carToUpdate: null
};

const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carService.getAllCars(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, thunkAPI) => {
        try {
            await carService.createCar(car);
            thunkAPI.dispatch(getAllCars({page: 1}));
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const updateSelectedCar = createAsyncThunk(
    'carSlice/updateSelectedCar',
    async ({id, value}, thunkAPI) => {
        try {
            await carService.updateSelectedCar(id, value);
            thunkAPI.dispatch(getAllCars({page: 1}));
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const deleteSelectedCar = createAsyncThunk(
    'carSlice/deleteSelectedCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteSelectedCar(id);
            thunkAPI.dispatch(getAllCars({page: 1}));
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const carSlice = createSlice({
        name: 'carSlice',
        initialState,
        reducers: {
            setCarToUpdate: (state, action) => {
                state.carToUpdate = action.payload;
            }
        },
        extraReducers: builder => {
            builder
                .addCase(getAllCars.fulfilled, (state, action) => {
                    state.loading = false;
                    const {prev, next, items} = action.payload;
                    state.cars = items
                    state.prev = prev
                    state.next = next
                })
                .addDefaultCase((state, action) => {
                    const [status] = action.type.split('/').slice(-1);
                    state.loading = status === 'pending';
                });
        }
    }
);

const {reducer: carReducer, actions: {setCarToUpdate}} = carSlice;

const carActions = {
    setCarToUpdate,
    getAllCars,
    createCar,
    updateSelectedCar,
    deleteSelectedCar
};

export {carReducer, carActions};