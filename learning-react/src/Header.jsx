
import { useContext } from 'react';
import AuthButton from './AuthButton';
import { AuthContext } from './context/AuthProvider';


const Header = () => {

    const {authUser} = useContext(AuthContext)

    return (
        <div>
            <p>From Header, Name is: {authUser?.name} And id is {authUser?.id}</p>
            <AuthButton/>
        </div>
    );
};

export default Header;