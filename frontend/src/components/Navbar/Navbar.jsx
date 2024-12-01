import React, { useState } from "react";
import { FaArrowUp, FaArrowDown  } from "react-icons/fa6";
import logo from '../../../public/logo.png'

const Navbar = () => {
    const [servicesDropDown, setservicesDropDown] = useState(false);
    const [solutionsDropDown, setsolutionsDropDown] = useState(false);

    const handleServicesDropDown = () => {
        setservicesDropDown(!servicesDropDown);
    }

    const handleSolutionsDropDown = () => {
        setsolutionsDropDown(!solutionsDropDown);
    }
    return (
        <>
            <div className="flex bg-primary_1 items-center justify-between h-32">
                <div className="relative logo left-28">
                    <a href="/">
                        <img className="block h-24" src={logo} /></a>
                </div>
                <div className="options">
                    <ul className="flex font-semibold text-primary_3 space-x-24">
                        <li className="flex items-center space-x-1 cursor-pointer active:text-primary_5 hover:text-primary_2 ease-in-out duration-150" onClick={handleServicesDropDown}>
                            <span>Services</span>
                            {(servicesDropDown) ? <FaArrowDown /> : <FaArrowUp />}
                        </li>
                        <li className="cursor-pointer hover:text-primary_2 ease-in-out duration-150">Advisors</li>
                        <li className="flex items-center space-x-1 cursor-pointer active:text-primary_5 hover:text-primary_2 ease-in-out duration-150" onClick={handleSolutionsDropDown}>
                            <span>Solutions</span>
                            {(solutionsDropDown) ? <FaArrowDown /> : <FaArrowUp />}
                        </li>
                        <li className="cursor-pointer hover:text-primary_2 ease-in-out duration-150">About Us</li>
                    </ul>
                </div>
                <div className="contactUs relative flex space-x-3 right-28">
                    <button className="border-2 py-2 px-5 text-primary_3 font-medium active:text-primary_5 active:border-primary_5 ease-in-out duration-150">Locations</button>
                    <button className="border-2 py-2 px-5 text-primary_3 font-medium bg-primary_2 active:bg-primary_4 active:text-primary_5 active:border-primary_5 ease-in-out duration-150">Contact Us</button>
                </div>
            </div>
        </>
    )
};

export default Navbar;
