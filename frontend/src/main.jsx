import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { AdvisorProvider } from './contexts/advisorContext.jsx';
import { ContactUsProvider } from './contexts/contactUsContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<HelmetProvider>
			<ContactUsProvider>
				<AdvisorProvider>
					<RouterProvider router={router} />
				</AdvisorProvider>
			</ContactUsProvider>
		</HelmetProvider>
	</StrictMode>,
)
