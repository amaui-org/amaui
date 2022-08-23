import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletSharpFilled'
      short_name='Tablet'

      {...props}
    >
      <path d="M1 20V4H23V20ZM6 18H18V6H6Z"/>
    </Icon>
  );
});

IconMaterialTabletSharpFilled.displayName = 'AmauiIconMaterialTabletSharpFilled';

export default IconMaterialTabletSharpFilled;
