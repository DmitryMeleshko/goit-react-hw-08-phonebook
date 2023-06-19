import { useAuth } from "hooks/useAuth";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    const {isLoggedIn} = useAuth();

    return (
        <nav>
            <NavLink
            to="/"
            style={({isActive})=> ({
                fontWeight: isActive ? '700' : '400',
                background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',

            })}>
            Home
            </NavLink>
            {isLoggedIn && (
                <NavLink
                to="/contacts"
                style={({isActive}) => ({
                    fontWeight: isActive ? '700' : '400',
                    background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                
                })}>Contacts</NavLink>
            )}
        </nav>
    );
};