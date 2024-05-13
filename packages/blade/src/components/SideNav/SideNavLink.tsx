import React from 'react';
import styled from 'styled-components';
import { FloatingPortal } from '@floating-ui/react';
import { NavLinkContext, useNavLink, useSideNav } from './SideNavContext';
import type { SideNavLinkProps } from './types';
import { Box } from '~components/Box';
import { size } from '~tokens/global';
import { makeBorderSize, makeMotionTime, makeSize, makeSpace } from '~utils';
import { BaseText } from '~components/Typography/BaseText';
import { useId } from '~utils/useId';
import { ChevronRightIcon } from '~components/Icons';
import BaseBox from '~components/Box/BaseBox';
import { useCollapsible } from '~components/Collapsible/CollapsibleContext';
import { Collapsible, CollapsibleBody } from '~components/Collapsible';
import { makeAccessible } from '~utils/makeAccessible';

const StyledNavLinkContainer = styled.a((props) => {
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: makeSize(size['36']),
    width: '100%',
    textDecoration: 'none',
    overflow: 'hidden',
    flexWrap: 'nowrap',
    cursor: 'pointer',
    padding: `${makeSpace(props.theme.spacing[0])} ${makeSpace(props.theme.spacing[4])}`,
    color: props.theme.colors.interactive.text.gray.subtle,
    borderRadius: props.theme.border.radius.medium,
    border: `${makeBorderSize(props.theme.border.width.thinner)} solid ${
      props.theme.colors.transparent
    }`,

    '.collapsed &': {
      width: '36px',
      transition: `width ${makeMotionTime(props.theme.motion.duration.xmoderate)} ${
        props.theme.motion.easing.exit.attentive
      }`,
      padding: '0px 10px',
      overflow: 'hidden',
      '& .hide-when-collapsed': {
        display: 'none',
      },
      '&[aria-current]': {
        '&::before': {
          opacity: 0,
          transition: 'opacity .3s ease',
        },
      },
    },
    ':hover': {
      color: props.theme.colors.interactive.text.gray.normal,
      backgroundColor: props.theme.colors.interactive.background.gray.default,
    },
    '&[aria-current]': {
      color: props.theme.colors.interactive.text.primary.subtle,
      backgroundColor: props.theme.colors.interactive.background.primary.faded,
      border: `${makeBorderSize(props.theme.border.width.thinner)} solid ${
        props.theme.colors.surface.border.primary.muted
      }`,

      '&::before': {
        content: '" "',
        position: 'absolute',
        left: '0px',
        top: '0px',
        bottom: '0px',
        margin: 'auto',
        width: makeSize(size['4']),
        height: makeSize(size['16']),
        backgroundColor: props.theme.colors.interactive.background.primary.default,
        borderRadius: `${makeBorderSize(props.theme.border.radius.none)} ${makeBorderSize(
          props.theme.border.radius.medium,
        )} ${makeBorderSize(props.theme.border.radius.medium)} ${makeBorderSize(
          props.theme.border.radius.none,
        )}`,
      },
    },
    '&[aria-current]:`hover`': {
      color: props.theme.colors.interactive.text.primary.normal,
      backgroundColor: props.theme.colors.interactive.background.primary.fadedHighlighted,
    },
  };
});

const NavLinkIconTitle = ({
  icon: Icon,
  title,
  isL1Item,
}: {
  icon: SideNavLinkProps['icon'];
  title: SideNavLinkProps['title'];
  isL1Item: boolean;
}): React.ReactElement => {
  return (
    <Box display="flex" flexDirection="row" gap="spacing.3">
      <BaseBox display="flex" flexDirection="row" alignItems="center" justifyContent="center">
        <Icon size="medium" color="currentColor" />
      </BaseBox>
      <BaseText
        truncateAfterLines={1}
        color="currentColor"
        fontWeight="medium"
        fontSize={100}
        lineHeight={100}
        as="p"
        className={isL1Item ? 'hide-when-collapsed' : ''}
      >
        {title}
      </BaseText>
    </Box>
  );
};

const L3Trigger = ({
  title,
  icon,
}: Pick<SideNavLinkProps, 'title' | 'icon'>): React.ReactElement => {
  const { onExpandChange, isExpanded, collapsibleBodyId } = useCollapsible();

  const toggleCollapse = (): void => onExpandChange(!isExpanded);
  const onL3TriggerClick = (): void => toggleCollapse();

  return (
    <StyledNavLinkContainer
      as="button"
      onClick={onL3TriggerClick}
      {...makeAccessible({ expanded: isExpanded, controls: collapsibleBodyId })}
    >
      <NavLinkIconTitle title={title} icon={icon} isL1Item={false} />
    </StyledNavLinkContainer>
  );
};

const SideNavLink = ({
  title,
  href,
  children,
  isCurrentPage,
  icon,
  as,
}: SideNavLinkProps): React.ReactElement => {
  const { l2PortalContainerRef, onLinkActiveChange, closeMobileNav } = useSideNav();
  const navLinkRef = React.useRef<HTMLAnchorElement>(null);
  const { level: _prevLevel } = useNavLink();
  const prevLevel = _prevLevel ?? 0;
  const currentLevel = prevLevel + 1;
  console.log({ currentLevel, title });
  const isL2Trigger = Boolean(children) && currentLevel === 1;
  const navItemId = useId('nav-item');
  const isL3Trigger = Boolean(children) && currentLevel === 2;

  React.useEffect(() => {
    onLinkActiveChange?.({
      id: navItemId,
      level: currentLevel,
      isActive: Boolean(isCurrentPage),
      isL2Trigger,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrentPage]);

  return (
    <NavLinkContext.Provider value={{ level: currentLevel }}>
      {isL3Trigger ? (
        <Collapsible _dangerouslyDisableValidations={true} _shouldApplyWidthRestrictions={false}>
          <L3Trigger title={title} icon={icon} />
          <CollapsibleBody width="100%">{children}</CollapsibleBody>
        </Collapsible>
      ) : (
        <>
          <StyledNavLinkContainer
            ref={navLinkRef}
            as={as}
            to={href}
            onClick={() => {
              // Close the mobile nav when item is clicked and its not trigger for next menu
              if (!isL2Trigger) {
                closeMobileNav?.();
              }

              if (isCurrentPage && isL2Trigger) {
                onLinkActiveChange?.({
                  id: navItemId,
                  level: currentLevel,
                  isActive: Boolean(isCurrentPage),
                  isL2Trigger,
                });
              }
            }}
            aria-current={isCurrentPage ? 'page' : undefined}
            data-level={currentLevel}
            data-l2trigger={isL2Trigger}
            data-navitemid={navItemId}
          >
            <NavLinkIconTitle icon={icon} title={title} isL1Item={currentLevel === 1} />
            {isL2Trigger ? (
              <BaseBox className="hide-when-collapsed">
                <ChevronRightIcon size="medium" color="currentColor" />
              </BaseBox>
            ) : null}
          </StyledNavLinkContainer>
          {children ? (
            <FloatingPortal root={l2PortalContainerRef}>
              {isCurrentPage ? children : null}
            </FloatingPortal>
          ) : null}
        </>
      )}
    </NavLinkContext.Provider>
  );
};

export { SideNavLink };
