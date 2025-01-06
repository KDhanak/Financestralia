import React, {createContext, useContext, useState, useEffect} from 'react';
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
        try {
            const response = await axios.get('https://financestralia.onrender.com/');
            console.log(response.data);
        } catch (error) {
            handleApiError(error, 'An error occurred while fetching advisor');
        } finally {
            setLoading(false);
        }

        fetchAdvisor();
    };

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
