import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodTabletSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletSharpFilled'
      short_name='AodTablet'

      {...props}
    >
      <path d="M8 11.5V10h8v1.5Zm1 3V13h6v1.5ZM1 20V4h22v16Zm5-2h12V6H6Z"/>
    </Icon>
  )
});

export default IconMaterialAodTabletSharpFilled;
