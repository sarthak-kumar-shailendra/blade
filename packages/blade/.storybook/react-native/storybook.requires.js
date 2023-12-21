/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src",
    files: "**/!(_KitchenSink)*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?:(?!(?:_KitchenSink))[^/]*?)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./src",
    files: "**/*.stories.internal.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.internal\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/preview";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/components/Accordion/Accordion.stories.tsx": require("../../src/components/Accordion/Accordion.stories.tsx"),
    "./src/components/ActionList/ActionList.stories.tsx": require("../../src/components/ActionList/ActionList.stories.tsx"),
    "./src/components/Alert/Alert.stories.tsx": require("../../src/components/Alert/Alert.stories.tsx"),
    "./src/components/Amount/Amount.stories.tsx": require("../../src/components/Amount/Amount.stories.tsx"),
    "./src/components/Badge/Badge.stories.tsx": require("../../src/components/Badge/Badge.stories.tsx"),
    "./src/components/BaseHeaderFooter/BaseHeaderFooter.internal.stories.tsx": require("../../src/components/BaseHeaderFooter/BaseHeaderFooter.internal.stories.tsx"),
    "./src/components/BottomSheet/BottomSheet.stories.tsx": require("../../src/components/BottomSheet/BottomSheet.stories.tsx"),
    "./src/components/Box/BaseBox/BaseBox.internal.stories.tsx": require("../../src/components/Box/BaseBox/BaseBox.internal.stories.tsx"),
    "./src/components/Box/Box.stories.tsx": require("../../src/components/Box/Box.stories.tsx"),
    "./src/components/Box/styledProps/StyledProps.stories.tsx": require("../../src/components/Box/styledProps/StyledProps.stories.tsx"),
    "./src/components/Button/BaseButton/BaseButton.internal.stories.tsx": require("../../src/components/Button/BaseButton/BaseButton.internal.stories.tsx"),
    "./src/components/Button/Button/Button.stories.tsx": require("../../src/components/Button/Button/Button.stories.tsx"),
    "./src/components/Button/IconButton/IconButton.stories.tsx": require("../../src/components/Button/IconButton/IconButton.stories.tsx"),
    "./src/components/Card/Card.stories.tsx": require("../../src/components/Card/Card.stories.tsx"),
    "./src/components/Card/CardInteractive.stories.tsx": require("../../src/components/Card/CardInteractive.stories.tsx"),
    "./src/components/Carousel/Carousel.stories.tsx": require("../../src/components/Carousel/Carousel.stories.tsx"),
    "./src/components/Checkbox/Checkbox.stories.tsx": require("../../src/components/Checkbox/Checkbox.stories.tsx"),
    "./src/components/Checkbox/CheckboxGroup.stories.tsx": require("../../src/components/Checkbox/CheckboxGroup.stories.tsx"),
    "./src/components/Chip/Chip.stories.tsx": require("../../src/components/Chip/Chip.stories.tsx"),
    "./src/components/Chip/ChipGroup.stories.tsx": require("../../src/components/Chip/ChipGroup.stories.tsx"),
    "./src/components/Collapsible/Collapsible.stories.tsx": require("../../src/components/Collapsible/Collapsible.stories.tsx"),
    "./src/components/Counter/Counter.stories.tsx": require("../../src/components/Counter/Counter.stories.tsx"),
    "./src/components/Divider/Divider.stories.tsx": require("../../src/components/Divider/Divider.stories.tsx"),
    "./src/components/Dropdown/docs/DropdownWithAutoComplete.stories.tsx": require("../../src/components/Dropdown/docs/DropdownWithAutoComplete.stories.tsx"),
    "./src/components/Dropdown/docs/DropdownWithButton.stories.tsx": require("../../src/components/Dropdown/docs/DropdownWithButton.stories.tsx"),
    "./src/components/Dropdown/docs/DropdownWithSelect.stories.tsx": require("../../src/components/Dropdown/docs/DropdownWithSelect.stories.tsx"),
    "./src/components/Icons/Icons.stories.tsx": require("../../src/components/Icons/Icons.stories.tsx"),
    "./src/components/Indicator/Indicator.stories.tsx": require("../../src/components/Indicator/Indicator.stories.tsx"),
    "./src/components/Input/BaseInput/BaseInput.stories.tsx": require("../../src/components/Input/BaseInput/BaseInput.stories.tsx"),
    "./src/components/Input/DropdownInputTriggers/AutoComplete.stories.tsx": require("../../src/components/Input/DropdownInputTriggers/AutoComplete.stories.tsx"),
    "./src/components/Input/DropdownInputTriggers/SelectInput.stories.tsx": require("../../src/components/Input/DropdownInputTriggers/SelectInput.stories.tsx"),
    "./src/components/Input/OTPInput/OTPInput.stories.tsx": require("../../src/components/Input/OTPInput/OTPInput.stories.tsx"),
    "./src/components/Input/PasswordInput/PasswordInput.stories.tsx": require("../../src/components/Input/PasswordInput/PasswordInput.stories.tsx"),
    "./src/components/Input/TextArea/TextArea.stories.tsx": require("../../src/components/Input/TextArea/TextArea.stories.tsx"),
    "./src/components/Input/TextInput/TextInput.stories.tsx": require("../../src/components/Input/TextInput/TextInput.stories.tsx"),
    "./src/components/Link/BaseLink/BaseLink.stories.tsx": require("../../src/components/Link/BaseLink/BaseLink.stories.tsx"),
    "./src/components/Link/Link/Link.stories.tsx": require("../../src/components/Link/Link/Link.stories.tsx"),
    "./src/components/List/List.stories.tsx": require("../../src/components/List/List.stories.tsx"),
    "./src/components/Modal/docs/ModalExamples.stories.tsx": require("../../src/components/Modal/docs/ModalExamples.stories.tsx"),
    "./src/components/Modal/docs/SimpleModal.stories.tsx": require("../../src/components/Modal/docs/SimpleModal.stories.tsx"),
    "./src/components/Popover/Popover.stories.tsx": require("../../src/components/Popover/Popover.stories.tsx"),
    "./src/components/ProgressBar/ProgressBar.stories.tsx": require("../../src/components/ProgressBar/ProgressBar.stories.tsx"),
    "./src/components/Radio/Radio.stories.tsx": require("../../src/components/Radio/Radio.stories.tsx"),
    "./src/components/Skeleton/Skeleton.stories.tsx": require("../../src/components/Skeleton/Skeleton.stories.tsx"),
    "./src/components/SkipNav/SkipNav.stories.tsx": require("../../src/components/SkipNav/SkipNav.stories.tsx"),
    "./src/components/Spinner/BaseSpinner/BaseSpinner.stories.tsx": require("../../src/components/Spinner/BaseSpinner/BaseSpinner.stories.tsx"),
    "./src/components/Spinner/Spinner/Spinner.stories.tsx": require("../../src/components/Spinner/Spinner/Spinner.stories.tsx"),
    "./src/components/SpotlightPopoverTour/docs/Tour.stories.tsx": require("../../src/components/SpotlightPopoverTour/docs/Tour.stories.tsx"),
    "./src/components/Switch/Switch.stories.tsx": require("../../src/components/Switch/Switch.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableBodyAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableBodyAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableCellAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableCellAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableFooterAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableFooterAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableFooterCellAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableFooterCellAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableFooterRowAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableFooterRowAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableHeaderAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableHeaderAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableHeaderCellAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableHeaderCellAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableHeaderRowAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableHeaderRowAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TablePaginationAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TablePaginationAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableRowAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableRowAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableToolbarActionsAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableToolbarActionsAPI.stories.tsx"),
    "./src/components/Table/docs/APIStories/TableToolbarAPI.stories.tsx": require("../../src/components/Table/docs/APIStories/TableToolbarAPI.stories.tsx"),
    "./src/components/Table/docs/BasicTable.stories.tsx": require("../../src/components/Table/docs/BasicTable.stories.tsx"),
    "./src/components/Table/docs/TableExamples.stories.tsx": require("../../src/components/Table/docs/TableExamples.stories.tsx"),
    "./src/components/Tabs/Tabs.stories.tsx": require("../../src/components/Tabs/Tabs.stories.tsx"),
    "./src/components/Tag/Tag.stories.tsx": require("../../src/components/Tag/Tag.stories.tsx"),
    "./src/components/Tooltip/Tooltip.stories.tsx": require("../../src/components/Tooltip/Tooltip.stories.tsx"),
    "./src/components/Typography/BaseText/BaseText.stories.tsx": require("../../src/components/Typography/BaseText/BaseText.stories.tsx"),
    "./src/components/Typography/Code/Code.stories.tsx": require("../../src/components/Typography/Code/Code.stories.tsx"),
    "./src/components/Typography/Display/Display.stories.tsx": require("../../src/components/Typography/Display/Display.stories.tsx"),
    "./src/components/Typography/Heading/Heading.stories.tsx": require("../../src/components/Typography/Heading/Heading.stories.tsx"),
    "./src/components/Typography/Text/Text.stories.tsx": require("../../src/components/Typography/Text/Text.stories.tsx"),
    "./src/components/Typography/Title/Title.stories.tsx": require("../../src/components/Typography/Title/Title.stories.tsx"),
    "./src/components/VisuallyHidden/VisuallyHidden.stories.tsx": require("../../src/components/VisuallyHidden/VisuallyHidden.stories.tsx"),
    "./src/storybook-recipes/AccessibilityInterop/AccessibilityInteropDemo.stories.tsx": require("../../src/storybook-recipes/AccessibilityInterop/AccessibilityInteropDemo.stories.tsx"),
    "./src/storybook-recipes/SimpleDashboard.stories.tsx": require("../../src/storybook-recipes/SimpleDashboard.stories.tsx"),
    "./src/storybook-recipes/SimpleForm.stories.tsx": require("../../src/storybook-recipes/SimpleForm.stories.tsx"),
  };
};

configure(getStories, module, false);
