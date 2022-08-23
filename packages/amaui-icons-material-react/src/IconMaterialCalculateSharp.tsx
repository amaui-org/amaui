import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalculateSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalculateSharp'
      short_name='Calculate'

      {...props}
    >
      <path d="M6.25 9.2H11.25V7.7H6.25ZM13 17.25H18V15.75H13ZM13 14.75H18V13.25H13ZM8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8ZM14.1 10.95 15.5 9.55 16.9 10.95 17.95 9.9 16.55 8.45 17.95 7.05 16.9 6 15.5 7.4 14.1 6 13.05 7.05 14.45 8.45 13.05 9.9ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialCalculateSharp.displayName = 'AmauiIconMaterialCalculateSharp';

export default IconMaterialCalculateSharp;
