import { jsxValue } from '../../utils/attributes';
import { findTextByLayerName } from '../../utils/findTextByLayerName';
import type { ServerFunctionReturnType } from '~/code/types/TransformFunction';
import type { BladeComponentInstanceNode, BladeProps } from '~/code/types/Blade';

export const transformText = (
  bladeInstance: BladeComponentInstanceNode,
): ServerFunctionReturnType => {
  const props: BladeProps = {};

  const componentProperties = bladeInstance.componentProperties;

  props.size = {
    value: jsxValue(componentProperties.size?.value).toLowerCase(),
    type: 'string',
  };

  props.type = {
    value: jsxValue(componentProperties.type?.value).toLowerCase(),
    type: 'string',
  };

  props.weight = {
    value: jsxValue(componentProperties.weight?.value).toLowerCase(),
    type: 'string',
  };

  props.contrast = {
    value: jsxValue(componentProperties.contrast?.value).toLowerCase(),
    type: 'string',
  };

  props.variant = {
    value: jsxValue(componentProperties.variant?.value).toLowerCase(),
    type: 'string',
  };

  const children = findTextByLayerName(bladeInstance, 'Text') ?? '';

  return {
    componentName: 'Text',
    props,
    children: [children],
  };
};
