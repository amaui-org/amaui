import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSeatSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatSharpW100'
      short_name='EventSeat'

      {...props}
    >
      <path d="M11.4 16.95H19V11.35H11.4ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

export default IconMaterialEventSeatSharpW100;
