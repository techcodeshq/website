import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const LinkWrapperStyle = css`
  padding: 1vh 1.7vw;
  border-radius: 4vw;
  border: 0.2vw solid ${props => (props.color ? props.color : 'var(--text)')};
  text-decoration: none;
  color: ${props => (props.color ? props.color : 'var(--text)')};
  font-size: inherit;
  font-weight: inherit;
  user-select: none;

  :hover {
    color: var(--green);
    border-color: var(--green);
  }
`;

const GatsbyLinkWrapper = styled(GatsbyLink)`
  ${LinkWrapperStyle};
`;
const NormalLinkWrapper = styled.a`
  ${LinkWrapperStyle};
`;

const Link = props => {
  const { href, to, target, color, children, ...rest } = props;

  if (to)
    return (
      <GatsbyLinkWrapper to={to} {...rest} color={color}>
        {children}
      </GatsbyLinkWrapper>
    );

  if (href)
    return (
      <NormalLinkWrapper
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
        {...rest}
        color={color}>
        {children}
      </NormalLinkWrapper>
    );

  return;
};

export default Link;
