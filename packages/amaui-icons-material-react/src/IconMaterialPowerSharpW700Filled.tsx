import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSharpW700Filled'
      short_name='Power'

      {...props}
    >
      <path d="M8.35 21.85V18.05L5.15 14.85V6.15H7.5V2.15H10.65V6.15H13.35V2.15H16.5V6.15H18.85V14.85L15.65 18.05V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialPowerSharpW700Filled;
