import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedTwoTone'
      short_name='CallMissed'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 10.41l7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z"/>
    </Icon>
  );
});

export default IconMaterialCallMissedTwoTone;
