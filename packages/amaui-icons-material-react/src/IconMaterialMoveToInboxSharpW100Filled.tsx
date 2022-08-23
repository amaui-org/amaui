import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoveToInboxSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInboxSharpW100Filled'
      short_name='MoveToInbox'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM12 16.8Q12.95 16.8 13.725 16.25Q14.5 15.7 14.8 14.8H19V5H5V14.8H9.2Q9.5 15.7 10.275 16.25Q11.05 16.8 12 16.8ZM12 13.1 8.9 10 9.4 9.5 11.65 11.75V6.9H12.35V11.75L14.6 9.5L15.1 10Z"/>
    </Icon>
  );
});

IconMaterialMoveToInboxSharpW100Filled.displayName = 'AmauiIconMaterialMoveToInboxSharpW100Filled';

export default IconMaterialMoveToInboxSharpW100Filled;
