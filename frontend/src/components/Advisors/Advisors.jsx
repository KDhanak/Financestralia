import React, { useRef, useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import profileImage1 from '../../../public/profile_placeholder_1.jpg';
import profileImage2 from '../../../public/profile_placeholder_2.jpg';
import { useAdvisor } from "../../contexts/advisorContext";
import Loading from "../Loading/Loading";

const speciality = ["Select a speciality", "Corporate Finance", "General Finance", "Risk Insurance", "Tax Advisory", "Wealth Management", "Franchising", "Internal Audit", "Consulting", "External Audit", "Accounting", "Digital Consulting", "SMSF Administration and Advisory", "Lending and Finance", "Investment Advice",];

const Advisors = () => {
    const dropdownRef = useRef(null);
    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState("Select a speciality");
    const [specialityDropDown, setSpecialityDropDown] = useState(false);
    const [name, setName] = useState("");
    const [postcode, setPostcode] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const { advisor, loading, error } = useAdvisor();

    useEffect(() => {
        setFilteredData(advisor);
    }, [advisor]);

    const handleSpecialityDropDown = () => {
        setSpecialityDropDown(!specialityDropDown);
    }

    const handleReset = () => {
        setName("");
        setPostcode("");
        setSelected("Select a specialiity");
        setFilteredData(data);
    }

    const filterData = (e) => {
        e.preventDefault();
        const filtered = data.filter((advisor) => {
            // Check for each condition
            const matchesName = name
                ? advisor.name.toLowerCase().includes(name.toLowerCase())
                : false;
            const matchesPostcode = postcode
                ? advisor.office.includes(postcode)
                : false;
            const matchesSpeciality =
                selected !== "Select a speciality"
                    ? advisor.speciality === selected
                    : false;

            // Include advisor if any condition matches
            return matchesName || matchesPostcode || matchesSpeciality;
        });

        // If all inputs are empty, show all advisors
        setFilteredData(filtered.length > 0 || name || postcode || selected !== "Select a speciality" ? filtered : data);
    };

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

    if (loading) return <Loading />;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Helmet>
                <title>Our Team</title>
            </Helmet>

            <div className="flex flex-col">
                <p className="font-medium text-2xl self-center my-3 text-primary_1 relative">
                    Find an Advisor
                    <span className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-primary_5"></span>
                </p>
                <div>
                    <form className="hidden tablet:flex flex-row justify-center border border-white items-center space-x-5 py-3" onSubmit={(e) => filterData(e)}>
                        <input className="bg-primary_4 h-10 border-2 border-primary_4 focus:border-primary_5 placeholder:text-primary_3 tablet:w-40 laptop:w-56 text-center text-primary_3 outline-none" placeholder="Advisor Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        <p className="text-primary_1 font-medium my-3">OR</p>
                        <input className="bg-white h-10 border-2 border-primary_4 focus:border-primary_5 tablet:w-40 laptop:w-56 text-center text-primary_1 outline-none" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)}></input>
                        <p className="text-primary_1 font-medium my-3">OR</p>
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
                                    className="absolute bg-white border border-primary_4 w-56 mt-1 z-10 overflow-y-auto max-h-96"
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
                        <button className="border-2 border-primary_1 py-2 px-5 text-primary_3 font-medium bg-primary_2 active:bg-primary_4 active:text-primary_5 active:border-primary_5 ease-in-out duration-150">Find</button>
                    </form>

                    <form className="flex tablet:hidden flex-col justify-center border border-white items-center" onSubmit={(e) => filterData(e)}>
                        <input className="bg-primary_4 h-10 border-2 border-primary_4 focus:border-primary_5 placeholder:text-primary_3 tablet:w-40 laptop:w-56 text-center text-primary_3 outline-none" placeholder="Advisor Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        <p className="text-primary_1 font-medium my-1">OR</p>
                        <input className="bg-white h-10 border-2 border-primary_4 focus:border-primary_5 tablet:w-40 laptop:w-56 text-center text-primary_1 outline-none" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)}></input>
                        <p className="text-primary_1 font-medium my-1">OR</p>
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
                                    className="absolute bg-white border border-primary_4 w-56 mt-1 z-10 overflow-y-auto max-h-96"
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
                        <button className="mt-3 border-2 border-primary_1 py-1 px-3 text-primary_3 font-medium bg-primary_2 active:bg-primary_4 active:text-primary_5 active:border-primary_5 ease-in-out duration-150">Find</button>
                    </form>
                </div>
                <p onClick={handleReset} className="my-2 self-center text-lg hover:underline text-primary_5 cursor-pointer">Reset Filters</p>
            </div >
            <div className="flex flex-col">
                <div className="hidden tablet:flex flex-col tablet:mx-[50px] laptop:mx-[100px] lLaptop:mx-[300px] monitor:mx-[500px] 4K:mx-[750px] space-y-5">
                    {filteredData.map((dataItem, index) => (
                        <div key={index} className="flex bg-primary_3">
                            <div className="w-1/5">
                                <img className="size-48 p-5" src={(dataItem.gender === "M") ? profileImage1 : profileImage2} />
                            </div>
                            <div className="w-2/5 mt-5">
                                <p className="text-primary_1 font-medium">{dataItem.first_name} {dataItem.last_name}</p>
                                <p className="text-primary_4 font-normal text-sm">{dataItem.role}</p>
                                <p className="text-primary_1 font-medium mt-14">My Speciality</p>
                                <p className="text-primary_5 text-base mb-5 font-normal items-start relative">{dataItem.speciality}
                                    <span className="absolute -bottom-1 left-0 w-14 h-[1px] bg-primary_2"></span>
                                </p>

                            </div>
                            <div className="w-2/5 mt-5">
                                <div>
                                    <p className="text-primary_1 font-medium">Email</p>
                                    <p className="text-primary_1 font-normal">{dataItem.email}</p>
                                </div>
                                <div className="mt-10">
                                    <p className="text-primary_1 font-medium">Office</p>
                                    <p className="text-primary_1 font-normal">{dataItem.office}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="tablet:hidden flex flex-col space-y-5">
                    {filteredData.map((dataItem, index) => (
                        <div key={index} className="flex flex-col bg-primary_3">
                            <div className="flex">
                                <div className="w-4/12 h-1/2">
                                    <img className="size-24 p-2" src={(dataItem.gender === "M") ? profileImage1 : profileImage2} />
                                    <p className="text-primary_1 px-2 py-1 font-medium text-sm">{dataItem.first_name} {dataItem.last_name}</p>
                                    <p className="text-primary_4 px-2 -mt-1 font-normal text-xs">{dataItem.role}</p>
                                </div>
                                <div className="w-5/12 mt-5">
                                    <p className="text-primary_1 font-medium text-sm">My Speciality</p>
                                    <p className="text-primary_5 text-xs mb-5 font-normal items-start relative">{dataItem.speciality}
                                        <span className="absolute -bottom-1 left-0 w-14 h-[1px] bg-primary_2"></span>
                                    </p>
                                </div>
                                <div className="mt-5 w-3/12">
                                    <p className="text-primary_1 font-medium text-sm">Office</p>
                                    <p className="text-primary_1 font-normal text-xs">{dataItem.office}</p>
                                </div>
                            </div>
                            <div className="mb-1 p-2">
                                <p className="text-primary_1 font-medium text-sm">Email</p>
                                <p className="text-primary_1 font-normal text-xs -mt-1">{dataItem.email}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>

    )

};

export default Advisors;
