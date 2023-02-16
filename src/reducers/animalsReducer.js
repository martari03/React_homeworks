const animalsActionTypes = {
    ADD_CAT: 'ADD_CAT',
    DELETE_CAT_BY_ID: 'DELETE_CAT_BY_ID',
    ADD_DOG: 'ADD_DOG',
    DELETE_DOG_BY_ID: 'DELETE_DOG_BY_ID'
}

const animalsActions = {
    ADD_CAT: (item) => ({type: animalsActionTypes.ADD_CAT, payload: item}),
    DELETE_CAT_BY_ID: (id) => ({type: animalsActionTypes.DELETE_CAT_BY_ID, payload: id}),
    ADD_DOG: (item) => ({type: animalsActionTypes.ADD_DOG, payload: item}),
    DELETE_DOG_BY_ID: (id) => ({type: animalsActionTypes.DELETE_DOG_BY_ID, payload: id})
};

const initialAnimals = () => ({
    cats: [],
    dogs: []
});

const myAnimalsReducer = (state, action) => {
    switch (action.type) {
        case animalsActionTypes.ADD_CAT:
            const sliceCats = state.cats.slice(-1);
            const id = sliceCats.length ? sliceCats[0].id + 1 : 0;
            return {...state, cats: [...state.cats, {id, name: action.payload}]};

        case animalsActionTypes.DELETE_CAT_BY_ID:
            const index = state.cats.findIndex(value => value.id === action.payload);
            state.cats.splice(index, 1);
            return {...state};

        case animalsActionTypes.ADD_DOG:
            const sliceDogs = state.dogs.slice(-1);
            const idDog = sliceDogs.length ? sliceDogs[0].id + 1 : 0;
            return {...state, dogs: [...state.dogs, {id: idDog, name: action.payload}]};

        case animalsActionTypes.DELETE_DOG_BY_ID:
            const indexDog = state.dogs.findIndex(value => value.id === action.payload);
            state.dogs.splice(indexDog, 1);
            return {...state};

        default:
            return {...state};
    }
};

export {animalsActions, myAnimalsReducer, initialAnimals};