import React from 'react';
import styled from 'styled-components';
import { FloatingFocusManager, FloatingPortal, useFloating } from '@floating-ui/react';
import { NavLinkContext, useNavLink, useSideNav } from '../SideNavContext';
import type { SideNavLinkProps } from '../types';
import { Box } from '~components/Box';
import { size } from '~tokens/global';
import { makeBorderSize, makeSize, makeSpace } from '~utils';
import { BaseText } from '~components/Typography/BaseText';
import { useId } from '~utils/useId';
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '~components/Icons';
import BaseBox from '~components/Box/BaseBox';
import { useCollapsible } from '~components/Collapsible/CollapsibleContext';
import { Collapsible, CollapsibleBody } from '~components/Collapsible';
import { makeAccessible } from '~utils/makeAccessible';
import { Tooltip } from '~components/Tooltip';

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
    backgroundColor: props.theme.colors.transparent,
    '.show-on-link-hover': {
      opacity: 0,
    },
    '.collapsed &': {
      padding: '0px 10px',
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
      '.show-on-link-hover': {
        opacity: 1,
      },
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

const TooltipifyNavLink = ({
  children,
  tooltip,
}: {
  children: React.ReactElement;
  tooltip: SideNavLinkProps['tooltip'];
}): React.ReactElement => {
  if (!tooltip) {
    return children;
  }

  return (
    <Tooltip {...tooltip} placement="top">
      {children}
    </Tooltip>
  );
};

const NavLinkIconTitle = ({
  icon: Icon,
  title,
  titleSuffix,
  isL1Item,
}: Pick<SideNavLinkProps, 'title' | 'icon' | 'titleSuffix'> & {
  isL1Item: boolean;
}): React.ReactElement => {
  return (
    <Box display="flex" flexDirection="row" gap="spacing.3">
      {Icon ? (
        <BaseBox display="flex" flexDirection="row" alignItems="center" justifyContent="center">
          <Icon size="medium" color="currentColor" />
        </BaseBox>
      ) : null}
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
      {titleSuffix ? <BaseBox>{titleSuffix}</BaseBox> : null}
    </Box>
  );
};

const L3Trigger = ({
  title,
  icon,
  as,
  href,
  titleSuffix,
  tooltip,
}: Pick<
  SideNavLinkProps,
  'title' | 'icon' | 'as' | 'href' | 'titleSuffix' | 'tooltip'
>): React.ReactElement => {
  const { onExpandChange, isExpanded, collapsibleBodyId } = useCollapsible();

  const toggleCollapse = (): void => onExpandChange(!isExpanded);
  const iconProps = {
    size: 'medium',
    color: 'currentColor',
  } as const;

  return (
    <TooltipifyNavLink tooltip={tooltip}>
      <StyledNavLinkContainer
        as={href ? as : 'button'}
        to={href}
        onClick={toggleCollapse}
        {...makeAccessible({ expanded: isExpanded, controls: collapsibleBodyId })}
      >
        <NavLinkIconTitle title={title} icon={icon} isL1Item={false} titleSuffix={titleSuffix} />
        <BaseBox display="flex" alignItems="center">
          {isExpanded ? <ChevronUpIcon {...iconProps} /> : <ChevronDownIcon {...iconProps} />}
        </BaseBox>
      </StyledNavLinkContainer>
    </TooltipifyNavLink>
  );
};

const SideNavLink = ({
  title,
  href,
  children,
  titleSuffix,
  trailing,
  isCurrentPage,
  icon,
  tooltip,
  as,
}: SideNavLinkProps): React.ReactElement => {
  const {
    l2PortalContainerRef,
    onLinkActiveChange,
    closeMobileNav,
    isL1Collapsed,
    setIsL1Collapsed,
  } = useSideNav();
  const { level: _prevLevel } = useNavLink();
  const prevLevel = _prevLevel ?? 0;
  const currentLevel = prevLevel + 1;
  const isL2Trigger = Boolean(children) && currentLevel === 1;
  const navItemId = useId('nav-item');
  const isL3Trigger = Boolean(children) && currentLevel === 2;

  const { refs, context } = useFloating({
    open: isCurrentPage,
  });

  React.useEffect(() => {
    onLinkActiveChange?.({
      id: navItemId,
      level: currentLevel,
      title,
      isActive: Boolean(isCurrentPage),
      isL2Trigger,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrentPage]);

  return (
    <NavLinkContext.Provider value={{ level: currentLevel, title }}>
      {isL3Trigger ? (
        <Collapsible
          defaultIsExpanded={isCurrentPage}
          _dangerouslyDisableValidations={true}
          _shouldApplyWidthRestrictions={false}
        >
          <L3Trigger title={title} icon={icon} as={as} href={href} titleSuffix={titleSuffix} />
          <CollapsibleBody width="100%" _hasMargin={false}>
            {children}
          </CollapsibleBody>
        </Collapsible>
      ) : (
        <>
          <TooltipifyNavLink tooltip={tooltip}>
            <StyledNavLinkContainer
              as={as}
              to={href}
              ref={refs.setReference}
              onClick={() => {
                // Close the mobile nav when item is clicked and its not trigger for next menu
                if (!isL2Trigger) {
                  closeMobileNav?.();
                }

                if (isCurrentPage && isL2Trigger) {
                  onLinkActiveChange?.({
                    id: navItemId,
                    level: currentLevel,
                    title,
                    isActive: Boolean(isCurrentPage),
                    isL2Trigger,
                  });
                }
              }}
              onFocus={() => {
                if (isL1Collapsed && currentLevel === 1) {
                  setIsL1Collapsed?.(false);
                }
              }}
              aria-current={isCurrentPage ? 'page' : undefined}
              data-level={currentLevel}
              data-l2trigger={isL2Trigger}
              data-navitemid={navItemId}
            >
              <NavLinkIconTitle
                icon={icon}
                title={title}
                isL1Item={currentLevel === 1}
                titleSuffix={titleSuffix}
              />
              {isL2Trigger ? (
                <BaseBox className="hide-when-collapsed">
                  <ChevronRightIcon size="medium" color="currentColor" />
                </BaseBox>
              ) : null}
              {trailing && !isL2Trigger ? (
                <BaseBox className="hide-when-collapsed show-on-link-hover">{trailing}</BaseBox>
              ) : null}
            </StyledNavLinkContainer>
          </TooltipifyNavLink>
          {children ? (
            <FloatingPortal root={l2PortalContainerRef}>
              {isCurrentPage && isL1Collapsed ? (
                <FloatingFocusManager modal={false} context={context}>
                  <BaseBox ref={refs.setFloating}>{children}</BaseBox>
                </FloatingFocusManager>
              ) : null}
            </FloatingPortal>
          ) : null}
        </>
      )}
    </NavLinkContext.Provider>
  );
};

export { SideNavLink };
