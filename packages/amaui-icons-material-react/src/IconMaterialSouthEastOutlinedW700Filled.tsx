import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthEastOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastOutlinedW700Filled'
      short_name='SouthEast'

      {...props}
    >
      <path d="M8.425 19.575V16.425H14.225L3.2 5.4L5.4 3.2L16.425 14.225V8.425H19.575V19.575Z"/>
    </Icon>
  )
});

export default IconMaterialSouthEastOutlinedW700Filled;
