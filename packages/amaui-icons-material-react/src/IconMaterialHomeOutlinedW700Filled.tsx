import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeOutlinedW700Filled'
      short_name='Home'

      {...props}
    >
      <path d="M3.15 21.85V8.575L12 1.925L20.85 8.575V21.85H13.125V14.85H10.875V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialHomeOutlinedW700Filled;
