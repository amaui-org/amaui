import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropUpOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpOutlinedW700'
      short_name='ArrowDropUp'

      {...props}
    >
      <path d="M5.625 14.575 12 8.2 18.375 14.575Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropUpOutlinedW700;
