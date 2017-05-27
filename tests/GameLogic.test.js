import * as logic from './../components/GameLogic.js';

describe('Test Game Logic', () => {
  const testArr = [1, 2, 3, 4, 5, 6];
  const testArr2 = [2, 2, 3, 4, 5, 6];
  it('return a random number less than the length of the given array', () => {
    const actual = logic.pickAtRandom(testArr);
    const expected = testArr.length;
    expect(actual).toBeLessThan(expected);
  });
  it('add elements of an array', () => {
    const actual = logic.sum(testArr);
    const expected = 21;
    expect(actual).toEqual(expected);
  });

  it('sorts an array of arrays', () => {
    const sortObj = {
      high: 1,
      medium: 2,
      low: 3,
    };
    const twoDArray = [
      [{ test: 'medium' }, { test: 'high' }],
      [{ test: 'low' }, { test: 'high' }],
    ];
    const actual = logic.sortScores(twoDArray, sortObj);
    console.log('actual', actual);
    //expect(twoDArray)
  });
  it('Checks if there are duplicates in an array', () => {
    const actual = logic.checkDuplicates(testArr);
    const nextActual = logic.checkDuplicates(testArr2);
    expect(actual).toBe(false);
    expect(nextActual).toBe(true);
  });
});
