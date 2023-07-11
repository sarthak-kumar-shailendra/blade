import CastIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<CastIcon />', () => {
  it('should render CastIcon', () => {
    const renderTree = renderWithTheme(
      <CastIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
