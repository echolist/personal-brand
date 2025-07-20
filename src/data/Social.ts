
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface SocialItem {
    icon: IconType;
    href: string;
  }

  export const socialItem: SocialItem[] = [
    {
      icon: FaGithub,
      href: "https://github.com/yourusername",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/yourusername",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/yourusername",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/yourusername",
    },
  ];