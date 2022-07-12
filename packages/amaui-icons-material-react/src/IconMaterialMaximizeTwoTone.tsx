import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeTwoTone'
      short_name='Maximize'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v2H3V3z"/>
    </Icon>
  )
});

export default IconMaterialMaximizeTwoTone;
