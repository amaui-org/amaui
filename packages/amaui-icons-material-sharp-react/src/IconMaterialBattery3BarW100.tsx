import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery3BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery3BarW100'

      short_name='Battery3Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 20.45V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Zm.7-6.7h6.3v-8h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBattery3BarW100.displayName = 'AmauiIconMaterialBattery3BarW100';

export default IconMaterialBattery3BarW100;
