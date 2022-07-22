import React from 'react';
import ReactDOM from 'react-dom';

const Portal = React.forwardRef((props: any, ref: any) => {
  const {
    element,
    children
  } = props;

  return (
    ReactDOM.createPortal(
      children,
      element
    )
  );
});

export default Portal;
