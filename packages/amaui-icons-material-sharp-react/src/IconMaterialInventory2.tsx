import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInventory2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2'

      short_name='Inventory2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V8.7H2V2h20v6.7h-1V22Zm2-2h14V9H5ZM4 7h16V4H4Zm5 7h6v-2H9Zm-4 6V9v11Z"/>
    </Icon>
  );
});

IconMaterialInventory2.displayName = 'AmauiIconMaterialInventory2';

export default IconMaterialInventory2;
