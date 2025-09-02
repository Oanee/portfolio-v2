import { Html, useProgress } from "@react-three/drei";
import { progress } from "motion";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="w-[10rem] bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-orange text-xs font-medium text-black text-center p-0.5 leading-none rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </Html>
  );
};
export default Loader;
