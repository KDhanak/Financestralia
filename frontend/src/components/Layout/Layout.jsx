import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

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
