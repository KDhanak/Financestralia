import React, { useRef, useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const Dropdown = ({ selected, setSelected, options }) => {
    const dropdownRef = useRef(null);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowList(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                className="flex items-center justify-between bg-white h-auto border-2 border-primary_4 tablet:w-40 laptop:w-56 text-center text-primary_1 outline-none py-2 px-3 cursor-pointer"
                onClick={() => setShowList(!showList)}
            >
                <span>{selected}</span>
                {showList ? <FaArrowUp /> : <FaArrowDown />}
            </div>
            {showList && (
                <ul className="absolute bg-white border border-primary_4 w-56 mt-1 z-10 overflow-y-auto max-h-96">
                    {options.map((item, index) => (
                        <li
                            key={index}
                            className="py-2 px-4 hover:bg-primary_5 hover:text-white cursor-pointer"
                            onClick={() => {
                                setSelected(item);
                                setShowList(false);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
