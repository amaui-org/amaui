import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInventory2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2W100Filled'

      short_name='Inventory2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V8.9h-1V4.6h17.4v4.3h-1v11.8ZM4 8.3h16v-3H4Zm5.5 4.9h5v-.7h-5Z"/>
    </Icon>
  );
});

IconMaterialInventory2W100Filled.displayName = 'AmauiIconMaterialInventory2W100Filled';

export default IconMaterialInventory2W100Filled;
