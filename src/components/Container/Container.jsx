import React from 'react';
import './Container.scss';

function Container({ className, children}) {
  return (
    <div className={`container ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Container;
