import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryFullSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullSharpW100Filled'
      short_name='BatteryFull'

      {...props}
    >
      <path d="M7.65 21.35V4.65H10.4V3.15H13.6V4.65H16.35V21.35Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullSharpW100Filled.displayName = 'AmauiIconMaterialBatteryFullSharpW100Filled';

export default IconMaterialBatteryFullSharpW100Filled;
