import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewInArSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArSharpW100Filled'
      short_name='ViewInAr'

      {...props}
    >
      <path d="M12 19.45 5.65 15.775V8.375L12 4.7L18.35 8.375V15.775ZM2.3 6V2.3H6V3H3V6ZM6 21.7H2.3V18H3V21H6ZM18 21.45V20.75H21V17.75H21.7V21.45ZM21 6V3H18V2.3H21.7V6ZM12 18.65 12.35 18.45V12.25L17.65 9.25V8.8L17.3 8.6L12 11.65L6.7 8.6L6.35 8.8V9.25L11.65 12.25V18.45Z"/>
    </Icon>
  );
});

IconMaterialViewInArSharpW100Filled.displayName = 'AmauiIconMaterialViewInArSharpW100Filled';

export default IconMaterialViewInArSharpW100Filled;
