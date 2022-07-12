import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipPreviousOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousOutlinedW700Filled'
      short_name='SkipPrevious'

      {...props}
    >
      <path d="M3.925 19.575V4.425H7.075V19.575ZM20.075 19.575 8.7 12 20.075 4.425Z"/>
    </Icon>
  )
});

export default IconMaterialSkipPreviousOutlinedW700Filled;
