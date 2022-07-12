import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery1BarSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery1BarSharpW700'
      short_name='Battery1Bar'

      {...props}
    >
      <path d="M5.975 23.15V2.85H9.425V0.85H14.575V2.85H18.025V23.15ZM9.125 18H14.875V6H9.125Z"/>
    </Icon>
  )
});

export default IconMaterialBattery1BarSharpW700;
