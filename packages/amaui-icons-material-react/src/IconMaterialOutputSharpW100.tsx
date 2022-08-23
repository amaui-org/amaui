import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutputSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputSharpW100'
      short_name='Output'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V7H19V5H5V19H19V17H19.7V19.7ZM16.35 16.075 15.875 15.6 19.075 12.35H10.15V11.65H19.075L15.875 8.4L16.35 7.925L20.425 12Z"/>
    </Icon>
  );
});

IconMaterialOutputSharpW100.displayName = 'AmauiIconMaterialOutputSharpW100';

export default IconMaterialOutputSharpW100;
