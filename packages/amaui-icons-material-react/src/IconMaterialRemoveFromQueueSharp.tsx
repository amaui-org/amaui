import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveFromQueueSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueueSharp'
      short_name='RemoveFromQueue'

      {...props}
    >
      <path d="M8 12H16V10H8ZM8 21V19H2V3H22V19H16V21ZM4 17H20V5H4ZM4 17V5V17Z"/>
    </Icon>
  );
});

export default IconMaterialRemoveFromQueueSharp;
