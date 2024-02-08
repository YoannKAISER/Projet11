import React from "react";


function FeatureItem({ img, h3, p }) {
    return (
        <div className="feature-item">
            <img src={img} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{h3}</h3>
            <p>{p}</p>
        </div>
    );
};

export default FeatureItem;