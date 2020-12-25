import Menu from './components/menu';
import MenuItem from './components/menuItem';
import NavEntries from './NavMenuData';
import Popover from './components/popover';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useRouter } from 'next/router';
import { PropTypes } from 'prop-types';
import Link from 'next/link';
import { rgba } from 'polished';

const NavList = styled.ul`
  * {
    list-style: none;
  }

  > li {
    display: inline-block;
    color: ${props => (props.position === 1 ? props.theme.contrastText : props.theme.primaryText)};
    margin-right: 2px;
    transition: all 0.2s linear;

    a {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px 20px;
      border-radius: 3px;

      &:hover {
        background: ${props => rgba(props.theme.primaryLt, 0.3)};
        transition: all 0.2s linear;
        cursor: pointer;
      }
    }

    /* show top-level menu icons only on mobile */
    [class^='icon-']:not(.submenu) {
      display: ${props => (props.isMobile ? 'inline-block' : 'none')};
      color: ${props => props.theme.primaryText} !important;
    }
  }

  @media (min-width: 1024px) and (max-width: 1084px) {
    > li a {
      padding: 8px 16px;
    }
  }

  @media (max-width: 1023px) {
    margin-top: 10px;

    li {
      display: block;

      * {
        font-size: 1em;
        line-height: 1.7em;
      }
    }
  }
`;

class NavItem extends React.Component {
  state = {
    popoverOpen: false,
  };

  openPopoverMenu = () => {
    this.setState({ popoverOpen: true });
  };

  closePopoverMenu = () => {
    if (!this.props.isDrawerOpen) this.setState({ popoverOpen: false });
  };

  componentDidUpdate = prevProps => {
    if (!this.props.isDrawerOpen && prevProps.isDrawerOpen) {
      this.setState({ popoverOpen: true }); // eslint-disable-line react/no-string-refs
    } else if (this.props.isDrawerOpen !== prevProps.isDrawerOpen && prevProps.isDrawerOpen) {
      this.setState({ popoverOpen: false });
    }
    if (this.props.hoverIndex !== prevProps.hoverIndex) {
      if (this.props.hoverIndex === this.props.index) {
        this.openPopoverMenu();
      } else {
        this.closePopoverMenu();
      }
    }
  };

  render() {
    const { activeLink, index, m, ...props } = this.props;
    return (
      <li key={m.label} onMouseEnter={() => props.setHoverIndex(index)} onClick={props.handleClick}>
        <Link href={m.path} prefetch={false}>
          <a className='styled-link' css={theme => [activeLink && { background: rgba(theme.primaryLt, 0.5) }]}>
            <i className={`icon-${m.icon}`}>{m.icon}</i>
            {m.label}
          </a>
        </Link>
        {m.children ? (
          props.isMobile ? (
            <ul style={{ marginLeft: '24px' }}>
              <NavItems {...props} menuItems={m.children} />
            </ul>
          ) : (
            <Submenu
              {...props}
              popoverOpen={this.state.popoverOpen}
              closePopoverMenu={this.closePopoverMenu}
              menuItem={m}
            />
          )
        ) : null}
      </li>
    );
  }
}

const NavItems = ({ menuItems, ...props }) => {
  const router = useRouter();
  return menuItems.map((m, index) => {
    const activeLink =
      router.pathname === m.path || (!props.isMobile && router.pathname.split('/')[1] === m.path.split('/').pop());
    return <NavItem key={m.path} index={index} activeLink={activeLink} m={m} {...props} />;
  });
};

const Submenu = ({ menuItem, ...props }) => {
  return (
    <Popover
      open={props.popoverOpen}
      itemCount={menuItem.children.length + 1}
      render={popoverState => (
        <Menu onMouseLeave={props.setHoverIndex} onClick={props.handleClick} {...popoverState}>
          <MenuItem onClick={props.setHoverIndex} {...menuItem}>
            <Link href={menuItem.path}>
              <a
                className='styled-link'
                css={css`
                  * {
                    color: #000000;
                  }
                `}
              >
                <i className={`icon-${menuItem.icon}`}>{menuItem.icon}</i>
                <span>{menuItem.label}</span>
              </a>
            </Link>
          </MenuItem>
          {menuItem.children.map((m, i) => {
            return (
              <MenuItem key={m.label} onClick={props.setHoverIndex}>
                <Link href={m.path}>
                  <a className='styled-link'>
                    <i
                      className={`icon-${m.icon} submenu`}
                      css={css`
                        display: inline-block;
                        position: relative;
                        left: -8px;
                        font-size: 20px;
                      `}
                    >
                      {m.icon}
                    </i>
                    <span css={{ color: '#000000' }}>{m.label}</span>
                  </a>
                </Link>
              </MenuItem>
            );
          })}
        </Menu>
      )}
    />
  );
};

class NavMenu extends React.Component {
  state = {
    hoverIndex: null,
  };

  setHoverIndex = index => {
    this.setState({ hoverIndex: index });
  };

  render() {
    return (
      <nav className='navbar' onMouseLeave={() => this.setHoverIndex(null)}>
        <NavList position={this.props.position} isMobile={this.props.isMobile}>
          <NavItems {...this.props} {...this.state} setHoverIndex={this.setHoverIndex} menuItems={NavEntries} />
        </NavList>
      </nav>
    );
  }
}

Submenu.propTypes = {
  closePopoverMenu: PropTypes.func,
  handleClick: PropTypes.func,
  menuItem: PropTypes.object,
  popoverOpen: PropTypes.bool,
};

NavMenu.propTypes = {
  isMobile: PropTypes.bool,
  isDrawerOpen: PropTypes.bool,
  position: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};

export default NavMenu;
