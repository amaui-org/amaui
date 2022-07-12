import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchLeftOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeftOutlinedW700Filled'
      short_name='SwitchLeft'

      {...props}
    >
      <path d="M7.15 14.1V9.9L5.075 12ZM10.2 21.425 0.75 12 10.2 2.575ZM13.8 21.425V2.575L23.25 12Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchLeftOutlinedW700Filled;
