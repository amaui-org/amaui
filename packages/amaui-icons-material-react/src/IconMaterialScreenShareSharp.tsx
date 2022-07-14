import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenShareSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareSharp'
      short_name='ScreenShare'

      {...props}
    >
      <path d="M8 14H10V11H13V13L16 10L13 7V9H8ZM2 18V3H22V18ZM4 16H20V5H4ZM1 21V19H23V21ZM4 16V5V16Z"/>
    </Icon>
  );
});

export default IconMaterialScreenShareSharp;
