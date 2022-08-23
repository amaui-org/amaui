import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery30Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery30Sharp'
      short_name='Battery30'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  );
});

IconMaterialBattery30Sharp.displayName = 'AmauiIconMaterialBattery30Sharp';

export default IconMaterialBattery30Sharp;
