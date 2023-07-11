import TrendingUpIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<TrendingUpIcon />', () => {
  it('should render TrendingUpIcon', () => {
    const renderTree = renderWithTheme(
      <TrendingUpIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
