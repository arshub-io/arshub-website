import { useEffect, useCallback, useState } from "react";

export default function useWindowSize() {
  const isSSR = typeof window === "undefined";
  const getWindow = useCallback(() => {
    return {
      width: isSSR ? 1200 : window.innerWidth,
      height: isSSR ? 800 : window.innerHeight,
    };
  }, [isSSR]);

  const [windowSize, setWindowSize] = useState(getWindow());

  useEffect(() => {
    const onResize = () => {
      setWindowSize(getWindow());
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [getWindow]);

  return windowSize;
}
