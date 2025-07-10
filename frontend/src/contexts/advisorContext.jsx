import {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';

const AdvisorContext = createContext();

export const AdvisorProvider = ({children}) => {
    const[advisor, setAdvisor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleApiError = (error, defaultMessage) => {
        if (axios.isAxiosError(error)) {
            setError(error.response.data.message);
        } else {
            setError(defaultMessage);
        }
    };
    
    const fetchAdvisor = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/financestralia/advisors`);
            setAdvisor(response.data);
            return true;
        } catch (error) {
            handleApiError(error, 'An error occurred while fetching advisor');
            return false;
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        fetchAdvisor();
    }, []);

    return (
        <AdvisorContext.Provider value={{fetchAdvisor, advisor, loading, error}}>
            {children}
        </AdvisorContext.Provider>
    );
};

export const useAdvisor = () => {
    const context = useContext(AdvisorContext);
    if (!context) {
        throw new Error('useAdvisor must be used within an AdvisorProvider');
    }
    return context;
};
