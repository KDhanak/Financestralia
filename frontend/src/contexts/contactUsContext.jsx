import React, {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';

const ContactUsContext = createContext();

export const ContactUsProvider = ({children}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleApiError = (error, defaultMessage) => {
        if (axios.isAxiosError(error)) {
            setError(error.response.data.message);
        } else {
            setError(defaultMessage);
        }
    };

    const submitForm = async (formData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('https://financestralia.onrender.com/financestralia/query/', formData);
            setSuccess(true);
            console.log(response.data);
            return true;
        } catch (error) {
            handleApiError(error, 'An error occurred while submitting the form');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return (
        <ContactUsContext.Provider value={{formData, setFormData, submitForm, loading, error, success}}>
            {children}
        </ContactUsContext.Provider>
    );
}

export const useContactUs = () => {
    const context = useContext(ContactUsContext);
    if (!context) {
        throw new Error('useContactUs must be used within a ContactUsProvider');
    }
    return context;
}
