import React from 'react';

const ModalIcon = React.forwardRef((props: any, ref: any) => {
  const {
    className,

    children,

    ...other
  } = props;

  return (
    React.cloneElement(children, {
      ref,

      size: 'regular',

      ...other
    })
  );
});

export default ModalIcon;
