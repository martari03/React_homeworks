import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {useMyAppReducer} from "../../hooks";
import {userActions} from "../../reducers";

const UserForm = ({userForUpdate, setUserForUpdate}) => {
    const {register, reset, handleSubmit, setValue} = useForm();
    const [, dispatch] = useMyAppReducer(value => value.userReducer);

    useEffect(() => {
        if (userForUpdate) {
            setValue('name', userForUpdate.name)
            setValue('surname', userForUpdate.surname)
            setValue('age', userForUpdate.age)
        }
    }, [setValue, userForUpdate]);

    const save = (user) => {
        if (userForUpdate) {
            dispatch(userActions.UPDATE_BY_ID(userForUpdate.id, user));
            setUserForUpdate(null);
            reset();
        } else {
            if (user.name && user.surname && user.age) {
                dispatch(userActions.ADD(user));
                reset();
            }
        }
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'surname'} {...register('surname')}/>
                <input type="text" placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
                <button className='btn'>{userForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export {UserForm};