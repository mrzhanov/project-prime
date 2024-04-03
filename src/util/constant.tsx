import { AiFillStar } from "react-icons/ai";
import {
  BsFillSendFill,
  BsShieldFillCheck,
  BsDropbox,
  BsInstagram,
} from "react-icons/bs";
import { FaAirbnb, FaFacebookF } from "react-icons/fa";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { TbBrandBinance, TbBrandCoinbase } from "react-icons/tb";

export const navigationLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "products",
    title: "Product",
  },
  {
    id: "features",
    title: "Services",
  },
  {
    id: "clients",
    title: "Customers",
  },
];

export const statistics = [
  {
    id: 1,
    title: "USER ACTIVE",
    value: "9300+",
  },
  {
    id: 2,
    title: "UNDER THE COMPANY NAME",
    value: "100+",
  },
  {
    id: 3,
    title: "TRANSACTION",
    value: "110M+",
  },
];

export const features = [
  {
    id: 1,
    icon: <AiFillStar className={`w-[50%] h-[50%] object-contain icons`} />,
    title: "Awards",
    content:
      "Offers the best credit card deals and a wonderful combination of benefits and rewards.",
  },
  {
    id: 2,
    icon: (
      <BsShieldFillCheck className={`w-[50%] h-[50%] object-contain icons`} />
    ),
    title: "100% Protected",
    content:
      "Trust the security of your information and transactions for peace of mind.",
  },
  {
    id: 3,
    icon: <BsFillSendFill className={`w-[50%] h-[50%] object-contain icons`} />,
    title: "Balance Transfer",
    content:
      "Transferring the balance on a credit card allows you to avoid paying high amounts of money in interests.",
  },
];

export const feedbacks = [
  {
    id: 1,
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Ledaer",
  },
  {
    id: 2,
    content:
      "Money makes your life easier. If you are lucky to have it, you are lucky.",
    name: "Steve Mark",
    title: "Founder & Ledaer",
  },
  {
    id: 3,
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Ledaer",
  },
];
// airbnb binance coinbase dropbox
export const clients = [
  {
    id: 1,
    title: "AIRBNB",
    logo: (
      <FaAirbnb className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
  {
    id: 2,
    title: "BINANCE",
    logo: (
      <TbBrandBinance className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
  {
    id: 3,
    title: "COINBASE",
    logo: (
      <TbBrandCoinbase className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
  {
    id: 4,
    title: "DROPBOX",
    logo: (
      <BsDropbox className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
];

export const footerLinks = [
  {
    title: "Society",
    links: [
      { name: "Help center", link: "https://www.hoobank.com/help-center/" },
      { name: "Partners", link: "https://www.hoobank.com/partners/" },
      { name: "Takliflar", link: "https://www.hoobank.com/suggestions/" },
      { name: "Suggestions Blog", link: "https://www.hoobank.com/blog/" },
      { name: "News", link: "https://www.hoobank.com/newsletters/" },
    ],
  },

  {
    title: "Useful Links",
    links: [
      { name: "Content", link: "https://www.sammi.ac/content/" },
      { name: "How it works", link: "https://www.sammi.ac/how-it-works/" },
      {
        name: "Terms & Services",
        link: "https://www.sammi.ac/terms-and-services/",
      },
    ],
  },

  {
    title: "Partner",
    links: [
      {
        name: "Our partner",
        link: "https://www.sammi.ac/our-partner/",
      },
      {
        name: "Be a partner",
        link: "https://www.sammi.ac/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: (
      <BsInstagram className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: (
      <FaFacebookF className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: (
      <FiTwitter className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: (
      <FiLinkedin className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://www.linkedin.com/",
  },
];
