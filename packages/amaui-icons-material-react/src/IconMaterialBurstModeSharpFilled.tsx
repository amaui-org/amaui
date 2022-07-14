import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBurstModeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeSharpFilled'
      short_name='BurstMode'

      {...props}
    >
      <path d="M5 19V5H7V19ZM1 19V5H3V19ZM9 19V5H23V19ZM12 15H20L17.4 11.5L15.5 14L14.1 12.15Z"/>
    </Icon>
  );
});

export default IconMaterialBurstModeSharpFilled;
