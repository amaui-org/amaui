import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallReceivedSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedSharpW100'
      short_name='CallReceived'

      {...props}
    >
      <path d="M5.9 18.1V9.4H6.6V16.9L18.85 4.65L19.35 5.15L7.1 17.4H14.6V18.1Z"/>
    </Icon>
  );
});

IconMaterialCallReceivedSharpW100.displayName = 'AmauiIconMaterialCallReceivedSharpW100';

export default IconMaterialCallReceivedSharpW100;
