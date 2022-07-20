import React from 'react';

import Button from '../Button';

const IconButton = React.forwardRef((props: any, ref) => {

  return (
    <Button
      ref={ref}

      {...props}

      version={props.version || 'text'}

      icon
    />
  );
});

export default IconButton;
