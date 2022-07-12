import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveOutlinedFilled'
      short_name='Remove'

      {...props}
    >
      <path d="M5 13V11H19V13Z"/>
    </Icon>
  )
});

export default IconMaterialRemoveOutlinedFilled;
