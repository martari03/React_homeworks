import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {useAppLocation} from "../../hooks";
import {ICar} from "../../interfaces";
import {carService} from "../../services";

const CarDetails: FC = () => {
    const {id} = useParams<{ id: string }>();
    const [car, setCar] = useState<ICar | null>(null);
    const {state} = useAppLocation<ICar>();

    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carService.getCarById(id!).then(({data}) => {
                setCar(data)
            })
        }
    }, [id, state])

    return (
        <div>
            {car && <div>{car.brand}</div>}
        </div>
    );
};

export {CarDetails};