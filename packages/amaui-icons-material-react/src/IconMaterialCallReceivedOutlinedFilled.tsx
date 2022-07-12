import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallReceivedOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedOutlinedFilled'
      short_name='CallReceived'

      {...props}
    >
      <path d="M5 19V9H7V15.6L18.6 4L20 5.4L8.4 17H15V19Z"/>
    </Icon>
  )
});

export default IconMaterialCallReceivedOutlinedFilled;
