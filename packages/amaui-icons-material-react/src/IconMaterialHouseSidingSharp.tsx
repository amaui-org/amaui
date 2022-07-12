import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseSidingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSidingSharp'
      short_name='HouseSiding'

      {...props}
    >
      <path d="M5 20V12H2L12 3L22 12H19V20H17V18H7V20ZM9.45 8H14.55L12 5.7ZM7 12H17V10.2L16.775 10H7.225L7 10.2ZM7 16H17V14H7Z"/>
    </Icon>
  )
});

export default IconMaterialHouseSidingSharp;
