import React, { useState } from 'react';
import './NewsBar.css'; // Ensure your styles are imported
import { NewsData } from './NewsData'; // Import the news data

const News = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState('next'); // track animation direction

    const handleNext = () => {
        if (!isAnimating) {
            setDirection('next');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % NewsData.length);
                setIsAnimating(false);
            }, 500); // Adjust this timing with CSS animation duration
        }
    };

    const handlePrevious = () => {
        if (!isAnimating) {
            setDirection('prev');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? NewsData.length - 1 : prevIndex - 1
                );
                setIsAnimating(false);
            }, 500); // Match this with CSS animation duration
        }
    };

    return (
        <div className="news-container">
            <div className={`news-bar ${isAnimating ? 'animating' : ''} ${direction}`}>
                <img
                    src={NewsData[currentIndex].img}
                    alt={NewsData[currentIndex].title}
                    className="news-image"
                />
                <div className="news-text">
                    <h1>{NewsData[currentIndex].text}</h1>
                    <button className="see-more">SEE MORE</button>
                </div>

                {/* Arrow navigation buttons */}
                <button className="arrow-left" onClick={handlePrevious}>
                    &#10094;
                </button>
                <button className="arrow-right" onClick={handleNext}>
                    &#10095;
                </button>
            </div>

            {/* Dots for navigation */}
            <div className="dots-container">
                {NewsData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default News;
