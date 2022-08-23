import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVert020Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert020Sharp'
      short_name='BatteryVert020'

      {...props}
    >
      <path d="M9 17h6V6H9Zm-2 5V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert020Sharp.displayName = 'AmauiIconMaterialBatteryVert020Sharp';

export default IconMaterialBatteryVert020Sharp;
