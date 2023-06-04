import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInventory2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2Filled'

      short_name='Inventory2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V8.7H2V2h20v6.7h-1V22ZM4 7h16V4H4Zm5 7h6v-2H9Z"/>
    </Icon>
  );
});

IconMaterialInventory2Filled.displayName = 'AmauiIconMaterialInventory2Filled';

export default IconMaterialInventory2Filled;
