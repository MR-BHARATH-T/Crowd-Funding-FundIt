// // CampaignsPage.js
// import React from "react";
// import "./Campaigns.css";
// import { Link } from "react-router-dom";
// const Campaigns = () => {
//   return (
//     <div className="campaigns-page">
//       {/* Header Section */}
//       <header className="campaigns-header">
//         <h1>Explore Campaigns</h1>
//         <p>Browse and support campaigns that inspire you.</p>
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search for campaigns..."
//         />
//       </header>

//       {/* Filters and Sorting Section */}
//       <section className="filters-section">
//         <div className="filters">
//           <button>All Categories</button>
//           <button>Education</button>
//           <button>Health</button>
//           <button>Environment</button>
//           <button>Technology</button>
//         </div>
//         <div className="sorting">
//           <label htmlFor="sort">Sort By:</label>
//           <select id="sort">
//             <option>Most Funded</option>
//             <option>Newly Launched</option>
//             <option>Ending Soon</option>
//             <option>Popular Campaigns</option>
//           </select>
//         </div>
//       </section>

//       {/* Campaign Listing Section */}
//       <section className="campaign-listing">
//         <h2>All Campaigns</h2>
//         <div className="campaign-grid">
//           {[...Array(8)].map((_, index) => (
//             <div className="campaign-card" key={index}>
//               <img
//                 src={`https://via.placeholder.com/300x200?text=Campaign+${index + 1}`}
//                 alt="Campaign Thumbnail"
//               />
//               <h3>Campaign Title {index + 1}</h3>
//               <p>
//                 This is a short description of Campaign {index + 1}. Support and
//                 make a difference!
//               </p>
//               <div className="progress-bar">
//                 <div
//                   className="progress"
//                   style={{ width: `${Math.random() * 100}%` }}
//                 ></div>
//               </div>
//               <p className="funding-stats">Raised: $5,000 / $10,000</p>
//               <Link to='campaign-details'>
//               <button className="btn-primary">View Details</button></Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Campaigns Section */}
//       <section className="featured-campaigns">
//         <h2>Featured Campaigns</h2>
//         <div className="campaign-grid">
//           {[...Array(3)].map((_, index) => (
//             <div className="campaign-card" key={index}>
//               <img
//                 src={`https://via.placeholder.com/300x200?text=Featured+${index + 1}`}
//                 alt="Featured Campaign Thumbnail"
//               />
//               <h3>Featured Campaign {index + 1}</h3>
//               <p>
//                 This is a short description of Featured Campaign {index + 1}.
//                 Support now!
//               </p>
//               <button className="btn-secondary">View Details</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section className="call-to-action">
//         <h2>Have a Great Idea?</h2>
//         <p>Start your own campaign and bring your idea to life!</p>
//         <button className="btn-primary">Start Campaign</button>
//       </section>

//       {/* Footer Section */}
//       <footer className="campaigns-footer">
//         <div className="footer-links">
//           <a href="#">Help</a>
//           <a href="#">Support</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms of Use</a>
//         </div>
//         <p>&copy; 2025 FundIt Inc. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Campaigns;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Campaigns.css";

const Campaigns = () => {
  // State for search, filters, sorting, and modal
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Most Funded");
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // Dummy data for campaigns
  const campaignsData = [
    {
      id: 1,
      title: "Help Build a School",
      description: "Support education for underprivileged children.",
      image: "https://images.squarespace-cdn.com/content/v1/5b1fd9c1365f02cd5fa53f1f/1702319074539-TZT34S1M73PWVWPJT7LZ/PMSK2424.jpeg?format=1000w",
      category: "Education",
      raised: 6500,
      goal: 10000,
      supporters: 120,
    },
    {
      id: 2,
      title: "Clean Water for Villages",
      description: "Provide clean drinking water to rural areas.",
      image: "https://nepalnews.com/wp-content/uploads/2024/10/water_issue_1280x720_15743372941693734042.jpg",
      category: "Environment",
      raised: 4000,
      goal: 10000,
      supporters: 80,
    },
    {
      id: 3,
      title: "Tech for Kids",
      description: "Provide laptops and tablets for underprivileged students.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEY2rJw_eLbsCz2-R1slZARGpQd-STtDvqA&s",
      category: "Technology",
      raised: 3000,
      goal: 5000,
      supporters: 50,
    },
    {
      id: 4,
      title: "Health for All",
      description: "Provide medical supplies to underserved communities.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHliA4b-FtGWyTiiLGBOH3wnxGvShX9IzL0A&s",
      category: "Health",
      raised: 2000,
      goal: 8000,
      supporters: 30,
    },
  ];

  // Categories
  const categories = ["All Categories", "Education", "Health", "Environment", "Technology"];

  // Filter and sort campaigns
  const filteredCampaigns = campaignsData
    .filter((campaign) =>
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All Categories" || campaign.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortBy === "Most Funded") return b.raised - a.raised;
      if (sortBy === "Newly Launched") return b.id - a.id;
      if (sortBy === "Ending Soon") return a.goal - a.raised - (b.goal - b.raised);
      if (sortBy === "Popular Campaigns") return b.supporters - a.supporters;
      return 0;
    });

  // Open modal
  const openModal = (campaign) => setSelectedCampaign(campaign);

  // Close modal
  const closeModal = () => setSelectedCampaign(null);

  return (
    <div className="campaigns-page">
      {/* Header */}
      <header className="campaigns-header">
        <h1>Explore Campaigns</h1>
        <p>Browse and support campaigns that inspire you.</p>
        <input
          type="text"
          className="search-bar"
          placeholder="Search campaigns..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      {/* Filters & Sorting */}
      <section className="filters-section">
        <div className="filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="sorting">
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Most Funded</option>
            <option>Newly Launched</option>
            <option>Ending Soon</option>
            <option>Popular Campaigns</option>
          </select>
        </div>
      </section>

      {/* Campaign Listing */}
      <section className="campaign-listing">
        <h2>All Campaigns</h2>
        <div className="campaign-grid">
          {filteredCampaigns.map((campaign) => (
            <div className="campaign-card" key={campaign.id} onClick={() => openModal(campaign)}>
              <img src={campaign.image} alt={campaign.title} />
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}></div>
              </div>
              <p className="funding-stats">Raised: ${campaign.raised.toLocaleString()} / ${campaign.goal.toLocaleString()}</p>
              <Link to={`/campaign-details/${campaign.id}`}><button className="btn-primary">View Details</button></Link>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Full Campaign Details */}
      {selectedCampaign && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <img src={selectedCampaign.image} alt={selectedCampaign.title} className="modal-image" />
            <h3>{selectedCampaign.title}</h3>
            <p>{selectedCampaign.description}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${(selectedCampaign.raised / selectedCampaign.goal) * 100}%` }}></div>
            </div>
            <p className="funding-stats">Raised: ${selectedCampaign.raised.toLocaleString()} / ${selectedCampaign.goal.toLocaleString()}</p>
          </div>
        </div>
      )}

      {/* Call-to-Action */}
      <section className="call-to-action">
        <h2>Have a Great Idea?</h2>
        <p>Start your own campaign and bring your idea to life!</p>
        <button className="btn-primary">Start Campaign</button>
      </section>

      {/* Footer */}
      <footer className="campaigns-footer">
        <div className="footer-links">
          <a href="#">Help</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
        <p>&copy; 2025 FundIt Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Campaigns;
