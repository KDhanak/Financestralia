import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { AdvisorProvider } from './contexts/advisorContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<HelmetProvider>
			<AdvisorProvider>
				<RouterProvider router={router} />
			</AdvisorProvider>
		</HelmetProvider>
	</StrictMode>,
)
