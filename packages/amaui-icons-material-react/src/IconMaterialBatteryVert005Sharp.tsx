import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVert005Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert005Sharp'
      short_name='BatteryVert005'

      {...props}
    >
      <path d="M9 19h6V6H9Zm-2 3V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

export default IconMaterialBatteryVert005Sharp;
