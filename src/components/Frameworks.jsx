import { OrbitingCircles } from "./OrbittinCircles.jsx";
import { skills } from "../constants/index.js";
import Icon from "./Icon.jsx";

const Frameworks = () => {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={35}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={120} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
};
export default Frameworks;
