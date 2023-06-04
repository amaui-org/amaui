import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryVert020Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert020Filled'

      short_name='BatteryVert020'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17h6V6H9Zm-2 5V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert020Filled.displayName = 'AmauiIconMaterialBatteryVert020Filled';

export default IconMaterialBatteryVert020Filled;
