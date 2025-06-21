import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const tabs = [
  {
    idx: 0,
    name: "HOME",
    link: "/",
  },
  {
    idx: 1,
    name: "HEADPHONES",
    link: "/headphones",
  },
  {
    idx: 2,
    name: "SPEAKERS",
    link: "/speakers",
  },
  {
    idx: 3,
    name: "EARPHONES",
    link: "/earphones",
  },
];
export const socialLinks = [
  {
    idx: 0,
    name: "Facebook",
    icon: <FaFacebookF size={20} />,
    link: "#",
  },
  {
    idx: 1,
    name: "Twitter",
    icon: <FaTwitter size={20} />,
    link: "#",
  },
  {
    idx: 2,
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    link: "#",
  },
];
