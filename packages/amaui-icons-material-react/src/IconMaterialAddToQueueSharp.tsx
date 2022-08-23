import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToQueueSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueSharp'
      short_name='AddToQueue'

      {...props}
    >
      <path d="M11 15H13V12H16V10H13V7H11V10H8V12H11ZM8 21V19H2V3H22V19H16V21ZM4 17H20V5H4ZM4 17V5V17Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueSharp.displayName = 'AmauiIconMaterialAddToQueueSharp';

export default IconMaterialAddToQueueSharp;
