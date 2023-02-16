import {useMyAppReducer} from "../../hooks";
import {User} from "../User/User";

const Users = ({setUserForUpdate}) => {
    const [users] = useMyAppReducer((reducers) => reducers.userReducer);

    return (
        <div className='users'>
            {users.map(user => <User key={user.id} user={user} setUserForUpdate={setUserForUpdate}/>)}
        </div>
    );
};

export {Users};
