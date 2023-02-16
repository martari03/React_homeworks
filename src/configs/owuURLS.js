const owuBaseURL = 'http://owu.linkpc.net/carsAPI/v1';

const cars = '/cars';

const owuURLS = {
    cars: {
        cars,
        carById: (id) => `${cars}/${id}`
    }
};

export {owuBaseURL, owuURLS}