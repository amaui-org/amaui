import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthTwoTone'
      short_name='North'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z"/>
    </Icon>
  )
});

export default IconMaterialNorthTwoTone;
