import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Navbar } from "shards-react";

import Title from "../../../views/Title";
import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>

        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <Title />
          <NavbarNav />
          <NavbarToggle />
        </Navbar>

    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
