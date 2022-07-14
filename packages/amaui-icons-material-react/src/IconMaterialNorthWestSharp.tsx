import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthWestSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestSharp'
      short_name='NorthWest'

      {...props}
    >
      <path d="M18.6 20 7 8.4V15H5V5H15V7H8.4L20 18.6Z"/>
    </Icon>
  );
});

export default IconMaterialNorthWestSharp;
