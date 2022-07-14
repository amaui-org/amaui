import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryFullSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullSharpW100'
      short_name='BatteryFull'

      {...props}
    >
      <path d="M7.65 21.35V4.65H10.4V3.15H13.6V4.65H16.35V21.35Z"/>
    </Icon>
  );
});

export default IconMaterialBatteryFullSharpW100;
