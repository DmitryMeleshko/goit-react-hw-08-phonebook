import {useDispatch} from 'react-redux';
import {logOut} from '../../redux/authOperation';
import {useAuth} from '../../hooks/useAuth';

export const Menu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth;

    return (
        <div>
            <h3>Welcome, {user.name} </h3>
            <button type="button" onClick={() => dispatch(logOut())}>logOut</button>
        </div>
    );
};