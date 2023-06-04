import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery1BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery1BarW100'

      short_name='Battery1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 20.45V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Zm.7-2.7h6.3v-12h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBattery1BarW100.displayName = 'AmauiIconMaterialBattery1BarW100';

export default IconMaterialBattery1BarW100;
