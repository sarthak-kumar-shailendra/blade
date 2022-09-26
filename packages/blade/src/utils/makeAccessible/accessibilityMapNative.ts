import type { AccessibilityMap } from './types';

export const accessibilityValue = {
  valueMax: 'max',
  valueMin: 'min',
  valueNow: 'now',
  valueText: 'text',
};

export const accessibilityState = {
  selected: 'selected',
  disabled: 'disabled',
  expanded: 'expanded',
  busy: 'busy',
  checked: 'checked',
};

export const accessibilityValueKeys = Object.keys(accessibilityValue);
export const accessibilityStateKeys = Object.keys(accessibilityState);

// TODO:
// accessibilityViewIsModal
export const accessibilityMap: AccessibilityMap = {
  ...accessibilityState,
  ...accessibilityValue,
  activeDescendant: 'accessibilityActiveDescendant',
  atomic: 'accessibilityAtomic',
  autoComplete: 'accessibilityAutoComplete',
  colCount: 'accessibilityColCount',
  colIndex: 'accessibilityColIndex',
  colSpan: 'accessibilityColSpan',
  controls: 'accessibilityControls',
  describedBy: 'accessibilityDescribedBy',
  details: 'accessibilityDetails',
  errorMessage: 'accessibilityErrorMessage',
  flowTo: 'accessibilityFlowTo',
  hasPopup: 'accessibilityHasPopup',
  hidden: 'accessibilityHidden',
  invalid: 'accessibilityInvalid',
  keyShortcuts: 'accessibilityKeyShortcuts',
  label: 'accessibilityLabel',
  labelledBy: 'accessibilityLabelledBy',
  liveRegion: 'accessibilityLiveRegion',
  modal: 'accessibilityModal',
  multiline: 'accessibilityMultiline',
  multiSelectable: 'accessibilityMultiSelectable',
  orientation: 'accessibilityOrientation',
  owns: 'accessibilityOwns',
  placeholder: 'accessibilityPlaceholder',
  posInSet: 'accessibilityPosInSet',
  pressed: 'accessibilityPressed',
  readOnly: 'accessibilityReadOnly',
  required: 'accessibilityRequired',
  role: 'accessibilityRole',
  roleDescription: 'accessibilityRoleDescription',
  rowCount: 'accessibilityRowCount',
  rowIndex: 'accessibilityRowIndex',
  rowSpan: 'accessibilityRowSpan',
  setSize: 'accessibilitySetSize',
  sort: 'accessibilitySort',
  current: 'accessibilityCurrent',
  dropEffect: 'accessibilityDropEffect',
  grabbed: 'accessibilityGrabbed',
  level: 'accessibilityLevel',
  relevant: 'accessibilityRelevant',
};

export const accessibilityRoleMap = {
  alert: 'alert',
  button: 'button',
  checkbox: 'checkbox',
  combobox: 'combobox',
  image: 'image',
  link: 'link',
  menu: 'menu',
  menubar: 'menubar',
  menuitem: 'menuitem',
  progressbar: 'progressbar',
  radio: 'radio',
  radiogroup: 'radiogroup',
  scrollbar: 'scrollbar',
  search: 'search',
  spinbutton: 'spinbutton',
  switch: 'switch',
  tab: 'tab',
  tablist: 'tablist',
  timer: 'timer',
  togglebutton: 'togglebutton',
  toolbar: 'toolbar',
  heading: 'header',
  // mapped from web to native
  slider: 'adjustable',
  img: 'image',
  presentation: 'none',
  region: 'summary',
  imagebutton: 'imagebutton',
  keyboardkey: 'keyboardkey',
  label: 'label',
  text: 'text',
};
