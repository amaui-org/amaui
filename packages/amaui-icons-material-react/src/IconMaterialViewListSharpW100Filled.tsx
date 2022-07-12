import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewListSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListSharpW100Filled'
      short_name='ViewList'

      {...props}
    >
      <path d="M4.3 9.8V6.45H7.65V9.8ZM8.1 9.8V6.45H19.7V9.8ZM8.1 13.4V10.25H19.7V13.4ZM8.1 17.2V13.85H19.7V17.2ZM4.3 17.2V13.85H7.65V17.2ZM4.3 13.4V10.25H7.65V13.4Z"/>
    </Icon>
  )
});

export default IconMaterialViewListSharpW100Filled;
