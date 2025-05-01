import React, { useEffect, useRef, useState } from "react";
import { useContactUs } from "../../contexts/contactUsContext";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        client_type: "",
        query_type: "",
        client_first_name: "",
        client_last_name: "",
        client_email: "",
        client_phone: "",
        client_state: "",
        client_postcode: "",
        client_business_name: "",
        advisor: "",
        client_message: "",
        is_client: "",
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
                client_first_name: "",
                client_last_name: "",
                client_email: "",
                client_phone: "",
                client_state: "",
                client_postcode: "",
                client_business_name: "",
                advisor: "",
                client_message: "",
                is_client: "",
            });
        }

        console.log("Form submitted:", formData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newData = {
                ...prevData,
                [name]: value,
            };
            // Clear business name if client_type changes to non-business
            if (name === "client_type" && value !== "BUS") {
                newData.client_business_name = "";
            }
            return newData;
        });
    };
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
                        <label htmlFor="client_first_name">First Name</label>
                        <input type="text" id="client_first_name" name="client_first_name" className="border border-black" value={formData.client_first_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="client_last_name">Last Name</label>
                        <input type="text" id="client_last_name" name="client_last_name" className="border border-black" value={formData.client_last_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="client_email">Email</label>
                        <input type="email" id="client_email" name="client_email" className="border border-black" value={formData.client_email} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="client_phone">Phone</label>
                        <input type="phone" id="client_phone" name="client_phone" className="border border-black" value={formData.client_phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group space-x-2">
                        <label htmlFor="client_state">State</label>
                        <select id="client_state" name="client_state" className="border border-black" value={formData.client_state} onChange={handleChange} required>
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
                        <label htmlFor="client_postcode">Postcode</label>
                        <input id="client_postcode" name="client_postcode" className="border border-black" value={formData.client_postcode} onChange={handleChange} required />
                    </div>
                    {formData.client_type === "BUS" && (
                        <div className="form-group space-x-2">
                            <label htmlFor="client_business_name">Business Name</label>
                            <input id="client_business_name" name="client_business_name" className="border border-black" value={formData.client_business_name} onChange={handleChange} required />
                        </div>
                    )}
                    <div className="form-group space-x-2">
                        <label>Are you an existing client?</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="is_client"
                                    value="YES"
                                    checked={formData.is_client === "YES"}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="is_client"
                                    value="NO"
                                    checked={formData.is_client === "NO"}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="ml-2">No</span>
                            </label>
                        </div>
                    </div>
                    {formData.is_client === "YES" && (
                        <div className="form-group space-x-2">
                            <label htmlFor="client_advisor">Your Advisor</label>
                            <input id="client_advisor" name="client_advisor" className="border border-black" value={formData.client_advisor} onChange={handleChange} required />
                        </div>
                    )}
                    <div className="form-group space-x-2">
                        <label htmlFor="client_message">Message</label>
                        <textarea id="client_message" name="client_message" className="border border-black" value={formData.client_message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="items-center justify-center border border-black">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactUs;
