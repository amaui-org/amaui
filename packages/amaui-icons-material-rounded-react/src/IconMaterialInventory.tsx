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
      <path d="M11 21H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H19q.825 0 1.413.587Q21 4.175 21 5v5h-2V5h-2v1q0 .825-.587 1.412Q15.825 8 15 8H9q-.825 0-1.412-.588Q7 6.825 7 6V5H5v14h6Zm4.5-3.875 4.95-4.95q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-5.65 5.65q-.3.3-.7.3-.4 0-.7-.3l-2.85-2.85q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275ZM12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialInventory.displayName = 'AmauiIconMaterialInventory';

export default IconMaterialInventory;
