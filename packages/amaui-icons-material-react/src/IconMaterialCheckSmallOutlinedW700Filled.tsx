import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckSmallOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallOutlinedW700Filled'
      short_name='CheckSmall'

      {...props}
    >
      <path d="M10 17.225 5.425 12.65l2.225-2.225 2.35 2.35 6.35-6.35 2.225 2.225Z"/>
    </Icon>
  )
});

export default IconMaterialCheckSmallOutlinedW700Filled;
