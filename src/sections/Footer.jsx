import SeparatorLine from "../components/SeparatorLine.jsx";
import { footerRights, footerTerms, socials } from "../constants/index.js";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <SeparatorLine />
      <p className="flex gap-2">{footerTerms}</p>
      <div className="flex gap-3">
        {socials.map((social, index) => (
          <a href={social.href} key={index} target="_blank">
            <img src={social.icon} alt={social.name} className="w-6 h-6" />
          </a>
        ))}
      </div>
      <p>{footerRights}</p>
    </section>
  );
};
export default Footer;
