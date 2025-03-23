import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterIcon = ({ icon }) => {
  return (
    <div className="bg-main-color h-fit cursor-pointer rounded-full p-2.5 text-3xl text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-xl">
      {icon}
    </div>
  );
};

export default function FooterIcons() {
  return (
    <div className="flex items-center justify-center  gap-x-6">
      <FooterIcon icon={<FaXTwitter />} />
      <FooterIcon icon={<IoLogoFacebook />} />
      <FooterIcon icon={<FaInstagram />} />
      <FooterIcon icon={<FaLinkedin />} />
    </div>
  );
}
