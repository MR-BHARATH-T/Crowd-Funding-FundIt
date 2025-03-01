// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const CampaignDetails = () => {
//   const { campaignId } = useParams(); // Get campaign ID from URL
//   const [campaign, setCampaign] = useState(null);

//   useEffect(() => {
//     // Fetch campaign data from an API or local data (here we're assuming local data for the example)
//     const fetchCampaignDetails = async () => {
//       const campaignData = await fetch(`/api/campaigns/${campaignId}`); // Replace with your API endpoint
//       const campaignJson = await campaignData.json();
//       setCampaign(campaignJson);
//     };
    
//     fetchCampaignDetails();
//   }, [campaignId]);

//   if (!campaign) return <p>Loading...</p>;

//   return (
//     <div className="campaign-details">
//       <h1>{campaign.title}</h1>
//       <img src={campaign.imageUrl} alt={campaign.title} />
//       <p>{campaign.description}</p>
//       <div className="campaign-metrics">
//         <p>Goal: ${campaign.goal}</p>
//         <p>Raised: ${campaign.raised}</p>
//         <p>Supporters: {campaign.supportersCount}</p>
//       </div>
//       {/* CTA Buttons */}
//       <div className="cta-buttons">
//         <button className="btn-primary">Support Campaign</button>
//         <button className="btn-secondary">Share</button>
//       </div>
//     </div>
//   );
// };

// export default CampaignDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CampaignDetails.css"; // Import the CSS file

const CampaignDetails = () => {
  const { campaignId } = useParams(); // Get campaign ID from URL
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    // Fetch campaign data from an API or local data
    const fetchCampaignDetails = async () => {
      try {
        const campaignData = await fetch(`/api/campaigns/${campaignId}`); // Replace with your API endpoint
        const campaignJson = await campaignData.json();
        setCampaign(campaignJson);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
      }
    };

    fetchCampaignDetails();
  }, [campaignId]);

  // Calculate progress percentage
  const progress = campaign ? Math.round((campaign.raised / campaign.goal) * 100) : 0;

  // Handle share functionality
  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  if (!campaign) return <p className="loading">Loading...</p>;

  return (
    <div className="campaign-details">
      {/* Campaign Image */}
      <div className="campaign-image-container">
        <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
      </div>

      {/* Campaign Content */}
      <div className="campaign-content">
        <h1 className="campaign-title">{campaign.title}</h1>
        <p className="campaign-description">{campaign.description}</p>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="progress-text">{progress}% funded</span>
        </div>

        {/* Campaign Metrics */}
        <div className="campaign-metrics">
          <div className="metric">
            <span className="metric-label">Goal</span>
            <span className="metric-value">${campaign.goal}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Raised</span>
            <span className="metric-value">${campaign.raised}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Supporters</span>
            <span className="metric-value">{campaign.supportersCount}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-primary">Support Campaign</button>
          <button className="btn-secondary" onClick={handleShare}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;