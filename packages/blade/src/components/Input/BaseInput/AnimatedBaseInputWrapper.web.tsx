import React from 'react';
import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import BaseBox, { BaseBoxProps } from '~components/Box/BaseBox';
import { motion, size } from '~tokens/global';
import { makeMotionTime, makeSize } from '~utils';
import { BladeElementRef } from '~utils/types';

const BASEINPUT_MIN_HEIGHT = size['36'];
const BASEINPUT_BOTTOM_LINE_HEIGHT = size['1'];
const MAX_ROWS = 4;
const BASEINPUT_MAX_HEIGHT = size['36'] * MAX_ROWS; // we don't want exact number but rough number to be able to animate correctly in height.

// Define the animation keyframes
const expandAnimation = keyframes`
  from {
    max-height: ${makeSize(BASEINPUT_MIN_HEIGHT + BASEINPUT_BOTTOM_LINE_HEIGHT)};
  }
  to {
    max-height: ${makeSize(BASEINPUT_MAX_HEIGHT + BASEINPUT_BOTTOM_LINE_HEIGHT)};
  }
`;

const collapseAnimation = keyframes`
  from {
    max-height: ${makeSize(BASEINPUT_MAX_HEIGHT + BASEINPUT_BOTTOM_LINE_HEIGHT)};
  }
  to {
    max-height: ${makeSize(BASEINPUT_MIN_HEIGHT + BASEINPUT_BOTTOM_LINE_HEIGHT)};
  }
`;

const expandTransition = css`
  animation: ${expandAnimation} ${makeMotionTime(motion.duration.quick)}
    ${String(motion.easing.entrance.effective)};
`;

const collapseTransition = css`
  animation: ${collapseAnimation} ${makeMotionTime(motion.duration.quick)}
    ${String(motion.easing.exit.effective)};
`;

// Styled component with animation
const StyledAnimatedBaseInputWrapper = styled(BaseBox)<{ transition?: FlattenSimpleInterpolation }>(
  (props) => css`
    ${props.transition};
  `,
);

const _AnimatedBaseInputWrapper: React.ForwardRefRenderFunction<
  BladeElementRef,
  BaseBoxProps & {
    showAllTags?: boolean;
    setShowAllTagsWithAnimation: (showAllTagsWithAnimation: boolean) => void;
  }
> = ({ showAllTags, setShowAllTagsWithAnimation, ...baseBoxProps }, ref): React.ReactElement => {
  return (
    <StyledAnimatedBaseInputWrapper
      ref={ref as any}
      {...baseBoxProps}
      transition={showAllTags ? expandTransition : collapseTransition}
      onAnimationEnd={(e) => {
        if (!showAllTags && e.animationName === collapseAnimation.getName()) {
          setShowAllTagsWithAnimation?.(false);
        }
      }}
    ></StyledAnimatedBaseInputWrapper>
  );
};

const AnimatedBaseInputWrapper = React.forwardRef(_AnimatedBaseInputWrapper);

export { AnimatedBaseInputWrapper, expandAnimation, collapseAnimation };
