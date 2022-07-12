import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSeatSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatSharpW700Filled'
      short_name='EventSeat'

      {...props}
    >
      <path d="M10.7 16.7H18.7V10.7H10.7ZM1.15 20.85V3.15H22.85V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialEventSeatSharpW700Filled;
