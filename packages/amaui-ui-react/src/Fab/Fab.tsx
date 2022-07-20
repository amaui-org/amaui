import React from 'react';

import Button from '../Button';

const Fab = React.forwardRef((props: any, ref) => {

  return (
    <Button
      ref={ref}

      {...props}

      version={props.version || 'filled'}

      tonal={props.tonal !== undefined ? props.tonal : true}

      fab
    />
  );
});

export default Fab;
