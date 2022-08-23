import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewInArSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArSharpW100'
      short_name='ViewInAr'

      {...props}
    >
      <path d="M12 19.45 5.65 15.775V8.375L12 4.7L18.35 8.375V15.775ZM11.65 18.45V12.25L6.35 9.25V15.35ZM12.35 18.45 17.65 15.35V9.25L12.35 12.25ZM2.3 6V2.3H6V3H3V6ZM6 21.7H2.3V18H3V21H6ZM18 21.45V20.75H21V17.75H21.7V21.45ZM21 6V3H18V2.3H21.7V6ZM12 11.65 17.3 8.6 12 5.55 6.7 8.6ZM12 12.25ZM12 11.65ZM12.35 12.25ZM11.65 12.25Z"/>
    </Icon>
  );
});

IconMaterialViewInArSharpW100.displayName = 'AmauiIconMaterialViewInArSharpW100';

export default IconMaterialViewInArSharpW100;
