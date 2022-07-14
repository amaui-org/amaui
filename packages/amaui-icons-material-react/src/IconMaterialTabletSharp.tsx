import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletSharp'
      short_name='Tablet'

      {...props}
    >
      <path d="M1 20V4H23V20ZM6 18H18V6H6ZM3 18H4V6H3ZM20 18H21V6H20ZM3 6H4ZM20 6H21Z"/>
    </Icon>
  );
});

export default IconMaterialTabletSharp;
