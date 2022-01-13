import React from 'react';

export function PageWrapper({ children, className = '', ...rest }) {
  return (
    <div {...rest} id="main-content" tabIndex="-1">
      <div className={`containere  ${className}`}>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
