import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import BodyImg from '../../images/bodyImg.png';
import './BodyStyles.css';

const Body = () => {
    return (
        <div className="body">
            <div className="text-container">
                <TypeAnimation
                    className="animation-content"
                    sequence={[
                        'CJFoods are DELICIOUS',
                        1500,
                        'CJFoods are FAST',
                        1500,
                        'CJFoods are AFFORDABLE',
                        1500,
                    ]}
                    wrapper="span"
                    speed={70}
                    repeat={Infinity}
                />
                <p className="body-para">
                    Your one-stop destination for a culinary adventure! Order now and
                    indulge in a world of flavors, delivered right to your doorstep.
                </p>
                <div className="btn">
                    <button className="body-button" role="button">
                        Order Now
                    </button>
                </div>
            </div>
            <div className="body-img-container">
                <img className="body-img" src={BodyImg} alt="CJFoods Image" />
            </div>
        </div>
    );
};

export default Body;
