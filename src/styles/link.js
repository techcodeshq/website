import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const LinkWrapperStyle = css`
  padding: 1vh 1.7vw;
  border-radius: 4vw;
  border: 0.2vw solid var(--text);
  text-decoration: none;
  color: var(--text);
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
  const { href, to, target, children, ...rest } = props;

  if (to)
    return (
      <GatsbyLinkWrapper to={to} {...rest}>
        {children}
      </GatsbyLinkWrapper>
    );

  if (href)
    return (
      <NormalLinkWrapper
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
        {...rest}>
        {children}
      </NormalLinkWrapper>
    );

  return;
};

export default Link;
