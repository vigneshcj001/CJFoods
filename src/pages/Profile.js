import React, { memo } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import ProfileImg from "../../images/profile_img.png";
import {
  Linkedin_Link,
  X_Link,
  Github_Link,
  Instagram_Link,
  Email_Link,
} from "../Utils/const";

const socialLinks = [
  { href: Linkedin_Link, icon: <FaLinkedin /> },
  { href: X_Link, icon: <FaXTwitter /> },
  { href: Github_Link, icon: <FaGithub /> },
  { href: Email_Link, icon: <SiGmail /> },
  { href: Instagram_Link, icon: <FaInstagram /> },
];

const Profile = () => (
  <div className="flex flex-col items-center p-5 text-center font-sans">
    <h3 className="text-xl font-semibold mb-4">About Me</h3>
    <div className="mb-5">
      <img
        src={ProfileImg}
        alt="Profile"
        className="rounded-full w-36 h-36 object-cover"
      />
    </div>
    <div className="flex gap-4 justify-center mt-5">
      {socialLinks.map(({ href, icon }, index) => (
        <a
          key={index}
          href={href}
          className="text-gray-800 text-3xl transition-all duration-300 transform hover:text-[#0077b5] hover:scale-110"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={href}
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);

export default memo(Profile);
