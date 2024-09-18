// New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation
// In Footer.js and export.js
import prop1 from "./Assets/rohanproject1.png";
import prop2 from "./Assets/rohanproject2.png";
import prop3 from "./Assets/rohanproject3.png";
import prop4 from "./Assets/rohanproject4.png";
import prop5 from "./Assets/rohanproject5.png";
import prop6 from "./Assets/rohanproject7.png";
import new1 from './Assets/new1.png'
import new2 from './Assets/new2.png'
import new3 from './Assets/new3.png'
import client1 from "./Assets/client1.png";
import client2 from "./Assets/client2.png";
import client3 from "./Assets/client3.png";
import client4 from "./Assets/client4.png";
import client5 from "./Assets/client5.png";
import client6 from "./Assets/client6.png";
import propp2 from './Assets/prop3.png'
import pp1 from './Assets/pp1.png';
import pp2 from './Assets/pp2.png';
import pp3 from './Assets/pp3.png';
import pp4 from './Assets/pp4.png';
import pp5 from './Assets/pp5.png';


import { MdNoteAlt} from "react-icons/md";
import { MdRealEstateAgent } from 'react-icons/md';
import { MdOutlineHome } from 'react-icons/md';
import { FaHardHat } from 'react-icons/fa';

import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";

export const property = [
  
  {
    images: propp2,
    address: "Nelmangla",
    name: "Rohan Vaishnavi Villas",
    area:"1200 sft"
     
  },
  
  {
    images: pp3,
    address: "Yelhanka",
    name: "Rohan Premium Plots",
    // price: "$ 345.18",
    // about:
    //   "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    area: "1200 sq ft",
     
  },
  {
    images: pp5,
    address: "Devanhalli",
      name: "Rohan Royal Villas",
    area:"1200 sft"
     
  },
  {
    images: pp4,
    address: "BigBanyan Tree",
    name: "Rohan Golden Villas",

    area: "1200 sq ft",
    owner: "Rohan K N",
  },
  {
    images: pp1,
    address: "Tavrekere",
    name: "Rohan Hill View",
    // price: "$ 675.23",
    // about:
    //   "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    area: "1200 sq ft",
    owner: "Rohan K N",
  },
  {
    images: pp2,
    address: "Devanhalli",
    name: "Rohan Antara",
    area: "1200 sq ft",
    owner: "Rohan K N",
  },
  // {
  //   images: prop2,
  //   address: "Devanhalli",
  //   name: "Rohan Skill View Enclave",
  //   area: "1200 sq ft",
  //   owner: "Rohan K N",
  // },
  // {
  //   images: prop2,
  //   address: "Yelhanka",
  //   name: "Rohan Premium Plots",
  //   // price: "$ 345.18",
  //   // about:
  //   //   "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
  //   area: "1200 sq ft",
  
  // },
  // {
  //   images: prop3,
  //   address: "Devanhalli",
  //   name: "Rohan Skill View Enclave",
  //   area: "1200 sq ft",
  //   owner: "Rohan K N",
  // },
  // {
  //   images: prop4,
  //   address: "BigBanyan Tree",
  //   name: "Rohan Golden Villas",

  //   area: "1200 sq ft",
  //   owner: "Rohan K N",
  // },
  
  // {
  //   images: prop5,
  //   address: "Tavrekere",
  //   name: "Rohan Hill View",
  //   area: "1200 sq ft",
  //   owner: "Rohan K N",
  // },
  // {
  //   images: prop6,
  //   address: "Devanhalli",
  //   name: "Rohan Antara",
  //   area: "1200 sq ft",
  //   owner: "Rohan K N",
  // },
];

export const service = [
  {
    icon:  MdRealEstateAgent,
   title: "Residential Real Estate Marketing",
    desc: "Unlock the best market value for your plots with our expert sales strategies."
  },
  {
    icon: MdOutlineHome,
    title: "Expert Layout Development",
    desc: "Get expert help in designing your ideal layout",
  },
  
  {
    icon: FaHardHat,
    title: "Construction",
    desc: "Building your dream with precision and care",
  },
  // {
  //   icon: FaNotesMedical,
  //   title: "Evaluation",
  //   desc: "We offer you free evaluation to get a mortgage loan",
  // },
  // {
  //   icon: FaCameraRetro,
  //   title: "Photoshoot",
  //   desc: "We prepare your home visual presentation",
  // },
];

export const client = [
  {
    image: client5,
    name: "Vishu Kumar",
    text: "Flawless!",
    feedback:
      "Great experience with smooth documentation and excellent location, but would have appreciated more updates on future development.",
  },
  {
    image: client1,
    name: "Amba Bhavani",
    text: "Excellent team!",
    feedback:
      " The entire process of purchasing a plot with RIBD was transparent. The sales team was very responsive and provided all the information we needed.",
  },
  {
    image: client2,
    name: "Prasanna",
    text:"*Seamless*",
    feedback:
      "Rohan Infra made buying my plot a breeze. They were transparent and supportive throughout the process. Very happy with the outcome!",
  },
  {
    image: client3,
    name: "Rajesh",
    text: "Exceptional",
    feedback:
      "The team was extremely professional and supportive throughout the process. They made the legal and registration process easy to understand, which gave us great peace of mind.",
  },
  {
    image: client4,
    name: "Vinay Nagraj",
    text: "Impressive!",
    feedback:
      "We are very happy with the quality of the plot we purchased. The location is perfect, and all promised amenities were delivered. It exceeded our expectations!",
  },
  
  {
    image: client6,
    name: "Madhu Priya",
    text: "Remarkable!",
    feedback:
      "We are very happy with the quality of the plot we purchased. The location is perfect, and all promised amenities were delivered. It exceeded our expectations",
  },
];