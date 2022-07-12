import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery80SharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery80SharpW700'
      short_name='Battery80'

      {...props}
    >
      <path d="M6.15 22.85V3.15H9.15V1.15H14.85V3.15H17.85V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialBattery80SharpW700;
