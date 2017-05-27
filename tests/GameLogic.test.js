import GameLogic from 'GameLogic';

console.log('logic', GameLogic);

describe('Test Game Logic', () => {
  it('return a random number less than the length of the given array', () => {
    const testArr = [1, 2, 3, 4, 5, 6];
    const actual = GameLogic.pickAtRandom(testArr);
    const expected = testArr.length;
    expect(actual).toBeLessThan(expected);
  });
});
