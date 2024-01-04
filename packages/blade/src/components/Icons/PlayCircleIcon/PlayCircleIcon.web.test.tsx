import PlayCircleIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<PlayCircleIcon />', () => {
  it('should render PlayCircleIcon', () => {
    const { container } = renderWithTheme(
      <PlayCircleIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
