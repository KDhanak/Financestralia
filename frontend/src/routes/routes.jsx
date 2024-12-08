import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layout/Layout'
import Advisors from '../components/Advisors/Advisors';

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
            }
        ]
    }
])

export default router;
