import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMissedVideoCallSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallSharp'
      short_name='MissedVideoCall'

      {...props}
    >
      <path d="M10.7 16 15.2 11.45 13.8 10.05 10.7 13.15 8.5 11H10V9H5V14H7V12.3ZM2 20V4H18V10.5L22 6.5V17.5L18 13.5V20ZM4 18H16V6H4ZM4 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialMissedVideoCallSharp;
