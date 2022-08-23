import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoveToInboxSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInboxSharpFilled'
      short_name='MoveToInbox'

      {...props}
    >
      <path d="M3 21V3H21V21ZM12 16Q12.95 16 13.725 15.45Q14.5 14.9 14.8 14H19V5H5V14H9.2Q9.5 14.9 10.275 15.45Q11.05 16 12 16ZM12 14 8 10 9.4 8.55 11 10.15V6H13V10.15L14.6 8.55L16 10Z"/>
    </Icon>
  );
});

IconMaterialMoveToInboxSharpFilled.displayName = 'AmauiIconMaterialMoveToInboxSharpFilled';

export default IconMaterialMoveToInboxSharpFilled;
