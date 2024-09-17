import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Title } from '@storybook/addon-docs';
import { Scale } from './';
import type { ScaleProps } from './';
import { Sandbox } from '~utils/storybook/Sandbox';
import StoryPageWrapper from '~utils/storybook/StoryPageWrapper';
import { Button } from '~components/Button';
import { Box } from '~components/Box';
import { InternalCardExample } from '../Card/Card.stories';

const Page = (): React.ReactElement => {
  return (
    <StoryPageWrapper
      componentName="Scale"
      componentDescription="Scale Motion Component (TODO)"
      figmaURL="https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85897&t=CvaYT53LNc4OYVKa-1&scaling=min-zoom&page-id=21689%3A381614&mode=design"
    >
      <Title>Usage</Title>
      <Sandbox>
        {`
        const todo = 'todo';
        `}
      </Sandbox>
    </StoryPageWrapper>
  );
};

export default {
  title: 'Motion/Scale',
  component: Scale,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Page,
    },
  },
} as Meta<ScaleProps>;

const ScaleTemplate: StoryFn<typeof Scale> = (args) => {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <Box minHeight="350px">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(!isVisible)}>
        Toggle Scale
      </Button>
      <Scale {...args} isVisible={isVisible} />
    </Box>
  );
};

export const Default = ScaleTemplate.bind({});
Default.args = {
  children: <InternalCardExample />,
};
