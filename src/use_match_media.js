import { useState, useEffect } from "react";

export default function useMatchMedia(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mqList = window.matchMedia(query);
    setMatches(mqList.matches);

    function onChange() {
      const { matches } = window.matchMedia(query);
      setMatches(matches);
    }
    mqList.addEventListener("change", onChange);

    return () => {
      mqList.removeEventListener("change", onChange);
    };
  }, [query]);

  return matches;
}
