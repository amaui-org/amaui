import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewListSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListSharpW700Filled'
      short_name='ViewList'

      {...props}
    >
      <path d="M2.4 8.475V4.2H6.7V8.475ZM8.45 8.475V4.2H21.6V8.475ZM8.45 14.125V9.875H21.6V14.125ZM8.45 19.8V15.525H21.6V19.8ZM2.4 19.8V15.525H6.7V19.8ZM2.4 14.125V9.875H6.7V14.125Z"/>
    </Icon>
  )
});

export default IconMaterialViewListSharpW700Filled;
