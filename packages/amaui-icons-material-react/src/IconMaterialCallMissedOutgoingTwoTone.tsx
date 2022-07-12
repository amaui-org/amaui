import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedOutgoingTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoingTwoTone'
      short_name='CallMissedOutgoing'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z"/>
    </Icon>
  )
});

export default IconMaterialCallMissedOutgoingTwoTone;
