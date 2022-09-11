import {toPrecision} from '../utils';

describe('toPrecision', () => {
  it('given number of deciaml points toPrecision should format the precision', () => {
    expect(toPrecision(7.562, 2)).toEqual('7.6');
  });
});
