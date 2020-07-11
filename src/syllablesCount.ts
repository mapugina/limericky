import syllable = require('syllable');

/**
 * Counts the syllables in the string
 * @param   poem    The poem to count the syllables for.
 * @param   extendedDictonary   An object that allows custom words to try. Keys
 *                              will have casing removed,
 */
export function syllablesCount(poem: string, extendedDictonary: { [key: string]: number } = {}): number {
  const words = poem.split(/\s+/g);
  const punctionStripper = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  const spaceStripper = /\s{2,}/g;

  let count = 0;

  for (const s of words) {
    const punctuationless = s.replace(punctionStripper, '');
    const word = punctuationless.replace(spaceStripper, ' ');

    const override = extendedDictonary[word];
    if (override !== undefined) {
      count += extendedDictonary[word];
      continue;
    }

    count += syllable(word);
  }

  return count;
}
