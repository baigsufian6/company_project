import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./construct.css";

const Package = ({ title, originalPrice, discountedPrice, features }) => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const allDropdownContents = {
    "Design & Drawings​": [
      "Floor plan / 2D",
      "Architectural Visualization / 3D",
      "Electrical and Plumbing Drawings",
      "Structural drawings",
      "Upto 2 Iterations allowed",
    ],
    "Core Construction Materials used": [
      "Steel (500 TMT Bars)-Minakshi/Sunvik",
      "Cement ( Grade 43/53 )- Dalmia/ACC",
      "6″ and 4″ Concrete Blocks",
      "Agrregates 20 mm and 40 mm",
      "Concrete  M20 Grade RMC/Machine Mix",
      "Waterproofing admixtures- Dr Fixit",
      "2 Course of SSM under the peripheral plinth Beam",
      "Primer+2 Coats of Brushbond Waterproof+Screed Concrete finish in terrace",
    ],
    Elevation: ["Allocation of 0.5 % of Built up area cost"],
    "Sump, Parapet wall other Items": [
      "UG Sump  6″ concrete blocks with waterproof plastering",
      "Parapet wall 6″ concrete blocks of 3 feet height",
      "Column-wall joints plastered with chicken mesh",
      "Floor to Floor height- 10 feet",
    ],
    "Flooring Works": [
      "Living Room, Dining  Marble Finished Vitrified Tiles Rs 100/sft",
      "Kitchen and Bedroom  Vitrified tiles Rs 70/sft",
      "Staircase Granite Rs 75/sft",
      "Balcony, sit-out, Foyer and outside passage area Antiskid tiles Rs 50/sft",
      "Toilet Flooring tiles up to Rs 50/sft (Anti skid)",
      "Parking area Tiles Rs 40/sft(Anti Skid)",
      "Note: Material Selection/procurement as per architects/engineers selection.",
    ],
    "Wall Tiling Works": [
      "Ceramic wall tiles Upto Rs. 40/sft (2 Feet above kitchen Couter slab)",
      "Toilet wall dadoing up to 7 feet up to Rs 50/sft",
      "Kitchen countertop Upto Rs 100/sft",
    ],
    Doors: [
      "Main Door - Teak door with teak frame of 5″ by 3″ , Worth upto Rs. 20,000/- including fixtures.",
      "Door hardware  Europa/ Dorma",
      "Standard number hinges and tower bolts used",
    ],
    Windows: [
      "3 Track UPVC Windows with 1 Mosquito mesh and MS grill worth Rs.400/sft",
      "Opening percentage for Doors and Windows 22% of built up area",
    ],
    Kitchen: [
      "1 Number of SS Kitchen sink, Faucet and any additional accessories upto overall budget of Rs.10,000/-",
    ],
    Bathroom: [
      "Sanitary ware and CP Fitting such as Wash basin, WC, Taps, and other accessories: Total Budget up to Rs 30,000/- per 1000 square foot of Built up area",
      "Brand  Parryware or equivalent",
    ],
    "Electrical Works": [
      "Switch and light points as per the design by the architect/engineer.",
      "Good quality conduits hidden in the walls and slabs",
      "DB’s and MCB’s Are Included : Indo Asian Make.",
      "Note:Electrical fixing like fans, bulbs, motors, meter box etc.. are not included in the package, it will be counted as additional cost",
    ],
    "Plumbing Works": [
      "Water inlet:Connection of Water inlet from the corporation",
      "Water Outlet: Drainage septic tanks and outlet released to the site boundary",
      "CPVC Pipes: Brands considered astral or equivalent",
      "PVC Overhead Tank (Ganga/ Equivalent) based on per capita consumption",
    ],
    "Painting Works": [
      "Internal painting: JK Wall putty+primer coat+tractor emulsion",
      "External painting : Primar coat + Apex weather proof paint",
      "Brand: Asian",
      "MS Grills- 2 Coat Enamle painting",
    ],
    "Fabrication works": [
      "Main gate -MS Gate worth upto Rs.20,000/-",
      "Staircase and Balcony Railings: SS railing upto Rs.200/sft.",
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
      "If soil bought by outside for Filling.",
      "Extra charges for additional slump depth",
      "Compound wall height more than 4 feet costs extra.",
      "Electricity and water at site to be provided by client.",
      "Additional cost for BBMP/BDA approvals",
      "Plinth height more than 2 feet costs further.",
      "Interiors works (Kitchen cabins,wardrobes etc) are not included.",
      "Work outside of site boundary is not included here.",
      "Security fabrications are extra",
      "Designer elevation and landscaping cost is additional cost",
      "Supplementary item/work not under package cost extra",
    ],
    "Payment structure": ["Custom payment schedule will be provided."],
    "Construction Guarantee and warranty": [
      "Structural Warranty 10 years",
      "Waterproofing warranty , 1 years",
    ],

    // ... (Premium Features)
    "Design & Drawings ​": [
      "Floor plan / 2D",
      "Architectural Visualization / 3D",
      "Electrical and Plumbing Drawings",
      "Structural drawings",
      "Upto 4 Iterations allowed",
      "3D External Walkthrough of the House",
      "3D Cut Floor Plans with Furniture Layout",
    ],
    "Core Construction Materials used ": [
      "Steel (500-550 TMT Bars)-JSW steel",
      "Cement ( Grade 43/53 )- Acc/Ultratech",
      "6″ and 4″ Apco/Sobha Concrete Blocks",
      "Agrregates – 20 mm and 40 mm",
      "Concrete – M20 Grade RMC/Machine Mix",
      "Waterproofing admixtures- Dr Fixit / FOSROC",
      "2 Course of SSM under the peripheral plinth Beam",
      "Primer+2 Coats of Brushbond Waterproof+Screed Concrete+Polyurethane Membrane in Terrace",
    ],
    "Elevation ": ["Allocation of 1.5 % of Built up area cost"],


    "Sump, Parapet wall other Items ": [
      "UG Sump – RCC Retaining walls with waterproof plastering",
      "4 Feet height compound wall – 4 Inch concrete blocks with plastering and painting as per the design.",
      "Parapet wall – 6″ concrete blocks of 3 feet height",
      "Column-wall joints plastered with chicken mesh and fiber mesh",
      "Floor to Floor height- 11 feet",
    ],
    "Flooring Works ": [
      "Living, Rooms and Kitchen Flooring– Granite of value Up to Rs.140 per sqft",
      "Foyer and Staircase area – Granite Rs.120/sft",
      "Balcony, sit-out and outside passage area – Antiskid tiles Rs.80/sft",
      "Toilet Flooring Vitrified tiles up to Rs 85/sft (Anti skid)",
      "Parking- Tiles Shall be Button Tile Flooring/Interlock Flooring of value Rs.35 to 40 per sqft.",
      "Note: Material Selection/procurement as per clients/architects/engineers selection.",
    ],
    "Wall Tiling Works ": [
      "Ceramic wall tiles – Upto Rs.80/ - Rs. 90/ sft (2 Feet above kitchen slab)",
      "Toilet wall dadoing up to 7 feet up to Rs 50/sft",
      "Kitchen sink, faucet and accessories worth upto Rs. 1500/ - Rs. 2000/",
    ],
    "Doors ": [
      "Main Door and Pooja Door : Provision of 3.5*7ft door in teak wood upto Rs 60,000/- inclusive of all hardware fittings.",
      "Internal Doors : Provision of 3*7ft door in WPC upto Rs.15,000/- per door inclusive of all hardware fittings.",
      "Bathroom Door: Frame and shutter including all fittings up to Rs.10,000/- per door",
      "Standard number hinges and tower bolts used as per clients requirement",
    ],
    "Windows ": [
      "3 Track UPVC Windows with 1 Mosquito mesh and MS grill as per Design ",
      "Opening percentage for Doors and Windows – 27% of built up area",
    ],
    "Kitchen ": [
      "1 Number of SS Kitchen sink, Faucet and any additional accessories as per client’s requirement upto overall budget of Rs.15,000/",
    ],
    "Bathroom ": [
      "Sanitary ware & CP fittings will be used of worth up to Rs.30000/- per Bathroom, Washbasin with Pillar cock, Wall mixer/Diverter, Health Faucet, Overhead shower with Arm,Concealed stopcock, CP fittings and Accessories (CPVC and PVC Pipes).",
      "Ceramic Wall tiles worth up to Rs.80/sqft.",
      "Anti-Skid Ceramic Floor tiles worth Rs.50/Sqft.",
      "Ashirwad/Astral or Equivalent brand CPVC and PVC will be used in Plumbing. Height of the Wall tiles will be up to 7 feet above the Floor.",
      "WPC water proof Frame and Shutter will be provided",
      "Sanitary ware and CP fittings-Jaguar/Cera/Hindware or any Equivalent as per client’s choice.",
    ],
    "Electrical Works ": [
      "Switch and light points as per the design by the architect/engineer",
      "Good quality conduits hidden in the walls and slabs",
      "1 EV Charging point in the Parking Lot.",
      "Fireproof Copper wire: Anchor or Equivalent.",
      "Note:Electrical fixing like fans, bulbs, motors, meter box etc.. are not included in the package, it will be counted as additional cost",
    ],
    "Plumbing Works ": [
      "Water inlet:Connection of Water inlet from the corporation",
      "Water Outlet: Drainage septic tanks and outlet released to the site boundary",
      "CPVC Pipes: Brands considered Ashirwad/Astral/Supreme or equivalent",
      "3 Layered PVC Overhead Tank: Brand considered Sintex or equivalent , capacity of the decided based on the per capita consumption",
    ],
    "Painting Works ": [
      "Internal Wall and Ceiling: JK Wall putty, primer coat, and Royale emulsion paint",
      "External wall : Primar coat and Ultima emulsion weatherproof painting",
      "Brands: Asian/Dulux/Berger",
      "2 Coat Enamle painting for window MS Grills",
    ],
    "Fabrication works ": [
      "Main gate in mild steel as per client’s selection worth up to Rs.32000/-",
      "Internal Staircase and Balcony Railings: Providing SS(304 Grade) with glass railing on one side of the staircase up to Rs.350/sft",
      "Providing External staircase railing in one side upto Rs 250/sft",
    ],
    "Contract Exclusions ": [
      "Electrical Works: Fixtures, fittings (Like Geyser, exhaust, tubes, fans, bulbs, fancy fittings, auto Controller chimney, etc.) Main panel board. Cable from BESCOM point to Main panel board, Earthing, Temporary connection.",
      "BWSSB, BESCOM expenses like road cutting, servicing, SANCTION plan, etc.",
      "Power and Water. ",
      "Any Government expenses.",
      "Other fixtures like solar panels, Fancy fittings in plumbing like jet shower, cubical shower, and bathtub are not included.",
      "Electrical panel board.",
      "Interiors like Kitchen cabinet. Any internal paneling, Wardrobes, Lofts, Cots, ledges, TV cabinets, shelves, etc. will be as per discussion.",
      "Masonry Works: Architectural finishes like wall cladding will be charged as per market rate.",
      "Sloped roof & design roofs will be charged as per market rate.",
      "Platform for overhead tank shall be charged based on the area and materials selected.",
      "Grill work will be charged as per Market rate.",
      "Gas Line, Solar Pipeline, CC Camera provision will be charged as per requirement.",
      "Chain link steps/Staircase will be charged extra as per market rate.",
      "If soil is bought from outside for filling, it will incur extra charges.",
      "Additional sumping depth will be charged extra.",
      "Additional height of Compound wall if more than 4 feet is required.",
      "Temporary electricity and water for construction to be provided by the client.",
      "Additional cost for BBMP/BDA approvals.",
      "Additional cost to raise the building level more than 2 feet from the ground level.",
      "Interiors works like kitchen cabinets, wardrobes, etc. are not included.",
      "Electrical fixtures like fans, lightbulbs, exhaust fans, etc. are not included in the package.",
      "Any work outside the site boundary is not included in the package.",
      "Security fabrications are extra.",
      "Designer elevation and landscaping costs are additional.",
      "Any item/work not specifically mentioned in the package is an additional cost.",
    ],
    "Payment structure ": [
      "Custom payment schedule will be provided considering project milestones and activities",
    ],
    "Construction Guarantee and warranty ": [
      "Structural Warranty 10 years",
      "Waterproofing warranty , 1 year",
    ],
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/construction/contact"); // This will navigate to the Career page
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
                  {allDropdownContents[feature] &&
                    allDropdownContents[feature].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button className="enquire-button" onClick={handleClick}>
        Enquire Now
      </button>
    </div>
  );
};

