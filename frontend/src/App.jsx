import './App.css'
import { Helmet } from 'react-helmet';
import Home from './components/Home/Home';

function App() {

	return (
		<>
			<Helmet>
				<title>Financestralia</title>
				<meta name="description" content="home" />
			</Helmet>
			<Home />
		</>
	)
};

export default App;
