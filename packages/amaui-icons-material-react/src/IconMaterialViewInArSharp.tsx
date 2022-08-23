import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewInArSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArSharp'
      short_name='ViewInAr'

      {...props}
    >
      <path d="M12 20.175 5 16.125V8.025L12 3.975L19 8.025V16.125ZM11 17.25V12.65L7 10.35V14.95ZM13 17.25 17 14.95V10.35L13 12.65ZM1 6V1H6V3H3V6ZM6 23H1V18H3V21H6ZM18 23V21H21V18H23V23ZM21 6V3H18V1H23V6ZM12 10.9 16 8.6 12 6.3 8 8.6ZM12 12.65ZM12 10.9ZM13 12.65ZM11 12.65Z"/>
    </Icon>
  );
});

IconMaterialViewInArSharp.displayName = 'AmauiIconMaterialViewInArSharp';

export default IconMaterialViewInArSharp;
