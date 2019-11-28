import useMatchMedia from './use_match_media';

export const useDarkColorScheme = () =>
  useMatchMedia("(prefers-color-scheme: dark)");

export const useLightColorScheme = () =>
  useMatchMedia("(prefers-color-scheme: light)");
