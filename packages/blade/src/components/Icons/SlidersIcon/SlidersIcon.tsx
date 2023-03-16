import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const SlidersIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 2C4.55228 2 5 2.44772 5 3V10C5 10.5523 4.55228 11 4 11C3.44772 11 3 10.5523 3 10V3C3 2.44772 3.44772 2 4 2Z"
        fill={iconColor}
      />
      <Path
        d="M5 15H7C7.55228 15 8 14.5523 8 14C8 13.4477 7.55228 13 7 13H1C0.447715 13 0 13.4477 0 14C0 14.5523 0.447715 15 1 15H3V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V15Z"
        fill={iconColor}
      />
      <Path
        d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V12Z"
        fill={iconColor}
      />
      <Path
        d="M12 2C12.5523 2 13 2.44772 13 3V7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H9C8.44771 9 8 8.55228 8 8C8 7.44772 8.44771 7 9 7H11V3C11 2.44772 11.4477 2 12 2Z"
        fill={iconColor}
      />
      <Path
        d="M23 15C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17H21V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V17H17C16.4477 17 16 16.5523 16 16C16 15.4477 16.4477 15 17 15H23Z"
        fill={iconColor}
      />
      <Path
        d="M20 2C20.5523 2 21 2.44772 21 3V12C21 12.5523 20.5523 13 20 13C19.4477 13 19 12.5523 19 12V3C19 2.44772 19.4477 2 20 2Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default SlidersIcon;
