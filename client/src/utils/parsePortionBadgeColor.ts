/**
 * @name parsePortionBadgeColor
 * @type {Function}
 * @description returns the color value for a badge representing the portion.
 * @returns {string}
 */

export const parsePortionBadgeColor = (val: string): string => {
  if (val === "regular") return "green";
  if (val === "extra") return "red";
  else return "gray";
};
