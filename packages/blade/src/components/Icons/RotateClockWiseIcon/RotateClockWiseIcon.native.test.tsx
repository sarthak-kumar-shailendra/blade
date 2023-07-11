import RotateClockWiseIcon from '.';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<RotateClockWiseIcon />', () => {
  it('should render RotateClockWiseIcon', () => {
    const renderTree = renderWithTheme(
      <RotateClockWiseIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
