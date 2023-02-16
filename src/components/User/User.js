import {useMyAppReducer} from "../../hooks";
import {userActions} from "../../reducers";


const User = ({user, setUserForUpdate}) => {
    const [, dispatch] = useMyAppReducer(value => value.userReducer);
    const {id, name, surname, age} = user;
    return (
        <div className='user'>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <button className='btn' onClick={() => dispatch(userActions.DELETE_BY_ID(id))}>Delete</button>
            <button className='btn' onClick={() => setUserForUpdate(user)}>Update</button>
        </div>
    );
};

export {User};
