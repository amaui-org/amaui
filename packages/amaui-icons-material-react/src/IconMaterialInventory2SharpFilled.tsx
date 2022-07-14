import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInventory2SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2SharpFilled'
      short_name='Inventory2'

      {...props}
    >
      <path d="M3 22V8.7H2V2H22V8.7H21V22ZM4 7H20V4H4ZM9 14H15V12H9Z"/>
    </Icon>
  );
});

export default IconMaterialInventory2SharpFilled;
