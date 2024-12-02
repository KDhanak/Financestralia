import React from "react";

const Home = () => {

    return (
        <>
            <div className="flex flex-col bg-primary_1">
                <div className="menu flex flex-col h-1/5">
                    <div className="h-1/5 flex flex-row space-x-1 justify-center bg-primary_3">
                        <button className="border border-primary_1 px-5 py-2 mt-4 text-primary_1 font-medium">Business</button>
                        <button className="border border-primary_1 px-5 py-2 mt-4 text-primary_1 font-medium">Corporate</button>
                        <button className="border border-primary_1 px-5 py-2 mt-4 text-primary_1 font-medium">Individuals</button>
                    </div>
                    <div className="flex flex-col py-10 bg-primary_1">
                        <div className="mx-[500px] flex flex-row">
                            <div className="flex w-1/3 flex-col justify-center border border-white items-center py-3">
                                <p className="text-primary_3 font-medium mb-6 mt-2">Find an advisor near you.</p>
                                <input className="bg-white h-8 border-2 border-primary_4 focus:border-primary_5 max-w-40 text-center text-primary_1 outline-none" placeholder="Postcode"></input>
                                <p className="text-primary_3 font-medium my-3">OR</p>
                                <input className="bg-white h-8 border-2 border-primary_4 focus:border-primary_5 max-w-40 text-center text-primary_1 outline-none" placeholder="Select Speciality"></input>
                                <button className="border-2 mt-36 py-2 px-5 text-primary_3 font-medium bg-primary_2 active:bg-primary_4 active:text-primary_5 active:border-primary_5 ease-in-out duration-150">Find</button>
                            </div>
                            <div className="flex w-1/3 border-t text-primary_1 border-r border-b border-primary_3 border-r-primary_4 bg-primary_3 flex-col py-3">
                                <p className="font-bold text-lg mb-8 self-center">Our specailist industries</p>
                                <ul className="font-medium space-y-3 ml-4">
                                    <li>Agribusiness</li>
                                    <li>Education</li>
                                    <li>Franchising</li>
                                    <li>Trade and Customs</li>
                                </ul>
                            </div>
                            <div className="flex w-1/3 border-t text-primary_1 border-r border-b border-primary_3 bg-primary_3 flex-col py-3">
                                <p className="font-bold text-lg mb-8 self-center">Solutions for you</p>
                                <ul className="font-medium space-y-3 ml-4">
                                    <li>Accounting and Business Advisory</li>
                                    <li>General Insurance</li>
                                    <li>Lending and Finance</li>
                                    <li>Consulting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Home;
