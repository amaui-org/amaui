import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBurstModeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeSharp'
      short_name='BurstMode'

      {...props}
    >
      <path d="M5 19V5H7V19ZM1 19V5H3V19ZM9 19V5H23V19ZM11 17H21V7H11ZM12 15H20L17.4 11.5L15.5 14L14.1 12.15ZM11 7V17Z"/>
    </Icon>
  );
});

export default IconMaterialBurstModeSharp;
