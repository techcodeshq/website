import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledGatsbyLink = styled(Link)`
  display: inline;
  font-size: inherit;
  color: var(--text);
  background-color: var(--greenish);
  padding: 16px 48px;
  border-radius: 24px;
  border: 4px solid #000000;
  font-weight: 500;
  user-select: none;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0, 1);

  :hover {
    background-color: var(--dark-green);
  }
`;

const StyledALink = styled.a`
  display: inline;
  font-size: inherit;
  color: var(--text);
  background-color: var(--greenish);
  padding: 16px 48px;
  border-radius: 24px;
  border: 4px solid #000000;
  font-weight: 500;
  user-select: none;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0, 1);

  :hover {
    background-color: var(--dark-green);
  }
`;

const Button = props => {
  const { href, to, target, children, ...rest } = props;

  if (to) {
    return (
      <StyledGatsbyLink to={to} {...rest}>
        {children}
      </StyledGatsbyLink>
    );
  }

  if (href) {
    return (
      <StyledALink
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
        {...rest}>
        {children}
      </StyledALink>
    );
  }

  return;
};

export default Button;
