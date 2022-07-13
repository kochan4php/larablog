import { useState, useEffect } from "react";

const RenderAfter = ({ delay, children }) => {
  const [onReady, setOnReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOnReady(true), delay);
    return () => clearTimeout(timer);
  }, []);

  return onReady ? children : null;
};

export default RenderAfter;
