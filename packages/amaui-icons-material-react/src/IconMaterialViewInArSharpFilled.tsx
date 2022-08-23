import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewInArSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArSharpFilled'
      short_name='ViewInAr'

      {...props}
    >
      <path d="M12 20.175 5 16.125V8.025L12 3.975L19 8.025V16.125ZM1 6V1H6V3H3V6ZM6 23H1V18H3V21H6ZM18 23V21H21V18H23V23ZM21 6V3H18V1H23V6ZM12 17.825 13 17.25V12.65L17 10.35V9.175L16 8.6L12 10.9L8 8.6L7 9.175V10.35L11 12.65V17.25Z"/>
    </Icon>
  );
});

IconMaterialViewInArSharpFilled.displayName = 'AmauiIconMaterialViewInArSharpFilled';

export default IconMaterialViewInArSharpFilled;
