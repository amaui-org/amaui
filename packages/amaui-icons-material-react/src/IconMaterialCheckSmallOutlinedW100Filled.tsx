import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckSmallOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallOutlinedW100Filled'
      short_name='CheckSmall'

      {...props}
    >
      <path d="M10 15.475 6.925 12.4l.475-.475 2.6 2.6 6.6-6.6.475.475Z"/>
    </Icon>
  )
});

export default IconMaterialCheckSmallOutlinedW100Filled;
