// @flow
import useMatchMedia from './use_match_media';

export const useDarkColorScheme: boolean = () => useMatchMedia('(prefers-color-scheme: dark)');
export const useLightColorScheme: boolean = () => useMatchMedia('(prefers-color-scheme: light)');
export const useColorScheme: 'light' | 'dark' | 'no-preference' = () => {
  const isDark = useDarkColorScheme();
  const isLight = useLightColorScheme();

  if (isDark) {
    return 'dark';
  }
  if (isLight) {
    return 'light';
  }
  return 'no-preference';
};
