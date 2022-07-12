import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveFromQueueSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueueSharpFilled'
      short_name='RemoveFromQueue'

      {...props}
    >
      <path d="M8 12H16V10H8ZM8 21V19H2V3H22V19H16V21Z"/>
    </Icon>
  )
});

export default IconMaterialRemoveFromQueueSharpFilled;
