import React, { useEffect, useRef, useState } from "react";
import { MdAgriculture, MdCastForEducation, MdAddBusiness, MdCorporateFare } from "react-icons/md";
import { FaShippingFast, FaHandHoldingMedical, FaBriefcaseMedical, FaTripadvisor, FaHandsHelping } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { AiOutlineAudit } from "react-icons/ai";
import { IoReceiptSharp } from "react-icons/io5";
import { SiCommerzbank } from "react-icons/si";
import { MdAddLocationAlt } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import solutionImage from "../../../public/solutions.png"
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import hero_image from "../../../public/hero-image.jpg";

const iconSize = "35px";

const icons = {
    industries: {
        Agribusiness: <MdAgriculture size={iconSize} />,
        Education: <MdCastForEducation size={iconSize} />,
        Franchise: <MdAddBusiness size={iconSize} />,
        "Trade and Customs": <FaShippingFast size={iconSize} />,
        "Not for Profit": <FaHandHoldingMedical size={iconSize} />,
        "Medical and Healthcare": <FaBriefcaseMedical size={iconSize} />,
        Government: <RiGovernmentFill size={iconSize} />,
    },
    solutions: {
        "Accounting": <FaTripadvisor size={iconSize} />,
        "General Insurance": <GoShieldCheck size={iconSize} />,
        "Lending and Finance": <GiReceiveMoney size={iconSize} />,
        Consulting: <TbDeviceDesktopAnalytics size={iconSize} />,
        "External Audit": <AiOutlineAudit size={iconSize} />,
        "Internal Audit": <AiOutlineAudit size={iconSize} />,
        "Tax Advisory": <IoReceiptSharp size={iconSize} />,
        "Corporate Finance": <MdCorporateFare size={iconSize} />,
        "Wealth Management": <TbDeviceDesktopAnalytics size={iconSize} />,
        "SMSF Administration and Advisory": <SiCommerzbank size={iconSize} />,
        "Risk Insurance": <FaHandsHelping size={iconSize} />,
    }
}

const content = {
    Business: {
        industries: [
            "Agribusiness",
            "Education",
            "Franchise",
            "Trade and Customs",
        ],
        solutions: [
            "Accounting",
            "General Insurance",
            "Lending and Finance",
            "Consulting",
        ],
        heading: "Small and Medium Business",
        summary: [
            "At Financestralia, we are dedicated to supporting small and medium-sized businesses across Australia through every stage of their journey, from startup and expansion to sustained growth. Our approach is grounded in providing practical, insightful advice that’s customized to meet each client’s unique needs and market context.",
            " But our services extend far beyond traditional accounting. With Financestralia, you’ll have access to a diverse team of specialists who bring a wealth of expertise from multiple disciplines. Together, we work to help you achieve both your business vision and financial objectives. By combining deep industry knowledge with personalized support, we strive to be a trusted partner in guiding your business to long-term success.",
        ],
    },
    Corporate: {
        industries: [
            "Education",
            "Not for Profit",
            "Medical and Healthcare",
            "Government",
        ],
        solutions: [
            "External Audit",
            "Internal Audit",
            "Tax Advisory",
            "Corporate Finance",
        ],
        heading: "An integrated solution to managing your business",
        summary: [
            "From emerging startups to large-scale multinational expansions, and from auditing to corporate benefits programs, our advisors have the expertise needed to drive your organization’s success. With a strong and strategically positioned presence, Financestralia delivers outstanding financial results through a blend of strong relationships and cutting-edge technology.",
            " We offer a full range of corporate advisory services, including External and Internal Audit, Corporate Finance, Lending and Finance, General Insurance, Consulting, and Tax Advisory.",
        ],
    },
    Individuals: {
        industries: [
            "Education",
            "Agribusiness",
            "Not for Profit",
            "Franchise",
        ],
        solutions: [
            "Wealth Management",
            "Accounting",
            "SMSF Administration and Advisory",
            "Risk Insurance",
        ],
        heading: "Helping you on the path to realising your financial goals",
        summary: [
            "Creating a secure future takes time – it often involves taking a long-term perspective on your desired outcomes and crafting a strategy to reach them. Our advisors are here to assist you in building a long-term plan and investment portfolio that aligns with both your current and future objectives.",
            " We’ll discuss your values, interests, and financial and lifestyle goals for the short, medium, and long-term. By understanding your aspirations, we’ll create a personalized plan to help you achieve them.",
        ],
    },
};

