import React, { useState, useRef, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import logo from '../../../public/logo.png'

const solutions = [
    {
        title: "Business",
        items: [
            "Accounting and Business Advisory",
            "Lending and Finance",
            "General Insurance",
            "Consulting",
        ],
    },
    {
        title: "Individuals",
        items: [
            "Wealth Management",
            "SMSF Administration and Advisory",
            "Lending and Finance",
            "Risk Insurance",
            "Accounting and Business Advisory",
        ],
    },
    {
        title: "Corporate",
        items: [
            "Corporate Finance",
            "Tax Advisory",
            "Consulting",
            "Digital Consulting",
            "External Audit",
            "Internal Audit",
            "General Insurance",
            "Lending and Finance",
        ],
    },
];

const Navbar = () => {
    const [solutionsDropDown, setSolutionsDropDown] = useState(false);
    const dropdownRef = useRef(null);

    const handleSolutionsDropDown = () => {
        setSolutionsDropDown(!solutionsDropDown);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSolutionsDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    return (
        <>
            <div className="flex bg-primary_1 items-center justify-between h-32">
                <div className="relative logo left-28">
                    <a href="/">
                        <img className="block h-24" src={logo} />
                    </a>
                </div>
                <div className="options">
                    <ul className="flex font-semibold text-primary_3 space-x-24">
                        <a href="/"><li className="cursor-pointer hover:text-primary_2 ease-in-out duration-150">Home</li></a>
                        <a href="/advisors"><li className="cursor-pointer hover:text-primary_2 ease-in-out duration-150">Our Team</li></a>
                        <li ref={dropdownRef} className="flex items-center space-x-1 cursor-pointer active:text-primary_5 hover:text-primary_2 ease-in-out duration-150" onClick={handleSolutionsDropDown}>
                            <span>Solutions</span>
                            {(solutionsDropDown) ? <FaArrowUp /> : <FaArrowDown />}
                            {solutionsDropDown && (
                                <div className="absolute top-32 right-[550px] border border-primary_3 mt-2 bg-primary_1 shadow-lg p-4 z-50">
                                    <div className="grid grid-cols-3 gap-8">
                                        {solutions.map((category, index) => (
                                            <div key={index}>
                                                <p className="font-bold text-primary_5 mb-3">
                                                    {category.title}
                                                </p>
                                                {category.items.map((item, idx) => (
                                                    <a
                                                        href="#"
                                                        key={idx}
                                                        className="block text-primary_3 hover:text-primary_2 ease-in-out duration-150 mb-2"
                                                    >
                                                        {item}
                                                    </a>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                        <a href="/about-us"><li className="cursor-pointer hover:text-primary_2 ease-in-out duration-150">About Us</li></a>
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
