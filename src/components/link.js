/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from 'next/link';
import { jsx, Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
import { IoIosArrowForward } from 'react-icons/io';
import { keyframes } from '@emotion/react';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {label}
    </MenuLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A sx={styles.learnMore} {...rest}>
        {label ?? 'Learn More'} <IoIosArrowForward size="16px" />
      </A>
    </NextLink>
  );
}

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;

const styles = {
  learnMore: {
    color: 'link',
    cursor: 'pointer',
    fontSize: [1, null, null, '15px'],
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    svg: {
      transform: 'translateX(3px)',
      width: ['13px', null, null, '16px'],
    },
    ':hover': {
      svg: {
        animation: `${fadeRight} 0.5s linear`,
      },
    },
  },
};
