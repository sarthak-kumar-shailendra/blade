import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const TransactionsIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path
        d="M6.24 12.03a.878.878 0 0 1 .26.623.898.898 0 0 1-.249.627.85.85 0 0 1-.61.257.833.833 0 0 1-.606-.268L1.25 9.377a.869.869 0 0 1-.107-.134c-.014-.022-.024-.044-.036-.067a.853.853 0 0 1-.042-.084.843.843 0 0 1-.027-.087c-.007-.026-.017-.05-.022-.076a.91.91 0 0 1 0-.343c.005-.026.015-.05.022-.075a.812.812 0 0 1 .027-.087.91.91 0 0 1 .042-.085c.012-.022.022-.043.036-.066a.895.895 0 0 1 .107-.135l3.785-3.892a.84.84 0 0 1 .6-.246.84.84 0 0 1 .595.257.89.89 0 0 1 .01 1.228L3.91 7.883h9.715a.84.84 0 0 1 .602.256c.16.164.25.387.25.62 0 .232-.09.455-.25.62a.84.84 0 0 1-.602.256H3.909l2.332 2.395Zm16.617 3.674c.014-.022.024-.044.035-.067a.896.896 0 0 0 .043-.084.806.806 0 0 0 .027-.088c.007-.024.017-.049.022-.074a.912.912 0 0 0 0-.344c-.005-.026-.015-.05-.022-.075a.836.836 0 0 0-.027-.088.843.843 0 0 0-.043-.083c-.011-.023-.021-.044-.035-.067a.87.87 0 0 0-.107-.134l-3.785-3.893a.84.84 0 0 0-1.195.011.889.889 0 0 0-.25.612.89.89 0 0 0 .24.616l2.33 2.397h-9.715a.84.84 0 0 0-.602.257.889.889 0 0 0-.25.62c0 .232.09.455.25.62a.84.84 0 0 0 .602.256h9.716l-2.332 2.397a.877.877 0 0 0-.26.623.898.898 0 0 0 .25.627.85.85 0 0 0 .61.257.833.833 0 0 0 .605-.267l3.786-3.893a.894.894 0 0 0 .107-.134v-.002Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default TransactionsIcon;
