import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchRightOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRightOutlinedW700Filled'
      short_name='SwitchRight'

      {...props}
    >
      <path d="M16.85 14.1 18.925 12 16.85 9.9ZM13.8 21.425V2.575L23.25 12ZM10.2 21.425 0.75 12 10.2 2.575Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchRightOutlinedW700Filled;
