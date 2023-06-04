import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallReceivedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedFilled'

      short_name='CallReceived'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19V9h2v6.6L18.6 4 20 5.4 8.4 17H15v2Z"/>
    </Icon>
  );
});

IconMaterialCallReceivedFilled.displayName = 'AmauiIconMaterialCallReceivedFilled';

export default IconMaterialCallReceivedFilled;