const speciality = ["Select a speciality", "Corporate Finance", "General Finance", "Risk Insurance", "Tax Advisory", "Wealth Management", "Franchise", "Internal Audit", "Consulting", "External Audit", "Accounting", "Digital Consulting", "Managed Payroll", "SMSF Administration and Advisory", "Lending and Finance", "Investment Advice",];

const Home = () => {
    const [category, setCategory] = useState("Business");
    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState("Select Speciality");
    const dropdownRef = useRef(null);
    const [specialityDropDown, setSpecialityDropDown] = useState(false);

    const handleSpecialityDropDown = () => {
        setSpecialityDropDown(!specialityDropDown);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowList(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col bg-primary_1 right-0 left-0">
                <div className="menu flex flex-col h-1/5">
                    <div>
                        <div className="flex flex-col justify-between items-center bg-primary_3">
                            <div className="relative w-full h-96">
                                {/* Background Image */}
                                <img src={hero_image} className="h-full w-full object-cover opacity-80" />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-primary_1/80 to-primary_1/30"></div>

                                {/* Overlay Text */}
                                <div className="absolute inset-0 flex flex-col items-center text-center p-6">
                                    <p className="text-4xl font-bold text-primary_5">Smart Financial Strategies for a Secure Future.</p>
                                    <p className="text-2xl mt-2 max-w-3xl text-primary_3">
                                        We help individuals and businesses build wealth, reduce taxes, and achieve financial freedom with expert advice tailored to your needs.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="h-1/5 flex flex-row space-x-1 justify-center bg-primary_3">
                        {Object.keys(content).map((cat) => (
                            <button key={cat} onClick={() => setCategory(cat)} className={`border active:text-primary_5 active:border-primary_5 ease-in-out duration-150 border-primary_1 sMobile:px-2 sMobile:py-2 tablet:px-5 tablet:py-2 mt-4 text-primary_1 font-medium ${category === cat ? "bg-primary_5 text-primary_3 border-primary_3" : ""}`}>{cat}</button>
                        ))}
                    </div>
                    <div className="flex flex-col py-10 bg-primary_1">
                        <div className="hidden tablet:flex flex-row mx-[250px] tablet:mx-[100px] laptop:mx-[150px] lLaptop:mx-[250px] monitor:mx-[600px]">
                            <div className="flex w-1/3 flex-col justify-center border border-white items-center py-3">
                                <p className="text-primary_3 font-medium mb-6 mt-2">Find an advisor near you.</p>
                                <input className="bg-white h-10 border-2 border-primary_4 focus:border-primary_5 tablet:w-40 laptop:w-56 text-center text-primary_1 outline-none" placeholder="Postcode"></input>
                                <p className="text-primary_3 font-medium my-3">OR</p>
                                <div className="relative" ref={dropdownRef}>
                                    <div
                                        className="flex items-center justify-between bg-white h-auto border-2 border-primary_4 tablet:w-40 laptop:w-56 text-center text-primary_1 outline-none py-2 px-3 cursor-pointer"
                                        onClick={() => setShowList(!showList)}
                                    >
                                        <span>{selected}</span>
                                        {showList ? <FaArrowUp /> : <FaArrowDown />}
                                    </div>
                                    {showList && (
                                        <ul
                                            className="absolute bg-white border border-primary_4 tablet:w-40 laptop:w-56 mt-1 z-10 overflow-y-auto max-h-96"
                                            onClick={handleSpecialityDropDown}
                                        >
                                            {speciality.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="py-2 px-4 hover:bg-primary_5 hover:text-white cursor-pointer"
                                                    onClick={() => { setShowList(false); setSelected(item) }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <button className="border-2 mt-28 py-2 px-5 text-primary_3 font-medium bg-primary_2 active:bg-primary_4 active:text-primary_5 active:border-primary_5 ease-in-out duration-150">Find</button>
                            </div>
                            <div className="flex w-1/3 border-t text-primary_1 border-r border-b border-primary_3 border-r-primary_4 bg-primary_3 flex-col py-3">
                                <p className="font-bold text-lg mb-8 self-center">Our specialist industries</p>
                                <ul className="font-medium space-y-3 ml-4">
                                    {content[category].industries.map((industry, index) => (
                                        <li key={index} className="flex space-x-5">
                                            {icons.industries[industry]}
                                            <span>{industry}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-1/3 border-t text-primary_1 border-r border-b border-primary_3 bg-primary_3 flex-col py-3">
                                <p className="font-bold text-lg mb-8 self-center">Solutions for you</p>
                                <ul className="font-medium space-y-3 ml-4">
                                    {content[category].solutions.map((solution, index) => (
                                        <li key={index} className="flex  space-x-5">
                                            {icons.solutions[solution]}
                                            <span>{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="tablet:hidden flex flex-col m-2">
                            <div className="flex flex-col justify-center items-center py-3 border border-primary_3">
                                <p className="text-primary_3 font-medium mb-6 mt-2">Find an advisor near you.</p>
                                <input className="bg-white h-10 border-2 border-primary_4 focus:border-primary_5 text-center text-primary_1 outline-none" placeholder="Postcode"></input>
                                <p className="text-primary_3 font-medium my-3">OR</p>
                                <div className="relative" ref={dropdownRef}>
                                    <div
                                        className="flex items-center justify-between bg-white h-auto border-2 border-primary_4 text-center text-primary_1 outline-none py-2 px-3 cursor-pointer"
                                        onClick={() => setShowList(!showList)}
                                    >
                                        <span>{selected}</span>
                                        {showList ? <FaArrowUp /> : <FaArrowDown />}
                                    </div>
                                    {showList && (
                                        <ul
                                            className="absolute bg-white border border-primary_4 mt-1 z-10 overflow-y-auto max-h-96"
                                            onClick={handleSpecialityDropDown}
                                        >
                                            {speciality.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="py-2 px-4 hover:bg-primary_5 hover:text-white cursor-pointer"
                                                    onClick={() => { setShowList(false); setSelected(item) }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <button className="border-2 mt-10 py-2 px-5 text-primary_3 font-medium bg-primary_2 active:bg-primary_4 active:text-primary_5 active:border-primary_5 ease-in-out duration-150">Find</button>
                            </div>
                            <div className="flex border-t text-primary_1 border-b border-b-primary_1 bg-primary_3 flex-col py-3">
                                <p className="font-bold text-lg mb-8 self-center">Our specialist industries</p>
                                <ul className="font-medium space-y-3 ml-4">
                                    {content[category].industries.map((industry, index) => (
                                        <li key={index} className="flex space-x-5">
                                            {icons.industries[industry]}
                                            <span>{industry}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex border-t text-primary_1 bg-primary_3 flex-col py-3">
                                <p className="font-bold text-lg mb-8 self-center">Solutions for you</p>
                                <ul className="font-medium space-y-3 ml-4">
                                    {content[category].solutions.map((solution, index) => (
                                        <li key={index} className="flex  space-x-5">
                                            {icons.solutions[solution]}
                                            <span>{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden tablet:flex bg-white mt-10">
                    <div className="hidden tablet:flex tablet:mx-[100px] laptop:mx-[150px] lLaptop:mx-[250px] monitor:mx-[600px] flex-col mt-10">
                        <p className="font-medium text-2xl self-center my-3 text-primary_1 relative">
                            {content[category].heading}
                            <span className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-primary_5"></span>
                        </p>
                        {content[category].summary.map((summaryItem, index) => (
                            <p key={index} className="mb-3 font-normal text-base text-primary_1 ">{summaryItem}</p>
                        ))}
                    </div>
                </div>

                <div className="tablet:hidden flex bg-white mt-10">
                    <div className="hidden sMobile:flex flex-col mt-10 p-3">
                        <p className="font-medium text-xl self-center my-3 text-primary_1 relative">
                            {content[category].heading}
                            <span className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-primary_5"></span>
                        </p>
                        {content[category].summary.map((summaryItem, index) => (
                            <p key={index} className="mb-3 font-normal text-base text-primary_1 ">{summaryItem}</p>
                        ))}
                    </div>
                </div>

                <div className="bg-white">
                    <div className="hidden tablet:flex tablet:mx-[100px] laptop:mx-[150px] lLaptop:mx-[250px] monitor:mx-[600px] mt-10  flex-col">
                        <p className="font-medium text-2xl self-center my-3 text-primary_1 relative">
                            About Us
                            <span className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-primary_5"></span>
                        </p>
                        <div className="flex flex-row space-x-4 text-primary_1">
                            <div className="flex flex-col w-1/3 p-2">
                                <div className="flex items-center mb-2 space-x-2">
                                    <MdAddLocationAlt size={32} />
                                    <p className="text-lg font-medium">A Large Geographical Presence</p>
                                </div>
                                <p>We are strategically located across Australia and New Zealand, with over 110 offices, ensuring convenient access to competitive solutions near you.</p>
                            </div>
                            <div className="flex flex-col w-1/3 p-2">
                                <div className="flex items-center mb-2 space-x-2">
                                    <AiOutlineDeliveredProcedure size={32} />
                                    <p className="text-lg font-medium">A 'One Best Way' Approach</p>
                                </div>
                                <p> Our forward-thinking approach empowers you to address today’s challenges while proactively preparing for the opportunities and hurdles of tomorrow.</p>
                            </div>
                            <div className="flex flex-col w-1/3 p-2">
                                <div className="flex items-center mb-2 space-x-2">
                                    <img src={solutionImage} className="size-10"></img>
                                    <p className="text-lg font-medium">Our Family Office Approach</p>
                                </div>
                                <p>We assign a dedicated point of contact to manage your needs, collaborating with experts within our team to deliver personalized, tailor-made solutions just for you.</p>
                            </div>
                        </div>
                    </div>

                    <div className="tablet:hidden sMobile:flex mt-10 flex-col p-3">
                        <p className="font-medium text-2xl self-center my-3 text-primary_1 relative">
                            About Us
                            <span className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-primary_5"></span>
                        </p>
                        <div className="flex relative flex-col justify-center text-primary_1 space-y-5">
                            <div className="flex flex-col">
                                <div className="flex items-center mb-2 space-x-2">
                                    <MdAddLocationAlt size={32} />
                                    <p className="text-lg font-medium">A Large Geographical Presence</p>
                                </div>
                                <p>We are strategically located across Australia and New Zealand, with over 110 offices, ensuring convenient access to competitive solutions near you.</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center mb-2 space-x-2">
                                    <AiOutlineDeliveredProcedure size={32} />
                                    <p className="text-lg font-medium">A 'One Best Way' Approach</p>
                                </div>
                                <p> Our forward-thinking approach empowers you to address today’s challenges while proactively preparing for the opportunities and hurdles of tomorrow.</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center mb-2 space-x-2">
                                    <img src={solutionImage} className="size-10"></img>
                                    <p className="text-lg font-medium">Our Family Office Approach</p>
                                </div>
                                <p>We assign a dedicated point of contact to manage your needs, collaborating with experts within our team to deliver personalized, tailor-made solutions just for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

};

export default Home;
