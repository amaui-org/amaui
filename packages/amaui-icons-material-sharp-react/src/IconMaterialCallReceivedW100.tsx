import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallReceivedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedW100'

      short_name='CallReceived'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.9 18.1V9.4h.7v7.5L18.85 4.65l.5.5L7.1 17.4h7.5v.7Z"/>
    </Icon>
  );
});

IconMaterialCallReceivedW100.displayName = 'AmauiIconMaterialCallReceivedW100';

export default IconMaterialCallReceivedW100;
