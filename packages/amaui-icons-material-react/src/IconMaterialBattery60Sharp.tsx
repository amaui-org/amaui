import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery60Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery60Sharp'
      short_name='Battery60'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  );
});

IconMaterialBattery60Sharp.displayName = 'AmauiIconMaterialBattery60Sharp';

export default IconMaterialBattery60Sharp;
