import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery80SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery80SharpW100Filled'
      short_name='Battery80'

      {...props}
    >
      <path d="M7.65 21.35V4.65H10.4V3.15H13.6V4.65H16.35V21.35Z"/>
    </Icon>
  );
});

export default IconMaterialBattery80SharpW100Filled;
