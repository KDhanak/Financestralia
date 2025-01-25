import React from "react";

const business = ["Accounting", "Lending and Finance", "General Insurance", "Consulting",];
const individuals = ["Wealth Management", "SMSF Administration and Advisory", "Lending and Finance", "Risk Insurance", "Accounting",];
const corporate = ["Corporate Finance", "Tax Advisory", "Consulting", "Digital Consulting", "External Audit", "Internal Audit", "General Insurance", "Lending and Finance",];

const Footer = () => {
    return (
        <>
            <div className="bg-primary_1 mt-10">
                <div className="flex flex-row justify-center mx-5 tablet:space-x-12 laptop:space-x-12 lLaptop:space-x-28 py-10">
                    <div className="flex flex-col">
                        <p className="text-primary_5 text-base mb-5 font-medium items-start relative">Business
                            <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-primary_3"></span>
                        </p>
                        {business.map((businessItem, index) => (
                            <a href="#"><p key={index} className="text-primary_3 mb-2 hover:text-primary_2 ease-in-out duration-150">{businessItem}</p></a>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-primary_5 text-base mb-5 font-medium items-start relative">Individuals
                            <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-primary_3"></span>
                        </p>
                        {individuals.map((individualsItem, index) => (
                            <a href="#"><p key={index} className="text-primary_3 mb-2 hover:text-primary_2 ease-in-out duration-150">{individualsItem}</p></a>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-primary_5 text-base mb-5 font-medium items-start relative">Corporate
                            <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-primary_3"></span>
                        </p>
                        {corporate.map((corporateItem, index) => (
                            <a href="#"><p key={index} className="text-primary_3 mb-2 hover:text-primary_2 ease-in-out duration-150">{corporateItem}</p></a>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-primary_5 text-base mb-5 font-medium items-start relative">About Us
                            <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-primary_3"></span>
                        </p>
                        <a href="/about-us"><p className="text-primary_3 mb-2 hover:text-primary_2 ease-in-out duration-150">Our People and story</p></a>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Footer;
