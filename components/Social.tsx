import Link from "next/link";
import path from "path";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MatiasDevop" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/nestor-matias-a-192436186/",
  },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "https://x.com/NestorM2045" },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: any;
  iconStyles: any;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
