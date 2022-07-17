import FeatherIcon from "feather-icons-react";
import { For } from "@/utils";
import { Link } from "@inertiajs/inertia-react";

const dataFooterLink = [
  { name: "Artikel", path: "/" },
  { name: "Kategori", path: "/" },
  { name: "Tag", path: "/" },
  { name: "Penulis", path: "/" },
];

const dataFooterIcon = [
  { icon: "github", path: "https://github.com/kochan4php/larablog" },
  { icon: "twitter", path: "https://twitter.com/deo_sbrn" },
  { icon: "linkedin", path: "https://www.linkedin.com/in/deo-s-5316b3219/" },
  { icon: "instagram", path: "https://instagram.com/kochan.php" },
];

const FooterLink = () => (
  <For
    each={dataFooterLink}
    render={({ name, path }, index) => (
      <Link
        key={index}
        href={path}
        className="link link-hover text-base md:text-lg font-semibold"
      >
        {name}
      </Link>
    )}
  />
);

const FooterIcon = () => (
  <For
    each={dataFooterIcon}
    render={({ icon, path }, index) => (
      <a key={index} href={path} target="_blank">
        <FeatherIcon icon={icon} size={24} />
      </a>
    )}
  />
);

const FooterText = () => (
  <p>Copyright © 2022 - All right reserved by Kochan.php</p>
);

const Footer = () => (
  <footer className="footer footer-center p-10 bg-danger text-white">
    <div className="grid grid-flow-col gap-4">
      <FooterLink />
    </div>
    <div className="grid grid-flow-col gap-4">
      <FooterIcon />
    </div>
    <div className="text-base md:text-lg font-semibold">
      <FooterText />
    </div>
  </footer>
);

export default Footer;
