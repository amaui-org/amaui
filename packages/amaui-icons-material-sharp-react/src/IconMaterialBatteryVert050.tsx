import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryVert050 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert050'

      short_name='BatteryVert050'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm2-9h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert050.displayName = 'AmauiIconMaterialBatteryVert050';

export default IconMaterialBatteryVert050;
