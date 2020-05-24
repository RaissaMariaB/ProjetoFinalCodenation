import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

function Container({children, fluid, className, ...rest}) {
  let containerClass = fluid ? "container-fluid" : "container";
  containerClass += ` ${className}`;
  return (
    <div {...rest} className={containerClass.trim()}>
      {children}
    </div>
  );
}

Container.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: "",
};

export default Container;
