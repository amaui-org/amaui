import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryProfileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileFilled'

      short_name='BatteryProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V4h3V2h4v2h3v18Zm2-2h6V6H6Zm13-8-1.25-2.75L15 8l2.75-1.25L19 4l1.25 2.75L23 8l-2.75 1.25Z"/>
    </Icon>
  );
});

IconMaterialBatteryProfileFilled.displayName = 'AmauiIconMaterialBatteryProfileFilled';

export default IconMaterialBatteryProfileFilled;
