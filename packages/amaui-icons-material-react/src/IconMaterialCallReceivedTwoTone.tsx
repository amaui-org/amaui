import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallReceivedTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedTwoTone'
      short_name='CallReceived'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/>
    </Icon>
  )
});

export default IconMaterialCallReceivedTwoTone;
