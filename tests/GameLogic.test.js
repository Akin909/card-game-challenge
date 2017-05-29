import * as logic from './../src/components/GameLogic.js';

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
    //TODO figure out why this test fails
    const sort = ['high', 'medium', 'low'];
    const twoDArray = [
      [{ test: 'medium' }, { test: 'high' }],
      [{ test: 'low' }, { test: 'high' }]
    ];
    const actual = logic.sortScores(twoDArray, sort);
    actual.forEach(array => {
      expect(array[0].test).toEqual('high');
    });
  });

  it('returns true if there are no duplicates', () => {
    const actual = logic.isUnique(testArr);
    expect(actual).toBe(true);
  });

  it('returns false if there are duplicates', () => {
    const actual = logic.isUnique(testArr2);
    expect(actual).toBe(false);
  });

  it('return an error if number of player an cards are too high', () => {
    const actual = logic.dealCards({ test: 'test stuff' }, 400, [], 40);
    const errorMessage = `There won't be enough cards for everybody 🙇🏾`;
    expect(actual.message).toBe(errorMessage);
  });
  it('should return the highest score', () => {
    const actual = logic.highestScore(
      [{ score: 10, player: 'john' }, { score: 20, player: 'jane' }],
      20
    );
    const expected = 'jane';
    expect(actual).toBe(expected);
  });

  it('should chunk array into subarrays of a specified length', () => {
    const actual = logic.chunkAnArray([2, 3, 4, 4], 2);
    actual.forEach(array => {
      expect(array.length).toEqual(2);
    });
  });

  it('returns the correct winner', () => {
    const actual = logic.determineWinner(
      [20, 10],
      [{ score: 10, player: 'john' }, { score: 20, player: 'jane' }]
    );
    expect(actual).toBe('jane');
  });

  it('returns a tie', () => {
    const actual = logic.determineWinner(
      [10, 10],
      [{ score: 10, player: 'john' }, { score: 10, player: 'jane' }]
    );
    expect(actual).toBe('Tie');
  });

  it('updates the scores', () => {
    const actual = logic.updateScore(
      [
        { score: 10, player: 'john', message: 'john' },
        { score: 10, player: 'jane', message: 'jane' }
      ],
      { john: { pairs: '' }, jane: {} }
    );
    actual.forEach(name => {
      if (name.player === 'john') {
        expect(name.score).toBe(20);
      }
    });
  });
});
