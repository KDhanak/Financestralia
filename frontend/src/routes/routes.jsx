import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layout/Layout'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },
        ]
    }
])

export default router;
