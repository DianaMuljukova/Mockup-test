import React from "react";
import PropTypes from "prop-types";
import {NavLink as RouteNavLink } from "react-router-dom";
import {NavItem, NavLink} from "shards-react";
import '../../../styles/nav/index.css';

const SidebarNavItem = ({item}) => {
  const { pathname } = window.location;
  return (
    <div className={item.children && "nav-children"}>
      <NavItem>
        <NavLink tag={RouteNavLink} to={item.to} exact={item.to === '/'}>
          {item.htmlBefore && (
            <div
              className="d-inline-block item-icon-wrapper"
              dangerouslySetInnerHTML={{__html: item.htmlBefore}}
            />
          )}
          {item.title && <span>{item.title}</span>}
          {item.htmlAfter && (
            <div
              className="d-inline-block item-icon-wrapper"
              dangerouslySetInnerHTML={{__html: item.htmlAfter}}
            />
          )}
        </NavLink>
      </NavItem>

      {pathname.startsWith(`${item.to}`) &&
      <div className="nav-children__list">
        {item.children &&
        item.children.map((child, idx) => (
          <RouteNavLink key={idx} to={child.to} className="nav-children__item"
                        activeClassName="active">
            {child.title}
          </RouteNavLink>
        ))
        }
      </div>
      }

    </div>
  );
}

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
