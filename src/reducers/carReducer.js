const carActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const carActions = {
    ADD: (item) => ({type: carActionTypes.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: carActionTypes.DELETE_BY_ID, payload: id})
};

const initialCars = () => [];

const myCarReducer = (state, action) => {
    switch (action.type) {
        case carActionTypes.ADD:
            const slice = state.slice(-1);
            const id = slice.length ? slice[0].id + 1 : 0;
            return [...state, {id, ...action.payload}];

        case carActionTypes.DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1);
            return [...state];

        default:
            return [...state];
    }
};

export {carActions, myCarReducer, initialCars};