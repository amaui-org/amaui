import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeOutlinedW100'
      short_name='Home'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.6L18.7 9.65V19.7H13.8V13.45H10.2V19.7ZM6 19H9.5V12.75H14.5V19H18V10L12 5.5L6 10ZM12 12.25Z"/>
    </Icon>
  )
});

export default IconMaterialHomeOutlinedW100;
