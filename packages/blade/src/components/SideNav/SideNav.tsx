import React from 'react';
import styled from 'styled-components';
import { SideNavContext } from './SideNavContext';
import type { SideNavContextType, SideNavProps } from './types';
import BaseBox from '~components/Box/BaseBox';
import { size } from '~tokens/global';
import { makeMotionTime, makeSize } from '~utils';
import { Drawer, DrawerBody, DrawerHeader } from '~components/Drawer';

const StyledL1Container = styled(BaseBox)((props) => {
  return {
    width: '100%',
    transition: `width ${makeMotionTime(props.theme.motion.duration.xmoderate)} ${
      props.theme.motion.easing.entrance.attentive
    }`,
    padding: '12px',
    '&.collapsed': {
      width: '52px',
      transition: `width ${makeMotionTime(props.theme.motion.duration.xmoderate)} ${
        props.theme.motion.easing.exit.attentive
      }`,
      padding: '12px 8px',
    },
  };
});

const SideNav = ({ children, isOpen, onDismiss }: SideNavProps): React.ReactElement => {
  const l2PortalContainerRef = React.useRef(null);
  const l1ContainerRef = React.useRef<HTMLDivElement>(null);
  const [isL1Collapsed, setIsL1Collapsed] = React.useState(false);
  const [isCollapsedHover, setIsCollapsedHover] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const isMobile = false;
  const onLinkActiveChange: SideNavContextType['onLinkActiveChange'] = (args) => {
    if (args.level === 1 && args.isL2Trigger && args.isActive) {
      setIsL1Collapsed(true);
      setIsCollapsedHover(false);
      setIsTransitioning(true);
      // For some delay, we disable hover to expand behaviour to avoid buggy flicker when cursor is on L1 while its trying to close
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }

    if (args.level === 1 && !args.isL2Trigger && args.isActive) {
      setIsL1Collapsed(false);
    }
  };

  const contextValue = React.useMemo(
    () => ({ l2PortalContainerRef, onLinkActiveChange }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const isL2Open = isL1Collapsed;
  const setIsL2Open = setIsL1Collapsed;

  return (
    <SideNavContext.Provider value={contextValue}>
      {isMobile && onDismiss ? (
        <>
          {/* L1 */}
          <Drawer isOpen={isOpen ?? false} onDismiss={onDismiss}>
            <DrawerHeader title="" />
            <DrawerBody>
              <BaseBox>{children}</BaseBox>
            </DrawerBody>
          </Drawer>
          {/* L2 */}
          <Drawer isOpen={isL2Open} onDismiss={() => setIsL2Open(false)} isLazy={false}>
            <DrawerHeader title="" />
            <DrawerBody>
              <BaseBox ref={l2PortalContainerRef} />
            </DrawerBody>
          </Drawer>
        </>
      ) : (
        <BaseBox
          position="fixed"
          backgroundColor="surface.background.gray.intense"
          height="100%"
          top="spacing.0"
          left="spacing.0"
          width={makeSize(size['256'])}
        >
          <BaseBox
            position="absolute"
            backgroundColor="surface.background.gray.intense"
            width="100%"
            ref={l2PortalContainerRef}
          />
          <StyledL1Container
            ref={l1ContainerRef}
            className={isL1Collapsed ? (isCollapsedHover ? '' : 'collapsed') : ''}
            position="absolute"
            backgroundColor="surface.background.gray.intense"
            height="100%"
            overflow="hidden"
            top="spacing.0"
            left="spacing.0"
            borderRightWidth="thin"
            borderRightColor="surface.border.gray.muted"
            onMouseOver={() => {
              if (isL1Collapsed && !isTransitioning) {
                setIsCollapsedHover(true);
              }
            }}
            onMouseOut={() => {
              if (isL1Collapsed) {
                setIsCollapsedHover(false);
              }
            }}
          >
            {children}
          </StyledL1Container>
        </BaseBox>
      )}
    </SideNavContext.Provider>
  );
};

export { SideNav };
