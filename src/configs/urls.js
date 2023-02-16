const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const cars = '/cars';
const auth = '/auth';

const urls = {
    auth: {
        auth,
        info: `${auth}/me`,
        refresh: `${auth}/refresh`
    },
    cars: {
        cars,
        carById: (id) => `${cars}/${id}`
    },
    users: '/users'
};

export {baseURL, urls}