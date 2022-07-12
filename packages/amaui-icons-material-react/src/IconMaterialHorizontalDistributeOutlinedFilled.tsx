import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalDistributeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeOutlinedFilled'
      short_name='HorizontalDistribute'

      {...props}
    >
      <path d="M2 22V2H4V22ZM10.5 17V7H13.5V17ZM20 22V2H22V22Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalDistributeOutlinedFilled;
