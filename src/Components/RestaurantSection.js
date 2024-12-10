import React from "react";
import './RestaurantSectionStyles.css';

const RestaurantSection = () => {
    return (
        <div className="RestaurantSection">
            <h1 className="food-title">Foods</h1>
            <hr className="horizontal-line" />
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search Restaurants"
                    />
                    <button className="search-btn">
                        Search
                    </button>
                </div>
                <div className="top-rated">
                <button className="filter-btn">
                    Top Rated
                </button>
                </div>
                
            </div>
            <div className="restaurant-container">
                {/* Add restaurant data here */}
            </div>
        </div>
    );
};

export default RestaurantSection;
