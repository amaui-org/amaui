import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagSharpW100'
      short_name='Flag'

      {...props}
    >
      <path d="M6.3 20.35V5.3H12.95L13.35 7.3H18.7V14.7H14.05L13.65 12.7H7V20.35ZM12.5 10ZM14.65 14H18V8H12.75L12.35 6H7V12H14.25Z"/>
    </Icon>
  );
});

IconMaterialFlagSharpW100.displayName = 'AmauiIconMaterialFlagSharpW100';

export default IconMaterialFlagSharpW100;
