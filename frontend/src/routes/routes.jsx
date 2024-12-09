import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layout/Layout'
import Advisors from '../components/Advisors/Advisors';
import About from '../components/About/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/advisors',
                element: <Advisors />
            },
            {
                path: '/about-us',
                element: <About />
            }
        ]
    }
])

export default router;
