import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleSharp'
      short_name='Castle'

      {...props}
    >
      <path d="M1 21V9H3V11H5V3H7V5H9V3H11V5H13V3H15V5H17V3H19V11H21V9H23V21H14V16H10V21ZM3 19H8V14H16V19H21V13H17V7H7V13H3ZM9 12H11V9H9ZM13 12H15V9H13ZM12 13Z"/>
    </Icon>
  );
});

export default IconMaterialCastleSharp;
