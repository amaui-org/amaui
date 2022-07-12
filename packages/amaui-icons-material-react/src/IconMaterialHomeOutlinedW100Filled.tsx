import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeOutlinedW100Filled'
      short_name='Home'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.6L18.7 9.65V19.7H13.8V13.45H10.2V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialHomeOutlinedW100Filled;
