import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './NavBar';

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;
