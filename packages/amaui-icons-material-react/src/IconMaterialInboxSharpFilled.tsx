import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInboxSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxSharpFilled'
      short_name='Inbox'

      {...props}
    >
      <path d="M3 21V3H21V21ZM12 16Q12.95 16 13.725 15.45Q14.5 14.9 14.8 14H19V5H5V14H9.2Q9.5 14.9 10.275 15.45Q11.05 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialInboxSharpFilled.displayName = 'AmauiIconMaterialInboxSharpFilled';

export default IconMaterialInboxSharpFilled;
