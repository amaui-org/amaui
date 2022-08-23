import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorSharp'
      short_name='BorderColor'

      {...props}
    >
      <path d="M2 24V20H22V24ZM4 18V14.25L13.05 5.2L16.8 8.95L7.75 18ZM6 16H6.9L14 8.95L13.05 8L6 15.1ZM17.925 7.85 14.175 4.1 16.675 1.6 20.425 5.35ZM6 16Z"/>
    </Icon>
  );
});

IconMaterialBorderColorSharp.displayName = 'AmauiIconMaterialBorderColorSharp';

export default IconMaterialBorderColorSharp;
