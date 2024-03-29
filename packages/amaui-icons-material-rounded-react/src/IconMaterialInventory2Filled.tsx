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
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V8.7q-.425-.275-.712-.7Q2 7.575 2 7V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v3q0 .575-.288 1-.287.425-.712.7V20q0 .825-.587 1.413Q19.825 22 19 22ZM20 7V4H4v3Zm-10 7h4q.425 0 .713-.288Q15 13.425 15 13t-.287-.713Q14.425 12 14 12h-4q-.425 0-.712.287Q9 12.575 9 13t.288.712Q9.575 14 10 14Z"/>
    </Icon>
  );
});

IconMaterialInventory2Filled.displayName = 'AmauiIconMaterialInventory2Filled';

export default IconMaterialInventory2Filled;
