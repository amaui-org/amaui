import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVert050Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert050Sharp'
      short_name='BatteryVert050'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm2-9h6V6H9Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryVert050Sharp;
