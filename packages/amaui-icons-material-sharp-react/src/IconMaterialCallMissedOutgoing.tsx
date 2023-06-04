import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMissedOutgoing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoing'

      short_name='CallMissedOutgoing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 17.425-9-9L4.4 7l7.6 7.6L17.6 9H13V7h8v8h-2v-4.575Z"/>
    </Icon>
  );
});

IconMaterialCallMissedOutgoing.displayName = 'AmauiIconMaterialCallMissedOutgoing';

export default IconMaterialCallMissedOutgoing;
