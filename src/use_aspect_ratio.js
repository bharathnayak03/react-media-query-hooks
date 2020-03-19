// @flow
import useMatchMedia from './use_match_media';

function validateRatio(ratioStr: string) {
  const ratio = ratioStr.split('/');
  if (!(ratio.length !== 2 && parseInt(ratio[0], 10) && parseInt(ratio[1], 10))) {
    throw Error('Ratio should be in the form "width/height" ');
  }
}

export const useAspectRatio: boolean = (ratio: string) =>
  validateRatio(ratio) && useMatchMedia(`(aspect-ratio: ${ratio} )`);
export const useMinAspectRatio: boolean = (ratio: string) =>
  validateRatio(ratio) && useMatchMedia(`(min-aspect-ratio: ${ratio} )`);
export const useMaxAspectRatio: boolean = (ratio: string) =>
  validateRatio(ratio) && useMatchMedia(`(min-aspect-ratio: ${ratio} )`);
