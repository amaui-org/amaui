import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSeatSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatSharpFilled'
      short_name='EventSeat'

      {...props}
    >
      <path d="M11 17H19V11H11ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

export default IconMaterialEventSeatSharpFilled;
