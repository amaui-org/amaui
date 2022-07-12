import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalDistributeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeOutlinedFilled'
      short_name='VerticalDistribute'

      {...props}
    >
      <path d="M2 4V2H22V4ZM7 13.5V10.5H17V13.5ZM2 22V20H22V22Z"/>
    </Icon>
  )
});

export default IconMaterialVerticalDistributeOutlinedFilled;
