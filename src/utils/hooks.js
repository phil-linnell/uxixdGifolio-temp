import { useEffect, useState } from "react";
import debounce from "./debounce";

export const useScrollPosition = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);
  }, 1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, handleScroll]);

  return prevScrollPos;
};