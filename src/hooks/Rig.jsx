import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";

const Rig = () => {
  const { pointer } = useThree();

  return useFrame((state, delta) =>
    easing.damp3(
      state.camera.position,
      [pointer.x / 5, 1 + pointer.y / 5, 3],
      0.5,
      delta,
    ),
  );
};
export default Rig;
