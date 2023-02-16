const catAndDogActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const catAndDogActions = {
    ADD: (item) => ({type: catAndDogActionTypes.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: catAndDogActionTypes.DELETE_BY_ID, payload: id})
};

const initialCatAndDog = () => ({
    cats: [],
    dogs: []
});

const myCatAndDogReducer = (state, action) => {
    switch (action.type) {
        case catAndDogActionTypes.ADD:
            const slice = state.slice(-1);
            const id = slice.length ? slice[0].id + 1 : 0;
            return [...state, {id, ...action.payload}];

        case catAndDogActionTypes.DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1);
            return [...state];

        default:
            return [...state];
    }
};

export {catAndDogActions, myCatAndDogReducer, initialCatAndDog};