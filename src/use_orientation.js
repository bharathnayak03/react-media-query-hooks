import useMatchMedia from './use_match_media';

export const usePortraitOrientation = () =>
  useMatchMedia("(orientation: portrait)");

export const useLandscapeOrientation = () =>
  useMatchMedia("(orientation: landscape)");
