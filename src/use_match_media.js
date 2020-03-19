// @flow
import { useState, useEffect } from 'react';

export default function useMatchMedia(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mqList = window.matchMedia(query);
    setMatches(mqList.matches);

    function onChange() {
      const { matches: changedMatch } = window.matchMedia(query);
      setMatches(changedMatch);
    }
    mqList.addEventListener('change', onChange);

    return () => {
      mqList.removeEventListener('change', onChange);
    };
  }, [query]);

  return matches;
}
