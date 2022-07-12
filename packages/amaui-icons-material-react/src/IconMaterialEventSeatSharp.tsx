import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSeatSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatSharp'
      short_name='EventSeat'

      {...props}
    >
      <path d="M11 17H19V11H11ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialEventSeatSharp;
