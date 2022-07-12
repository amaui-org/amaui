import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInboxSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxSharpW700Filled'
      short_name='Inbox'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM12 15.85Q12.95 15.85 13.725 15.3Q14.5 14.75 14.8 13.85H18.7V5.3H5.3V13.85H9.2Q9.5 14.75 10.275 15.3Q11.05 15.85 12 15.85Z"/>
    </Icon>
  )
});

export default IconMaterialInboxSharpW700Filled;
