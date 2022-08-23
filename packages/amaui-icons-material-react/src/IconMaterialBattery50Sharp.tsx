import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery50Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery50Sharp'
      short_name='Battery50'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  );
});

IconMaterialBattery50Sharp.displayName = 'AmauiIconMaterialBattery50Sharp';

export default IconMaterialBattery50Sharp;
