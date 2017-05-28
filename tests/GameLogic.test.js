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

  it('sorts an array of arrays by specified priority', () => {
    const sort = ['high', 'medium', 'low'];
    const twoDArray = [
      [{ test: 'medium' }, { test: 'high' }],
      [{ test: 'low' }, { test: 'high' }],
    ];
    const actual = logic.sortScores(twoDArray, sort);
    console.log('actual', actual);
    //expect(twoDArray)
  });
  it('returns true if there are no duplicates', () => {
    const actual = logic.isUnique(testArr);
    expect(actual).toBe(true);
  });
  it('returns false if there are duplicates', () => {
    const actual = logic.isUnique(testArr2);
    expect(actual).toBe(false);
  });

  it('return true if the suite and card are the same', () => {});
});
