import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const PhoneOutgoingIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 2C15 1.44772 15.4477 1 16 1H22C22.5523 1 23 1.44772 23 2V8C23 8.55228 22.5523 9 22 9C21.4477 9 21 8.55228 21 8V4.41421L15.7071 9.70711C15.3166 10.0976 14.6834 10.0976 14.2929 9.70711C13.9024 9.31658 13.9024 8.68342 14.2929 8.29289L19.5858 3H16C15.4477 3 15 2.55228 15 2Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.99996 2C2.28482 2 1.47945 2.25294 0.883051 2.8182C0.253692 3.41469 -0.0695435 4.2942 0.130507 5.3318C0.480716 8.56092 1.58268 11.6633 3.34828 14.39C4.96126 16.9272 7.11256 19.0785 9.64971 20.6915C12.377 22.4593 15.4808 23.5631 18.7119 23.9141L18.7209 23.9151L18.73 23.9159C19.5446 23.9896 20.3527 23.7273 20.9683 23.1922C21.4415 22.8538 22 22.1 22 21V17.9312C22.0308 16.4142 20.9235 15.1119 19.4197 14.8998L19.4107 14.8986C18.5258 14.7819 17.6569 14.5655 16.8206 14.2535C15.7246 13.842 14.4893 14.1057 13.6568 14.9289L13.6529 14.9329L12.9358 15.65C11.0911 14.4741 9.52583 12.9088 8.34997 11.0642L9.06708 10.3471L9.07101 10.3431C9.89423 9.51066 10.1579 8.27536 9.74647 7.17935C9.43449 6.34306 9.21809 5.47417 9.10137 4.58924L9.09536 4.54368L9.0852 4.49887C8.98842 4.07204 8.74141 3.47998 8.28724 2.97575C7.81222 2.44835 7.0887 2 6.10996 2H2.99996ZM2.09885 4.97561C2.01626 4.58008 2.13282 4.38926 2.25886 4.2698C2.42845 4.10906 2.71509 4 2.99996 4H6.10996C6.41921 4 6.6307 4.12499 6.80117 4.31425C6.97819 4.51078 7.08472 4.75483 7.12598 4.90627C7.26412 5.92193 7.51467 6.91916 7.87306 7.8796L7.87391 7.88186C8.011 8.24658 7.92376 8.65764 7.65052 8.93522L6.38285 10.2029C6.06454 10.5212 5.99815 11.013 6.22066 11.4043C7.73319 14.0643 9.93565 16.2668 12.5957 17.7793C12.987 18.0018 13.4788 17.9354 13.7971 17.6171L15.0647 16.3494C15.3423 16.0762 15.7534 15.989 16.1181 16.1261L16.1204 16.1269C17.0966 16.4912 18.1109 16.7441 19.1439 16.8807C19.6448 16.9532 20.0128 17.3888 20.0003 17.8952L20 17.9076V21C20 21.2133 19.944 21.3589 19.891 21.4506C19.8634 21.4985 19.8359 21.5325 19.8166 21.553C19.8149 21.5548 19.8133 21.5564 19.8119 21.5579C19.8095 21.5603 19.8075 21.5623 19.8058 21.5639L19.7452 21.6015L19.676 21.665C19.4704 21.8536 19.1954 21.9477 18.9175 21.9247C15.9996 21.606 13.1969 20.6081 10.7341 19.0109L10.7263 19.006C8.43401 17.5494 6.4906 15.6059 5.034 13.3137L5.02924 13.3063C3.42461 10.8293 2.42602 8.00921 2.11437 5.0744L2.10908 5.02462L2.09885 4.97561Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default PhoneOutgoingIcon;
