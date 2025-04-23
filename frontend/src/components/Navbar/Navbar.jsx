import React, { useState, useRef, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";
import logo from '../../../public/logo.png'


const solutions = [
    {
        title: "Business",
        items: [
            "Accounting",
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
            "Accounting",
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
    const [mobileMenuOption, setMobileMenuOption] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const handleSolutionsDropDown = () => {
        setSolutionsDropDown(!solutionsDropDown);
    }

    const toggleMobileMenu = () => {
        setMobileMenuOption(!mobileMenuOption);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSolutionsDropDown(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOption(false);
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
                <div className="relative logo laptop:left-28 tablet:left-6 lMobile:left-6">
                    <a href="/">
                        <img className="block h-10 laptop:h-24 tablet:h-20 lMobile:h-16" src={logo} />
                    </a>
                </div>
                <div className="options">
                    <ul className="hidden tablet:flex font-semibold text-primary_3 tablet:space-x-12 laptop:space-x-12 lLaptop:space-x-24 tablet:text-sm laptop:text-base">
                        <a href="/"><li className="cursor-pointer hover:text-primary_2 ease-in-out duration-150">Home</li></a>
                        <a href="/advisors"><li className="cursor-pointer hover:text-primary_2 ease-in-out duration-150">Our Team</li></a>
                        <li ref={dropdownRef} className="flex items-center space-x-1 cursor-pointer active:text-primary_5 hover:text-primary_2 ease-in-out duration-150" onClick={handleSolutionsDropDown}>
                            <span>Solutions</span>
                            {(solutionsDropDown) ? <FaArrowUp /> : <FaArrowDown />}
                            {solutionsDropDown && (
                                <div className="absolute top-32 left-[100px] right-[100px] lLaptop:left-[400px] lLaptop:right-[400px] monitor:left-[600px] monitor:right-[600px] border border-primary_3 mt-2 bg-primary_1 shadow-lg p-4 z-50">
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
                <div className="hidden contactUs relative tablet:flex space-x-3 lMobile:right-6 laptop:right-28">
                    <button className="border-2 lMobile:py-1 lMobile:px-3.5 laptop:py-2 laptop:px-5 lMobile:text-sm text-base text-primary_3 font-medium active:text-primary_5 active:border-primary_5 ease-in-out duration-150">Locations</button>
                    <button className="border-2 lMobile:py-1 lMobile:px-3.5 laptop:py-2 laptop:px-5 lMobile:text-sm text-base text-primary_3 font-medium bg-primary_2 active:bg-primary_4 active:text-primary_5 active:border-primary_5 ease-in-out duration-150">Contact Us</button>
                </div>

                <div className="tablet:hidden contactUs relative sMobile:flex space-x-3 lMobile:left-7 laptop:right-28">
                    <CiLocationOn className="text-3xl text-primary_3 active:text-primary_5 active:border-primary_5 ease-in-out duration-150" />
                    <MdOutlineContactPhone className="text-3xl text-primary_3 active:bg-primary_4 active:text-primary_5 active:border-primary_5 ease-in-out duration-150" />
                </div>

                <div
                ref={mobileMenuRef}
                className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-primary_1 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                    mobileMenuOption ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleMobileMenu} aria-label="Close mobile menu">
                        <FiMenu className="text-primary_3 text-2xl" />
                    </button>
                </div>
                <ul className="flex flex-col font-semibold text-primary_3 text-base p-4 space-y-4 overflow-auto">
                    <li>
                        <a
                            href="/"
                            className="block hover:text-primary_2 ease-in-out duration-150"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/advisors"
                            className="block hover:text-primary_2 ease-in-out duration-150"
                            onClick={toggleMobileMenu}
                        >
                            Our Team
                        </a>
                    </li>
                    <li className="relative">
                        <div
                            className="flex items-center space-x-1 cursor-pointer hover:text-primary_2 ease-in-out duration-150"
                            onClick={handleSolutionsDropDown}
                        >
                            <span>Solutions</span>
                            {solutionsDropDown ? <FaArrowUp /> : <FaArrowDown />}
                        </div>
                        {solutionsDropDown && (
                            <div className="mt-2 bg-primary_1 border border-primary_3 p-2 mr-6">
                                {solutions.map((category, index) => (
                                    <div key={index} className="mb-4">
                                        <p className="font-bold text-base text-primary_5 mb-2">
                                            {category.title}
                                        </p>
                                        {category.items.map((item, idx) => (
                                            <a
                                                href="#"
                                                key={idx}
                                                className="block font-normal text-sm text-primary_3 hover:text-primary_2 ease-in-out duration-150 mb-1"
                                                onClick={toggleMobileMenu}
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                    <li>
                        <a
                            href="/about-us"
                            className="block hover:text-primary_2 ease-in-out duration-150"
                            onClick={toggleMobileMenu}
                        >
                            About Us
                        </a>
                    </li>
                </ul>
            </div>

            {mobileMenuOption && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleMobileMenu}
                ></div>
            )}

                <div className="relative tablet:hidden right-7">
                    <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        <FiMenu className="text-primary_3 text-2xl" />
                    </button>
                </div>
            </div>
        </>
    )
};

export default Navbar;
