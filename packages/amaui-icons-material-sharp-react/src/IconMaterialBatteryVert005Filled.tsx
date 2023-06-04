import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryVert005Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert005Filled'

      short_name='BatteryVert005'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19h6V6H9Zm-2 3V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert005Filled.displayName = 'AmauiIconMaterialBatteryVert005Filled';

export default IconMaterialBatteryVert005Filled;
