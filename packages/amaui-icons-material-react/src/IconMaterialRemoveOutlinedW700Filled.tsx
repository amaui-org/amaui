import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveOutlinedW700Filled'
      short_name='Remove'

      {...props}
    >
      <path d="M4.425 13.575V10.425H19.575V13.575Z"/>
    </Icon>
  )
});

export default IconMaterialRemoveOutlinedW700Filled;
