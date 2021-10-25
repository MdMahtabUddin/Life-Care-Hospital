import React from 'react';
import './AboutUs.css';
import circleImg from '../../images/banner-image/circle-about-us.png';
import womenAboutUsImg from '../../images/women-about-us.jpg';
import mentalHealthImg from '../../images/mental-health.jpg';


const AboutUs = () => {



    return (
        <div className="container-fluid p-0">
            
            <div className="container">
                
                <div className="mt-5">
                    <p>Welcome to Life & Care Hospital </p>
                    <h2 className="custom-green-color fw-bold">Why Choose Us</h2>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <small className="text-secondary">
                                <p>
                                    LifeSpring has been founded with the vision to be the nation’s leading community-based mental health institute dedicated to promoting mental health as a pivotal of overall wellness.
                                </p>
                                <p>
                                    Through advocacy, education, research, and assistance services we dream of a change as a beacon of hope for society.
                                </p>
                                <p>
                                    Believing in the social integration of mental health services and a gender-inclusive approach – our programs and strategies are committed to promote mental health awareness, to remove the social stigmas, and to ensure the accessibility of mental health services whenever and wherever needed.
                                </p>
                                <p>
                                    LifeSpring is committed to flourishing the overall mental health perspectives in Bangladesh. We hope and pursue to continue this journey witnessing the creation of thousands of beautiful narratives by healing hearts and transforming lives.
                                </p>

                                <div>
                                    <h4 className="custom-green-color">Mission</h4>
                                    <p>
                                        Our programs and initiatives fulfill our mission of promoting mental health, preventing mental disorders, and achieving victory over mental illness through advocacy, education, research, and services.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="custom-green-color">Vision</h4>
                                    <p>
                                        Team LifeSpring hopes and pursues to continue its journey, witnessing the creation of thousands of beautiful narratives by healing hearts and transforming the lives of individuals of the nation.
                                    </p>
                                </div>

                            </small>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid w-100" src={womenAboutUsImg} alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <img className="img-fluid w-100" src={mentalHealthImg} alt="" />
                </div>




            </div>
        </div>
    );
};

export default AboutUs;