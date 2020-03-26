import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";

function Page({
  children,
  animationIn,
  animationOut,
  color,
  background,
  location: { state }
}) {
  const cx = classNames({
    page: true,
    "page--prev": state && state.prev
  });

  return (
    <section
      data-in={animationIn}
      data-out={animationOut}
      className={cx}
      style={{
        color,
        background
      }}
    >
      {children}
    </section>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  background: PropTypes.string
};

Page.defaultProps = {
  color: "#fff",
  background: "#223"
};

export default withRouter(Page);
