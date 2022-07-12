import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery20Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery20Sharp'
      short_name='Battery20'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  )
});

export default IconMaterialBattery20Sharp;
