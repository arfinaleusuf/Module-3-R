
// import { useContext } from 'react';
// import AuthButton from './AuthButton';
// import { AuthContext } from './context/AuthProvider';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    // const {authUser} = useContext(AuthContext)

    return (
        <div className="flex justify-between bg-amber-500 py-3 px-6 text-white">
            {/* <p>From Header, Name is: {authUser?.name} And id is {authUser?.id}</p>
            <AuthButton/> */}
            <p>Our Web</p>
            <div className="hidden lg:block">
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <button className="btn hidden lg:block">Login</button>
                <GiHamburgerMenu className="block lg:hidden"/>

            </div>

        </div>
    );
};

export default Header;