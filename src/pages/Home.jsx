import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Section 1: Image on left, text on right */}
            <div className="section">
                <div className="image-section">
                    <img src="your-image-url-1.jpg" alt="Description 1" className="home-image" />
                </div>
                <div className="text-section">
                    <h1 className="home-title">Welcome to CareerPilot</h1>
                    <p className="home-text">
                        This is a sample homepage created using React. On this side, you can add some
                        descriptive text about your website or application. You can talk about the features,
                        services, or any important information you want to highlight to the visitors.
                    </p>
                </div>
            </div>

            {/* Section 2: Text on left, image on right */}
            <div className="section reverse">
                <div className="text-section">
                    <h1 className="home-title">Discover Our Features</h1>
                    <p className="home-text">
                        We offer a variety of features to help you navigate your career path. From personalized
                        roadmaps to AI-driven recommendations, our platform is designed to support your
                        professional growth.
                    </p>
                </div>
                <div className="image-section">
                    <img src="your-image-url-2.jpg" alt="Description 2" className="home-image" />
                </div>
            </div>

            {/* Section 3: Image on left, text on right */}
            <div className="section">
                <div className="image-section">
                    <img src="your-image-url-3.jpg" alt="Description 3" className="home-image" />
                </div>
                <div className="text-section">
                    <h1 className="home-title">Join Our Community</h1>
                    <p className="home-text">
                        Become a part of our community and start collaborating with other professionals. Share
                        your progress, exchange insights, and grow together.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;