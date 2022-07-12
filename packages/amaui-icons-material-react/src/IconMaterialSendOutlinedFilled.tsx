import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendOutlinedFilled'
      short_name='Send'

      {...props}
    >
      <path d="M3 20V14L11 12L3 10V4L22 12Z"/>
    </Icon>
  )
});

export default IconMaterialSendOutlinedFilled;
