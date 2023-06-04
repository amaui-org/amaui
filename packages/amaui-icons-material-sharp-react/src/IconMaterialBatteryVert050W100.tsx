import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryVert050W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert050W100'

      short_name='BatteryVert050'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 20.45V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Zm.7-7.7h6.3v-7h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert050W100.displayName = 'AmauiIconMaterialBatteryVert050W100';

export default IconMaterialBatteryVert050W100;
