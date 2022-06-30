import type { Border } from '../global/border';
import type { Breakpoints } from '../global/breakpoints';
import type { Motion } from '../global/motion';
import type { Spacing } from '../global/spacing';
import type { TypographyWithPlatforms } from '../global/typography';

export type ColorSchemeNames = 'dark' | 'light';
export type ColorSchemeNamesInput = ColorSchemeNames | 'system';

export type ColorSchemeModes = 'onDark' | 'onLight';

export type ShadowLevels = 1 | 2 | 3 | 4 | 5;

export type TextTypes = 'muted' | 'normal' | 'placeholder' | 'subdued' | 'subtle';

export type ColorContrastTypes = 'low' | 'high';

export type Shadows = {
  offsetX: {
    level: Record<ShadowLevels, number>;
  };
  offsetY: {
    level: Record<ShadowLevels, number>;
  };
  blurRadius: {
    level: Record<ShadowLevels, number>;
  };
  color: Record<
    ColorSchemeModes,
    {
      level: Record<ShadowLevels, string>;
    }
  >;
  androidElevation: {
    level: Record<ShadowLevels, number>;
  };
};

export type Feedback = 'information' | 'negative' | 'neutral' | 'notice' | 'positive';

export type ColorContrast = {
  [K in ColorContrastTypes as `${Extract<K, string>}Contrast`]: string;
};

export type ActionStates = {
  default: string;
  hover: string;
  focus: string;
  active: string;
  disabled: string;
};

export type ActionStatesWithContrast = {
  default: ColorContrast;
  hover: ColorContrast;
  focus: ColorContrast;
  active: ColorContrast;
  disabled: ColorContrast;
};

// export type ActionStates = {
//   default: ColorContrast;
//   hover: ColorContrast;
//   focus: ColorContrast;
//   active: ColorContrast;
//   disabled: ColorContrast;
// };

export type ActionVariants = {
  primary: ActionStates;
  secondary: ActionStates;
  tertiary: ActionStates;
  link: ActionStates;
};

export type ActionVariantsWithContrast = {
  primary: ActionStatesWithContrast;
  secondary: ActionStatesWithContrast;
  tertiary: ActionStatesWithContrast;
  link: ActionStatesWithContrast;
};

// export type ActionProperties = {
//   background: ActionVariants;
//   border: ActionVariants;
//   text: ActionVariants;
//   icon: ActionVariants;
// };

export type FeedbackActions = {
  background: Pick<ActionVariantsWithContrast, 'primary'>;
  border: Pick<ActionVariantsWithContrast, 'primary'>;
  text: Pick<ActionVariantsWithContrast, 'link' | 'primary'>;
  icon: Pick<ActionVariantsWithContrast, 'link' | 'primary'>;
};

export type Colors = {
  brand: {
    primary: Record<300 | 400 | 500 | 600 | 700, string>;
    secondary: Record<500, string>;
    gray: Record<200 | 300 | 400 | 500 | 600 | 700, string>;
  };
  feedback: {
    background: Record<Feedback, ColorContrast>;
    border: Record<Feedback, ColorContrast>;
    text: Record<Feedback, ColorContrast>;
    icon: Record<Feedback, ColorContrast>;
    positive: {
      action: FeedbackActions;
    };
    negative: {
      action: FeedbackActions;
    };
    information: {
      action: FeedbackActions;
    };
    notice: {
      action: FeedbackActions;
    };
    neutral: {
      action: FeedbackActions;
    };
  };
  surface: {
    background: Record<'level1' | 'level2' | 'level3', ColorContrast>;
    border: Record<'normal' | 'subtle', ColorContrast>;
    text: Record<TextTypes, ColorContrast>;
    // action: {
    //   icon: Pick<ActionStates, 'link'>;
    // };
  };
  overlay: Record<'background', string>;
  action: {
    background: Omit<ActionVariants, 'link'>;
    border: Omit<ActionVariants, 'link'>;
    text: ActionVariants;
    icon: ActionVariants;
  };
};

export type ColorsWithModes = Record<ColorSchemeModes, Colors>;

export type ThemeTokens = {
  border: Border;
  breakpoints: Breakpoints;
  colors: ColorsWithModes;
  motion: Motion;
  spacing: Spacing;
  shadows: Shadows;
  typography: TypographyWithPlatforms;
};

export type SpacingValues = `${Spacing[keyof Spacing]}px`;
export type BorderWidthValues = `${Border['width'][keyof Border['width']]}px`;
export type BorderRadiusValues =
  | `${Border['radius'][Exclude<keyof Border['radius'], 'round'>]}px`
  | `${Border['radius'][Extract<keyof Border['radius'], 'round'>]}`;
