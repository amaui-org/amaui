import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckSmallRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallRoundedW700Filled'
      short_name='CheckSmall'

      {...props}
    >
      <path d="M10 12.775 15.5 7.3q.45-.45 1.1-.45.65 0 1.1.45.45.45.45 1.1 0 .65-.45 1.1l-6.575 6.6q-.475.475-1.125.475T8.875 16.1L6.3 13.5q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.1-.45.65 0 1.1.45Z"/>
    </Icon>
  )
});

export default IconMaterialCheckSmallRoundedW700Filled;
