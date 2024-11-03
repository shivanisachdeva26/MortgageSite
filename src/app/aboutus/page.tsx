// aboutus/page.tsx

import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="aboutus-container">
            {/* Section 1: Our Mission */}
            <section className="mission-section">
                <h1 className='text-green-700 text-3xl font-semibold my-6'>Our mission</h1>
                <p className='font-semibold text-5xl m-6 mx-24'>
                    We’re making homeownership simpler, faster -
                    <br /> and most importantly, more accessible for all Americans.
                </p>
            </section>

            {/* Section 2: The Status Quo is Broken */}
            <section className="status-quo-section flex justify-between">
            <div className='flex flex-col w-1/2 quote '>
                <h2 className='font-medium text-3xl mb-6 mt-0  '>The status quo is broken</h2>
                <p className='mb-3 font-medium text-gray-700 text-lg'>
                    The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
                </p>
                <button className="story-button mt-5">Read Vishal's story</button>
                </div>
                {/* Placeholder for video */}
                <div className="video-placeholder w-1/2">
                    <img src="https://media.better.com/video/vishal-mission.jpg" alt="CEO Video" className='w-full h-full p-10'/>
                </div>
            </section>

            {/* Footer Section */}
            <div className="footer-section flex justify-between">
              <div className='flex flex-col text-left'>
                <p className='font-semibold text-3xl '>Want to continue with your pre-approval?</p>
                <p className='font-medium text-xl mt-2 '>You’ll be able to pick up right where you left off.</p>
                </div>
                <div className="footer-buttons">
                    <button className="not-right-now m-1 mx-2">Not right now</button>
                    <button className="yes-continue m-1 mx-2 ">Yes, continue</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
