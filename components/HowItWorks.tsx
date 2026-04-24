import React from 'react';
import { FaMousePointer, FaLightbulb, FaRocket, FaRedo } from 'react-icons/fa';
import '../css/howItWorks.css';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: <FaMousePointer />,
            title: 'Click the Button',
            description: 'Choose a category or go random to get started.'
        },
        {
            icon: <FaLightbulb />,
            title: 'Get a Unique Idea',
            description: 'Receive a personalized life-improving suggestion.'
        },
        {
            icon: <FaRocket />,
            title: 'Take Action',
            description: 'Follow the steps to implement the idea.'
        },
        {
            icon: <FaRedo />,
            title: 'Repeat Daily',
            description: 'Come back each day for new inspiration.'
        }
    ];

    return (
        <section className="how-it-works">
            <h2 className="how-it-works-title">How It Works</h2>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <div className="step-icon">{step.icon}</div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;