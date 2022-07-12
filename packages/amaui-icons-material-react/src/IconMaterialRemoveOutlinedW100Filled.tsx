import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveOutlinedW100Filled'
      short_name='Remove'

      {...props}
    >
      <path d="M5.65 12.35V11.65H18.35V12.35Z"/>
    </Icon>
  )
});

export default IconMaterialRemoveOutlinedW100Filled;
