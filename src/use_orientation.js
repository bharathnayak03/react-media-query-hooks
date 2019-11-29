// @flow
import useMatchMedia from './use_match_media';

export const usePortraitOrientation: boolean = () => useMatchMedia('(orientation: portrait)');

export const useLandscapeOrientation: boolean = () => useMatchMedia('(orientation: landscape)');

export function useOrientation(): 'portrait' | 'landscape' {
  return usePortraitOrientation() ? 'portrait' : 'landscape';
}
