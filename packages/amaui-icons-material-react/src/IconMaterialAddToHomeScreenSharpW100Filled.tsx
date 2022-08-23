import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenSharpW100Filled'
      short_name='AddToHomeScreen'

      {...props}
    >
      <path d="M4.4 16.1 3.9 15.6 10.15 9.35H5.65V8.65H11.35V14.35H10.65V9.85ZM7.3 21.7V17.1H8V18.65H18V5.35H8V6.9H7.3V2.3H18.7V21.7Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenSharpW100Filled.displayName = 'AmauiIconMaterialAddToHomeScreenSharpW100Filled';

export default IconMaterialAddToHomeScreenSharpW100Filled;
