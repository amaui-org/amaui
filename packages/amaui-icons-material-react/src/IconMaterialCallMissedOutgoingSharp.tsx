import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedOutgoingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoingSharp'
      short_name='CallMissedOutgoing'

      {...props}
    >
      <path d="M12 17.425 3 8.425 4.4 7 12 14.6 17.6 9H13V7H21V15H19V10.425Z"/>
    </Icon>
  );
});

IconMaterialCallMissedOutgoingSharp.displayName = 'AmauiIconMaterialCallMissedOutgoingSharp';

export default IconMaterialCallMissedOutgoingSharp;
