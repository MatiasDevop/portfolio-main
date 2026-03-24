import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

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
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials
        .filter((item) => item.path !== "")
        .map((item, index) => {
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
