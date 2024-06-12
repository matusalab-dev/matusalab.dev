import { useState } from "react";

const useToggle = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleIsToggled = () => setIsToggled(!isToggled);

  return { isToggled, handleIsToggled };
};

export default useToggle;
