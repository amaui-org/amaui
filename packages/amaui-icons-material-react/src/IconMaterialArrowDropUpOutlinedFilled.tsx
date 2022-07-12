import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropUpOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpOutlinedFilled'
      short_name='ArrowDropUp'

      {...props}
    >
      <path d="M7 14 12 9 17 14Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropUpOutlinedFilled;
