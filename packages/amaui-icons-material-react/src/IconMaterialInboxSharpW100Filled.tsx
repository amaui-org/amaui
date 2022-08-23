import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInboxSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxSharpW100Filled'
      short_name='Inbox'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM12 16.8Q12.95 16.8 13.725 16.25Q14.5 15.7 14.8 14.8H19V5H5V14.8H9.2Q9.5 15.7 10.275 16.25Q11.05 16.8 12 16.8Z"/>
    </Icon>
  );
});

IconMaterialInboxSharpW100Filled.displayName = 'AmauiIconMaterialInboxSharpW100Filled';

export default IconMaterialInboxSharpW100Filled;
