import { navigationWords } from "../constants/index.js";

const Navigation = ({ setIsOpen }) => {
  return (
    <ul className="nav-ul">
      {navigationWords.map(({ name, link }) => (
        <li key={name} className="nav-li">
          <a onClick={() => setIsOpen(false)} href={link}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Navigation;
