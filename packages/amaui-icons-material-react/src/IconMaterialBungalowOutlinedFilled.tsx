import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBungalowOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowOutlinedFilled'
      short_name='Bungalow'

      {...props}
    >
      <path d="M7 21V14.8L5.9 16.55L4.2 15.5L12 3L19.8 15.5L18.1 16.55L17 14.8V21H13V16H11V21ZM11 14H13V12H11Z"/>
    </Icon>
  )
});

export default IconMaterialBungalowOutlinedFilled;
