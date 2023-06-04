import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMissedOutgoingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoingW100'

      short_name='CallMissedOutgoing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.875 16.5-8.1-8.1.5-.5 7.6 7.6 7.15-7.15h-5.5v-.7h6.7v6.7h-.7v-5.5Z"/>
    </Icon>
  );
});

IconMaterialCallMissedOutgoingW100.displayName = 'AmauiIconMaterialCallMissedOutgoingW100';

export default IconMaterialCallMissedOutgoingW100;
