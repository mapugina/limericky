import { syllablesCount } from '../src/syllablesCount';

describe('#syllablesInLine', () => {
  describe('should return the number of syllables', () => {
    test('in an empty string as zero', () => {
      expect(syllablesCount('')).toEqual(0);
    });

    test('in a passed word', () => {
      const line = 'the';
      expect(syllablesCount('the')).toEqual(1);
    });

    test('in a line', () => {
        const line = 'the sweet puppy dog';
        expect(syllablesCount(line)).toEqual(5);
      });

    test('in a multi-line poem', () => {
        const poem = 'the sweet puppy dog,\nSmelled like a hog.';
        expect(syllablesCount(poem)).toEqual(9);
    });

    test('in an unreccognized word provided with an override', () => {
        const word = 'totalnonsense';
        const syllablesInMadeUpWord = 4;
        const overrides = {
            [word]: syllablesInMadeUpWord
        };
        expect(syllablesCount(word, overrides)).toEqual(syllablesInMadeUpWord);
    });

    test('in a line with unreccognized words provided with an override', () => {
        const poem = 'the sweet little totalnonsense,\nSmelled like a hog.';
        const overrides = {
            totalnonsense: 4
        };
        expect(syllablesCount(poem, overrides)).toEqual(12);
    });

    test('in a line with multiple unreccognized words provided with an override', () => {
      const poem = 'the sweet totalnonsense';
      const overrides = {
          totalnonsense: 4,
          sweet: 0,
          the: 0
      };
      expect(syllablesCount(poem, overrides)).toEqual(4);
  });
  });
});
