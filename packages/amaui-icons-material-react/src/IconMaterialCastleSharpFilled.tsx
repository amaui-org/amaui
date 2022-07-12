import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleSharpFilled'
      short_name='Castle'

      {...props}
    >
      <path d="M1 21V9H3V11H5V3H7V5H9V3H11V5H13V3H15V5H17V3H19V11H21V9H23V21H14V16H10V21ZM9 12H11V9H9ZM13 12H15V9H13Z"/>
    </Icon>
  )
});

export default IconMaterialCastleSharpFilled;
