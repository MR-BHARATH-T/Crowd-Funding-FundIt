// // <Link to={`/campaign-details/${id}`}></Link> in link this statement to be present for each user

// import React from "react";
// import { Link } from "react-router-dom";  // Import Link for navigation
// import "./CampaignCard.css";

// const CampaignCard = ({ id, image, title, description, progress, raised, goal }) => {
//   return (
//     <div className="campaign-card">
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <div className="progress-bar">
//         <div className="progress" style={{ width: `${progress}%` }}></div>
//       </div>
//       <p className="funding-stats">Raised: ${raised} / ${goal}</p>
//       <Link to={`/campaign-details`}>
//         <button className="btn-primary">View Details</button>
//       </Link>
//     </div>
//   );
// };

// export default CampaignCard;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CampaignCard.css";

const CampaignCard = ({ id, image, title, description, progress, raised, goal }) => {
  const [expanded, setExpanded] = useState(false);

  // Dynamic progress bar color based on percentage
  const getProgressColor = (progress) => {
    if (progress < 30) return "#e74c3c";  // Red for low funding
    if (progress < 70) return "#f1c40f";  // Yellow for medium funding
    return "#2ecc71";  // Green for high funding
  };

  return (
    <div className="campaign-card">
      {/* Campaign Image */}
      <div className="campaign-image-container">
        <img src={image} alt={title} className="campaign-image" />
      </div>

      {/* Campaign Content */}
      <div className="campaign-content">
        <h3 className="campaign-title">{title}</h3>

        {/* Truncated Description */}
        <p className="campaign-description">
          {expanded ? description : `${description.substring(0, 100)}... `}
          <span className="read-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Read More"}
          </span>
        </p>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%`, backgroundColor: getProgressColor(progress) }}
            ></div>
          </div>
          <span className="progress-text">{progress}% funded</span>
        </div>

        {/* Funding Stats */}
        <div className="funding-stats">
          <p>Raised: <span className="raised-amount">${raised}</span></p>
          <p>Goal: <span className="goal-amount">${goal}</span></p>
        </div>

        {/* View Details Button */}
        <Link to={`/campaign-details/${id}`} className="view-details-link">
          <button className="btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;
