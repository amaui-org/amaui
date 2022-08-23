import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQueuePlayNextSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextSharpFilled'
      short_name='QueuePlayNext'

      {...props}
    >
      <path d="M11 15H13V12H16V10H13V7H11V10H8V12H11ZM19.5 22.5 18 21 21 18 18 15 19.5 13.5 24 18ZM8 21V19H2V3H22V12H17V19H15V21Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNextSharpFilled.displayName = 'AmauiIconMaterialQueuePlayNextSharpFilled';

export default IconMaterialQueuePlayNextSharpFilled;
