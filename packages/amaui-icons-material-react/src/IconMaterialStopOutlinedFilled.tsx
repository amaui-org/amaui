import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopOutlinedFilled'
      short_name='Stop'

      {...props}
    >
      <path d="M6 18V6H18V18Z"/>
    </Icon>
  )
});

export default IconMaterialStopOutlinedFilled;
