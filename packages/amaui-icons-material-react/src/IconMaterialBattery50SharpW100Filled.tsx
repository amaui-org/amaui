import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery50SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery50SharpW100Filled'
      short_name='Battery50'

      {...props}
    >
      <path d="M7.65 21.35V4.65H10.4V3.15H13.6V4.65H16.35V21.35Z"/>
    </Icon>
  );
});

IconMaterialBattery50SharpW100Filled.displayName = 'AmauiIconMaterialBattery50SharpW100Filled';

export default IconMaterialBattery50SharpW100Filled;
