import React, { useState } from 'react';
import { FaPlus , FaMinus} from 'react-icons/fa'; 
import './construct.css';



const Package = ({ title, originalPrice, discountedPrice, features }) => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const allDropdownContents = {
    "Steel": [
      "ISI standard FE-500/550TMT Steel will be used as per structural requirement.",
      "Meenakshi , Sunvik or equivalent brands will be used",
      "Steel Rods starting from 8mm upto 16mm will be used"
    ],
    "Cement": [
      "ISI Standard 53 and 43 Grade cement will be used.",
      "53-Grade will be used for Masonry and 43-Grade will be used for Plastering",
      "ACC, Dalmia or equivalent Brands will be used"
    ],
    "Blocks/Bricks": [
      "Standard Solid 6-inch and 4-inch concrete blocks will be used",
      "6-inch blocks for External walls and 4-inch blocks for internal walls",
      "Note : Clay-bricks can be used with Extra cost of Rs.90/-sqft",
      "Wire-cut bricks for Rs.100/-sqft on the package",
    ],
    "Concrete": [
      "RCC Design mix will be used as per structural requirement.",
    ],
    "Aggregates": [
      "20mm and 40mm will be used.",
    ],
    "Sand": [
      "M-Sand will be used for Masonry and P Sand will be used for plastering",
    ],
    "Waterpoofing": [
      "Dr.Fixit Water proofing solution will be used.",
    ],
    "Kitchen": [
      "Cost of the Granite platform will be upto RS.100/sqft",
      "Ceramic Wall tiles worth upto RS.40/sqft will be provided",
      "Stainless Steel Single Bowl sink of worth up to RS.3000 will be provided.",
      "Sink Faucet and Accessories worth up to Rs.1300 will be provided.",
    ],
    "Bathroom": [
      "Sanitary ware and CP fittings will be used of worth up to Rs.25000/-",
      "Washbasin with Pillarcock, Wallmixer/Diverter , Health Faucet and Acessesories",
      "Ceramic Wall tiles worth up to Rs.40/sqft and Floor tiles worth up to Rs.40/sqft",
      "Ashirvad/Supreme brand CPVC and PVC will be used in Plumbing.",
      "Bathroom Doors: WPC Doors and Frame."
    ],
    "Wood Work": [
      "Main door will be provided worth of Rs.15000 including frame and Fixtures.",
      "2-track Aluminum sliding windows with 5mm clear glass will be provided",
      "Doors for internal rooms will be provided worth of Rs.8000 including frame and fixtures",
      "SAL wood will be provided for Internal Door Frames.",
    ],
    "Painting": [
      "2-coats of JK wall putty will be done.",
      "2-coats of Asian paints Ace Weatherproof paint will be provided.",
      "2-coats of Asian Paints Enamel painting will be done for window grills,balcony and Staircase MS railings.",
    ],
    "Flooring": [
      "Living and Dining: Branded Vitrified tiles of worth up to Rs.50/-sqft will be provided.",
      "Bedroom: Branded Vitrified tiles of worth up to Rs.50/- sqft will be provided.",
      "Staircase: Sadarahalli granite of worth up to Rs.80/- sqft will be provided.",
      "Balcony and Open areas: Anti-skid tiles of worth up to Rs.40/-sqft will be provided.",
      "Parking: Anti-skid Parking tiles of worth up to Rs.40/-sqft will be provided."
    ],
    "Electrical": [
      "Wires: Anchor brand Fire-proof wires will be provided.",
      "Switches and Brands: Anchor/ROMA Brand Switches and Panel boards will be provided.",
      "Note: Electrical fixing and fixtures like Fans, Bulbs, Motor, Meters, Meter Box etc.,are not included in the package. It will be of additional cost.",
    ],
    "Water Tanks": [
      "ISI Standard Multi-layered Water Tank will be provided. Water tank capacity starts from 1000 liters and the capacity depends on the total built-up area.",
      "Underground sump will be of 8” solid concrete blocks with waterproofing plastering Sump tank capacity starts from 5000 liters and the capacity depends on the total built-up area. It can be provided with the cost estimation.",
    ],
    "Fabrication": [
      "Staircase and Balcony Railings: MS railings with Standard designs will be provided. Simple Designs will be provided. 16-gauge round /box pipes will be used.",
    ],
    "Parapet Wall": [
      "Standard Parapet wall of height 3 feet will be provided. 4-inch Solid concrete blocks & both side plastering and painting will be done.",
    ],
    "Contract Exclusions": [
      "Electrical Works: Fixtures, fittings(Like Geyser, exhaust,tubes,fans, bulbs, fancy fittings, auto Controller chimney etc.) Main panel board. Cable from BESCOM point to Main panel board,Earthing, Temporary connection.",
      "BWSSB, BESCOM expenses like road cutting,servicing, SANCTION plan etc",
      "Any Government expenses.",
      "Power and Water",
      "Electrical panel board",
      "Other fixtures like solar panels, Fancy Fittings in plumbing like jet Shower, cubical shower, and bath tub are not included.",
      "Masonry Works: Architectural finishers like, wall cladding will be charged as per market rate",
      "Interiors like Kitchen cabinet. Any internal paneling, Wardrobes, Lofts, Cots, ledges, TV cabinets, shelves etc. will be as per Discussion",
      "Sloped roof & design roofs will be charged as per market rate",
      "Platform for overhead tank shall be charged based on the area and materials selected.",
      "Grill work will be charged as per Market rate",
      "Gas Line, Solar Pipe line, CC Camera provision will be charged as per requirement",
      "Chain link steps/Staircase will be charged extra as per market rate",
      "If soil bought by outside for Filling."
    ],










    // ... (include all other features here)
    "Premium Flooring": [
      "Imported marble flooring",
      "Hardwood flooring in bedrooms",
      "Anti-skid designer tiles in wet areas"
    ],
    "Smart Home Features": [
      "Automated lighting system",
      "Smart door locks",
      "Voice-controlled home automation"
    ],
    // ... (add more premium features as needed)
  };

  return (
    <div className="package">
      <h4>{title}</h4>
      <p className="price">
        <span className="original-price">Rs.{originalPrice}/sft</span>
        Rs.{discountedPrice}/sft
      </p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <div className="feature-header">
              {feature}
              {expandedFeature === index ? (
                <FaMinus
                  className="expand-icon"
                  onClick={() => setExpandedFeature(null)}
                />
              ) : (
                <FaPlus
                  className="expand-icon"
                  onClick={() => setExpandedFeature(index)}
                />
              )}
            </div>
            {expandedFeature === index && (
              <div className="dropdown">
                <ul>
                  {allDropdownContents[feature] && allDropdownContents[feature].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button className="enquire-button">Enquire Now</button>
    </div>
  );
};

const Packages = () => {
  const standardFeatures = [
    "Steel",
    "Cement",
    "Blocks/Bricks",
    "Concrete",
    "Aggregates",
    "Sand",
    "Waterpoofing",
    "Kitchen",
    "Bathroom",
    "Wood Work",
    "Painting",
    "Flooring",
    "Electrical",
    "Water Tanks",
    "Fabrication",
    "Parapet Wall",
    "Contract Exclusions",
  ];

  const premiumFeatures = [
    "Structural Material",
    "Cement",
    "Bricks",
    "Concrete",
    "Aggregates",
    "Sand",
    "Waterpoofing",
    "Luxury Kitchen",
    "Luxury Bathroom",
    "Premium Doors",
    "Paint",
    "Flooring",
    "Premium Electrical",
    "Terrace",
    "Micellaneous",
    "ChickenMesh",
    "Contract Exclusions",
  ];

  return (
    <section className="packages">
      <h2>Our Packages</h2>
      <h3>Coze up, Your Way: Explore Our Signature Packages.</h3>
      <div className="package-grid">
        <Package
          title="Standard Package"
          originalPrice="1950"
          discountedPrice="1870"
          features={standardFeatures}
        />
        <Package
          title="Premium Package"
          originalPrice="2249"
          discountedPrice="2150"
          features={premiumFeatures}
        />
      </div>
    </section>
  );
};


const HomeConstruct = () => {
  return (
    <div className="construction-page">

      <main>
        <section className="hero">
          <div className='hero-text'>
          <h1>Constructing Foundations,<br /><span>Shaping Futures!</span></h1>
          <p>Our construction service goes beyond building houses; it's about creating personalized sanctuaries, reflect your lifestyle, taste, and dreams. Every corner narrates a unique story, yours.</p>
          <button className="cta-button">Make it Reality</button>
          </div>
        </section>

        <Packages />

        <section className="cost-calculator">
          <h2>Cost Calculator</h2>
          <h3>Estimate cost of your dream project</h3>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="package">Package Required*</label>
                <select id="package">
                  <option>Select the package</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input type="text" id="name" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="location">Site Location*</label>
                <select id="location">
                  <option>Select the location</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="plot">Plot Dimension*</label>
                <input type="text" id="plot" placeholder="in square feet" />
              </div>
              <div className="form-group">
                <label htmlFor="construction-type">Construction Type*</label>
                <select id="construction-type">
                  <option>Select construction type</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="floors">No. of Floors*</label>
                <select id="floors">
                  <option>Select the no. of floors</option>
                </select>
              </div>
            </div>
            <button type="submit" className="cost-button">Get Cost Estimation</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HomeConstruct;