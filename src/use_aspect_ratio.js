import useMatchMedia from './use_match_media';


export const useAspectRatio = ratio =>
  useMatchMedia(`(aspect-ratio: ${ratio} )`);

export const useMinAspectRatio = ratio =>
  useMatchMedia(`(min-aspect-ratio: ${ratio} )`);

export const useMaxAspectRatio = ratio =>
  useMatchMedia(`(min-aspect-ratio: ${ratio} )`);
