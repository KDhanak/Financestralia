import React from "react";
import { Helmet } from "react-helmet";
import hero_image from "../../../public/speaker-photos-1-1130x650.jpg";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className="bg-white">
                <div className="bg-primary_3">
                    <img src={hero_image} className="h-96 w-full object-cover"></img>
                </div>
                <div className="h-3/5 mx-[450px] bg-primary_4 text-primary_3 p-5 z-50 -mt-28 relative shadow-lg">
                    <p className="text-lg font-bold text-primary_5">Meeting Your Needs Through Collaboration</p>
                    <p className="mb-5">At Financestralia, our mission is to address the needs of businesses and the individuals driving them through a collaborative approach to financial services. With a commitment to offering integrated solutions, we provide the confidence that comes from knowing your financial and lifestyle goals are in capable hands.</p>

                    <p className="text-lg font-bold text-primary_5">Your Journey, Our Focus</p>
                    <p className="mb-5">Every individual and business has a unique story. At Financestralia, we take the time to understand your purpose—the reason you strive every day. By grasping your story, we guide you through today’s challenges while preparing you for tomorrow’s opportunities.</p>

                    <p className="text-lg font-bold text-primary_5">Our Expertise</p>
                    <p className="mb-2">We deliver bespoke, integrated solutions designed to evolve with the needs of individuals, businesses, government organizations, and institutions. For over three decades, Financestralia has been dedicated to offering a holistic service to help clients achieve their financial and lifestyle aspirations, all in one place.</p>
                    <p className="mb-2"> As one of Australasia’s premier advisory firms, we are proud of our personalized, high-touch approach to helping clients reach their goals—whether financial, professional, or personal. With 110+ locations across Australia and New Zealand, Financestralia provides a single point of contact to manage your financial needs while collaborating with experts within our firm and the broader marketplace.</p>
                    <p className="mb-5"> Our scale enables us to deliver competitive solutions from convenient locations, address both local and global issues, and support the communities we serve.</p>

                    <p className="text-lg font-bold text-primary_5">Investing in Local Communities</p>
                    <p className="mb-5">Since 2017, we have contributed over $3.15 million to community initiatives focused on health and wellbeing, education, and resilience through the Financestralia Community Fund. We also support innovation in regional entrepreneurship through programs like the SproutX Accelerator for agtech start-ups—an Australian-first initiative that addresses tomorrow’s challenges today.</p>

                    <p className="text-lg font-bold text-primary_5">Growing With Australasia</p>
                    <p className="mb-2">With a workforce of over 2,500 professionals, 250,000+ clients, and more than $28 billion in funds under management, Financestralia is a trusted partner for a wide range of industries.</p>
                    <p className="mb-2">Our equity-based partnership model reflects our commitment, with 95% of our leadership owning stakes in the business across Australia and New Zealand. Our team excels in business advisory, wealth management, auditing, performance consulting, and taxation. We proudly hold the position as Australia’s 6th largest accounting provider.</p>
                    <p className="mb-2"> Serving industries such as agribusiness, education, not-for-profits, government, SMEs, and individuals, Financestralia is dedicated to fostering success and growth across the region. </p>
                </div>
            </div>
        </>
    )
};

export default About;
