import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInventory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory'

      short_name='Inventory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21H3V3h6.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H21v7h-2V5h-2v3H7V5H5v14h6Zm4.5-1.075-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4ZM12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialInventory.displayName = 'AmauiIconMaterialInventory';

export default IconMaterialInventory;