const Packages = () => {
  const standardFeatures = [
    "Design & Drawings​",
    "Core Construction Materials used",
    "Elevation",
    "Sump, Parapet wall other Items",
    "Flooring Works",
    "Wall Tiling Works",
    "Doors",
    "Windows",
    "Kitchen",
    "Bathroom",
    "Electrical Works",
    "Plumbing Works",
    "Painting Works",
    "Fabrication works",
    "Contract Exclusions",
    "Payment structure",
    "Construction Guarantee and warranty",
  ];

  const premiumFeatures = [
    "Design & Drawings ​",
    "Core Construction Materials used ",
    "Elevation",
    "Sump, Parapet wall other Items ",
    "Flooring Works ",
    "Wall Tiling Works ",
    "Doors ",
    "Windows ",
    "Kitchen ",
    "Bathroom ",
    "Electrical Works ",
    "Plumbing Works ",
    "Painting Works ",
    "Fabrication works ",
    "Contract Exclusions ",
    "Payment structure ",
    "Construction Guarantee and warranty ",
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

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const costCalculatorRef = useRef(null);

  const handleClick = () => {
    navigate("/construction/contact"); // Navigate to Contact page
  };

  const [formData, setFormData] = useState({
    package: '',
    phone: '',
    name: '',
    location: '',
    plot: '',
    floors: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sqftValue = formData.package === 'Standard Package (1870/sqft)' ? 1870 : 2150;
    const floorCount = parseInt(formData.floors) || 1; // Use 1 if floors is 0
    const totalCost = floorCount * (formData.plot * sqftValue);
    navigate('/construction/cost-result', { state: { ...formData, totalCost } });
  };



  return (
    <div className="construction-page">
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>
              Constructing Foundations,
              <br />
              <span>Shaping Futures!</span>
            </h1>
            <p>
              Our construction service goes beyond building houses; it's about
              creating personalized sanctuaries, reflecting your lifestyle,
              taste, and dreams. Every corner narrates a unique story, yours.
            </p>
            <button className="cta-button" onClick={handleClick}>
              Make it Reality
            </button>
          </div>
        </section>

        <Packages />

        <section className="cost-calculator">
      <h2>Cost Calculator</h2>
      <h3>Estimate cost of your dream project</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="package">Package Required*</label>
            <select id="package" value={formData.package} onChange={handleInputChange} required>
              <option value="">Select the package</option>
              <option value="Standard Package (1870/sqft)">Standard Package (1870/sqft)</option>
              <option value="Premium Package(2150/sqft)">Premium Package(2150/sqft)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input type="text" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Site Location*</label>
            <input type="text" id="location" placeholder="Enter site location" value={formData.location} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="plot">Plot Dimension*</label>
            <input type="number" id="plot" placeholder="in square feet" value={formData.plot} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="floors">No. of Floors*</label>
            <select id="floors" value={formData.floors} onChange={handleInputChange} required>
              <option value="">Select the no. of floors</option>
              {[...Array(11)].map((_, i) => (
                <option key={i} value={i}>{i === 0 ? 'Ground Floor' : i + (i === 1 ? 'st Floor' : i === 2 ? 'nd Floor' : i === 3 ? 'rd Floor' : 'th Floor')}</option>
              ))}
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
