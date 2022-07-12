import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInventory2Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2Sharp'
      short_name='Inventory2'

      {...props}
    >
      <path d="M3 22V8.7H2V2H22V8.7H21V22ZM5 20H19V9H5ZM4 7H20V4H4ZM9 14H15V12H9ZM5 20V9V20Z"/>
    </Icon>
  )
});

export default IconMaterialInventory2Sharp;
