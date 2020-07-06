import { hasCorrectLines } from '../src/index'; 
import {EOL} from 'os';

const validPoem =  `If ice cream could be grown on the tree top,
Tiny tummies would be liking it lots.
Any fruit flavour
For all to savour.
Do stop by at the ice cream tree shop.`


describe('hasCorrectLines', () => {
  describe('should return true given a valid string', () => {
    test('without excess padding', () => {
      expect(hasCorrectLines(validPoem)).toBeTruthy();
    });

    test('with leading newlines', () => {
      expect(hasCorrectLines(`${EOL}${validPoem}`)).toBeTruthy();
    });

    test('with trailing newlines', () => {
      expect(hasCorrectLines(`${validPoem}${EOL}`)).toBeTruthy();
    });

    test('with leading and trailing newlines', () => {
      expect(hasCorrectLines(`${EOL}${validPoem}${EOL}`)).toBeTruthy();
    });
  });

  describe('return false given a string that is invalid because', () => {
    test('the string is null', () => {
      expect(hasCorrectLines(null as any as string)).toBeFalsy();
    });

    test('the string is empty', () => {
      expect(hasCorrectLines('')).toBeFalsy();
    });

    [1, 2, 3, 4, 6, 10, 100].forEach(lines => {
      test(`the string has ${lines} lines`, () => {
        const poem = new Array<string>(lines);
        poem.fill('If ice cream could be grown on the tree top,');
        expect(hasCorrectLines(poem.join(EOL))).toBeFalsy();
      });
    });
  });
});
