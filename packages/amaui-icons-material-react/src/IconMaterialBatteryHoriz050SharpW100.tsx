import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz050SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz050SharpW100'
      short_name='BatteryHoriz050'

      {...props}
    >
      <path d="M12.75 15.15v-6.3h-7v6.3Zm7.7.7H5.075V13.6h-1.5v-3.2h1.5V8.15H20.45Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz050SharpW100.displayName = 'AmauiIconMaterialBatteryHoriz050SharpW100';

export default IconMaterialBatteryHoriz050SharpW100;
