import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartButtonSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonSharp'
      short_name='SmartButton'

      {...props}
    >
      <path d="M2 17V7H22V17H19V15H20V9H4V15H10V17ZM14.5 19 13.4 16.6 11 15.5 13.4 14.4 14.5 12 15.6 14.4 18 15.5 15.6 16.6ZM17 14 16.375 12.625 15 12 16.375 11.375 17 10 17.625 11.375 19 12 17.625 12.625Z"/>
    </Icon>
  );
});

IconMaterialSmartButtonSharp.displayName = 'AmauiIconMaterialSmartButtonSharp';

export default IconMaterialSmartButtonSharp;
