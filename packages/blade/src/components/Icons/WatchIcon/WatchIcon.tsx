import { Svg, G, Path, Defs, ClipPath, Rect } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const WatchIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_60_398)">
        <Path
          d="M13 9C13 8.44771 12.5523 8 12 8C11.4477 8 11 8.44771 11 9V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L12.7929 14.2071C13.1834 14.5976 13.8166 14.5976 14.2071 14.2071C14.5976 13.8166 14.5976 13.1834 14.2071 12.7929L13 11.5858V9Z"
          fill={iconColor}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.18 0H9.82999C8.27904 0.00146073 6.98392 1.18543 6.84405 2.73L6.53044 6.16183C4.97305 7.62147 4 9.6971 4 12C4 14.3029 4.97305 16.3785 6.53044 17.8382L6.84405 21.27C6.98392 22.8146 8.27904 23.9985 9.82999 24H14.18C14.4145 24 14.7429 23.9606 15.0843 23.8565C15.4071 23.758 15.8106 23.5806 16.1549 23.2577C16.5455 22.9439 17.086 22.2545 17.1758 21.271L17.4914 17.8176C19.036 16.3591 20 14.2921 20 12C20 9.7079 19.036 7.64093 17.4914 6.18239L17.1758 2.729C17.086 1.74552 16.5455 1.05606 16.1549 0.742309C15.8106 0.419433 15.4071 0.241973 15.0843 0.143508C14.7429 0.03936 14.4145 -2.086e-06 14.18 0ZM15.3507 4.73337L15.1841 2.91101C15.1678 2.73272 15.1076 2.58488 15.0381 2.47143C14.9797 2.37626 14.9266 2.32408 14.913 2.31074C14.9088 2.30665 14.9084 2.30621 14.9127 2.30934L14.8488 2.26296L14.7929 2.20709C14.748 2.16222 14.6531 2.10298 14.5007 2.05647C14.3504 2.01063 14.2188 2 14.18 2H9.83061C9.3137 2.00065 8.88246 2.39516 8.83593 2.91L8.67018 4.72378C9.68402 4.25906 10.8118 4 12 4C13.1964 4 14.3315 4.26263 15.3507 4.73337ZM8.83593 21.09L8.67018 19.2762C9.68402 19.7409 10.8118 20 12 20C13.1964 20 14.3315 19.7374 15.3507 19.2666L15.1841 21.089C15.1678 21.2673 15.1076 21.4151 15.0381 21.5286C14.9797 21.6237 14.9266 21.6759 14.913 21.6893C14.9089 21.6933 14.9084 21.6938 14.9126 21.6907L14.8488 21.737L14.7929 21.7929C14.748 21.8378 14.6531 21.897 14.5007 21.9435C14.3504 21.9894 14.2188 22 14.18 22H9.83061C9.3137 21.9993 8.88246 21.6048 8.83593 21.09ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z"
          fill={iconColor}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_60_398">
          <Rect width="24" height="24" fill={iconColor} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default WatchIcon;
