import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const PayrollForStartupOrSmeIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6254 1.0758C11.3444 0.226045 12.6546 0.226033 13.3736 1.07578L15.0767 3.08857C15.3252 3.38222 15.4731 3.74773 15.4986 4.13154L15.6764 6.79796L16.7956 7.63735C17.2488 7.97729 17.5156 8.51079 17.5156 9.07735V9.6838C17.5156 10.6779 16.7097 11.4838 15.7156 11.4838H8.28343C7.28932 11.4838 6.48343 10.6779 6.48343 9.6838V9.07735C6.48343 8.51079 6.75018 7.97729 7.20343 7.63735L8.32262 6.79796L8.50039 4.13154C8.52597 3.74774 8.67383 3.38222 8.9223 3.08858C8.9223 3.08858 8.9223 3.08858 8.9223 3.08857L10.6254 1.0758ZM15.603 6.74287C15.6031 6.74295 15.6032 6.74303 15.6033 6.7431L15.603 6.74287ZM11.9995 2.5481L10.4916 4.33023L10.3121 7.0226C10.2772 7.546 10.0157 8.02814 9.59607 8.34287L8.48343 9.17735V9.4838H15.5156V9.17735L14.4029 8.34287C13.9833 8.02813 13.7218 7.546 13.6869 7.0226L13.5074 4.33023L11.9995 2.5481ZM5 2.99994C4.44771 2.99994 4 3.44766 4 3.99994V21.3764L6.39249 18.6939C7.43696 17.5228 9.27292 17.5368 10.2994 18.7237L11.8651 20.534C12.0645 20.7645 12.422 20.7645 12.6214 20.534L14.2852 18.6102C15.2626 17.4802 17.0238 17.5081 17.9647 18.6686L20 21.1788V3.99994C20 3.44766 19.5523 2.99994 19 2.99994H16.5C15.9477 2.99994 15.5 2.55223 15.5 1.99994C15.5 1.44766 15.9477 0.999941 16.5 0.999941H19C20.6569 0.999941 22 2.34309 22 3.99994V21.1788C22 23.0628 19.633 23.9018 18.4465 22.4384L16.4112 19.9282C16.2544 19.7348 15.9609 19.7302 15.798 19.9185L14.1342 21.8423C13.1371 22.9951 11.3494 22.9951 10.3523 21.8423L8.78667 20.032C8.54979 19.7581 8.12611 19.7549 7.88508 20.0251L5.49259 22.7076C4.26959 24.0788 2 23.2137 2 21.3764V3.99994C2 2.34309 3.34315 0.999941 5 0.999941H7.5C8.05228 0.999941 8.5 1.44766 8.5 1.99994C8.5 2.55223 8.05228 2.99994 7.5 2.99994H5ZM11.9996 12.5621C12.5519 12.5621 12.9996 13.0098 12.9996 13.5621L12.9995 16.9587C12.9995 17.511 12.5518 17.9587 11.9995 17.9587C11.4472 17.9587 10.9995 17.5109 10.9995 16.9587L10.9996 13.5621C10.9996 13.0098 11.4474 12.5621 11.9996 12.5621ZM14.5622 12.5622C15.1145 12.5625 15.562 13.0104 15.5617 13.5627L15.5613 14.4592C15.5611 15.0115 15.1132 15.459 14.5609 15.4587C14.0086 15.4585 13.5611 15.0106 13.5613 14.4583L13.5617 13.5618C13.562 13.0095 14.0099 12.562 14.5622 12.5622ZM9.43712 12.5623C9.98941 12.5623 10.4371 13.01 10.4371 13.5623V15.2706C10.4371 15.8228 9.98941 16.2706 9.43712 16.2706C8.88484 16.2706 8.43712 15.8228 8.43712 15.2706V13.5623C8.43712 13.01 8.88484 12.5623 9.43712 12.5623Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default PayrollForStartupOrSmeIcon;
