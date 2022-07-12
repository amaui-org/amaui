import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropUpOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpOutlinedW700Filled'
      short_name='ArrowDropUp'

      {...props}
    >
      <path d="M5.625 14.575 12 8.2 18.375 14.575Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropUpOutlinedW700Filled;
