import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElectricalServicesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricalServicesSharp'
      short_name='ElectricalServices'

      {...props}
    >
      <path d="M18 15V13H21V15ZM18 19V17H21V19ZM12 20V18H10V14H12V12H17V20ZM3 17V9H10V6H4V4H12V11H5V15H9V17Z"/>
    </Icon>
  )
});

export default IconMaterialElectricalServicesSharp;
