import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxSharpFilled'
      short_name='Outbox'

      {...props}
    >
      <path d="M11 14V9.85L9.4 11.45L8 10L12 6L16 10L14.6 11.45L13 9.85V14ZM3 21V3H21V21ZM12 16Q12.95 16 13.725 15.45Q14.5 14.9 14.8 14H19V5H5V14H9.2Q9.5 14.9 10.275 15.45Q11.05 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialOutboxSharpFilled.displayName = 'AmauiIconMaterialOutboxSharpFilled';

export default IconMaterialOutboxSharpFilled;
