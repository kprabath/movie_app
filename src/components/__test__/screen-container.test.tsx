import {makeProps, renderWithSafeArea} from '../../library/test-utils.tsx';
import ScreenContainer from '../screen-container/screen-container';

describe('ScreenContainer', () => {
  test('should match the snapshot', () => {
    const props = makeProps();
    const componet = renderWithSafeArea(<ScreenContainer {...props} />);
    expect(componet).toMatchSnapshot();
  });
});
