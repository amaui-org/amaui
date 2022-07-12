import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSeatSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatSharpW100Filled'
      short_name='EventSeat'

      {...props}
    >
      <path d="M11.4 16.95H19V11.35H11.4ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialEventSeatSharpW100Filled;
