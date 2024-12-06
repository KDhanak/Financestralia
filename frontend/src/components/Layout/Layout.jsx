import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            {/* <div className="heading flex h-16 bg-primary_4 text-primary_3 items-center justify-center">
                <p className="font-semibold text-xl">Our Partners</p>
            </div> */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;
