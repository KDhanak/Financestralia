import React, { useEffect, useRef, useState } from "react";
import { useContactUs } from "../../contexts/contactUsContext";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        client_type: "",
        query_type: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        state: "",
        postcode: "",
        business_name: "",
        advisor: "",
        message: "",
    });
    const { submitForm, error, loading, success } = useContactUs();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await submitForm(formData);
            if (success) {
                alert("Form submitted successfully!");
            } else {
                alert("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form. Please try again.");
        } finally {
            setFormData({
                client_type: "",
                query_type: "",
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                state: "",
                postcode: "",
                business_name: "",
                advisor: "",
                message: "",
            });
        }

        console.log("Form submitted:", formData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <>
            <div className="contact-us-container items-center justify-center flex flex-col">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <form className="contact-form flex flex-col space-y-5" onSubmit={handleFormSubmit}>
                    <div className="form-group space-x-2">
                        <label htmlFor="client_type">I am a</label>
                        <select type="text" id="client_type" name="client_type" className="border border-black" value={formData.client_type} onChange={handleChange} required>
                            <option value="">Please Select</option>
                            <option value="IND">Individual</option>
                            <option value="BUS">Business</option>
                        </select>
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="query_type">Enquiry Type</label>
                        <select type="text" id="query_type" name="query_type" className="border border-black" value={formData.query_type} onChange={handleChange} required>
                            <option value="">Please Select</option>
                            <option value="GEN">General Enquiry</option>
                            <option value="SRV">Service Enquiry</option>
                            <option value="Prop">Request for Proposal</option>
                        </select>
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id="first_name" name="first_name" className="border border-black" value={formData.first_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" id="last_name" name="last_name" className="border border-black" value={formData.last_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="border border-black" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="phone">Phone</label>
                        <input type="phone" id="phone" name="phone" className="border border-black" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="state">State</label>
                        <select id="state" name="state" className="border border-black" value={formData.state} onChange={handleChange} required>
                            <option value="">Select a state</option>
                            <option value="NSW">New South Wales</option>
                            <option value="VIC">Victoria</option>
                            <option value="QLD">Queensland</option>
                            <option value="SA">South Australia</option>
                            <option value="WA">Western Australia</option>
                            <option value="TAS">Tasmania</option>
                            <option value="NT">Northern Territory</option>
                            <option value="ACT">Australian Capital Territory</option>
                            <option value="international">International</option>
                        </select>
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="postcode">postcode</label>
                        <input id="postcode" name="postcode" className="border border-black" value={formData.postcode} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="business_name">Business Name</label>
                        <input id="business_name" name="business_name" className="border border-black" value={formData.business_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="advisor">Advisor</label>
                        <input id="advisor" name="advisor" className="border border-black" value={formData.advisor} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" className="border border-black" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="items-center justify-center border border-black">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactUs;
