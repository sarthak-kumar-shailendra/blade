import React from 'react';
import { TextInput } from './TextInput';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  TextInput,
  'https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=77380-13131&m=dev',
  {
    props: {
      // TODO: Figure out how to handle conditional properties from figma
      // showLink773806: figma.boolean("showLink"),
      // showSuffixIcon773803: figma.boolean("showSuffixIcon"),
      // suffixIcon773800: figma.instance("suffixIcon"),
      // showPrefixText726611550: figma.boolean('showPrefixText'),
      // suffixText726611400: figma.string('suffixText'),
      // prefixIcon726611500: figma.instance('prefixIcon'),
      // showSuffixText726611450: figma.boolean('showSuffixText'),
      // showPrefixIcon726611475: figma.boolean('showPrefixIcon'),
      // prefixText726611525: figma.string('prefixText'),
      // showLabel726611300: figma.boolean('showLabel'),
      // showPrefix726611350: figma.boolean('showPrefix'),
      // showHelpText726611325: figma.boolean('showHelpText'),
      // showSuffix726611375: figma.boolean('showSuffix'),
      // prefixText: figma.string('prefixText'),
      placeholder: figma.string('placeholder'),
      size: figma.enum('size', {
        Medium: 'medium',
        Large: 'large',
      }),
      value: figma.string('value'),
      isDisabled: figma.boolean('isDisabled'),
      isLoading: figma.boolean('isLoading'),
      validationState: figma.enum('validationState', {
        Success: 'success',
        Error: 'error',
      }),
      labelPosition: figma.enum('labelPosition', {
        Top: 'top',
        Left: 'left',
      }),
    },
    example: ({ ...props }) => (
      <TextInput
        {...props}
        // prefix=""
        // errorText=""
        // helpText=""
        // successText=""
        // isRequired={false}
        // leadingIcon={}
        // trailingIcon={}
        /* more props in storybook documentation */
      />
    ),
  },
);
