import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletMacFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacFilled'

      short_name='TabletMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23q-.825 0-1.413-.587Q3 21.825 3 21V3q0-.825.587-1.413Q4.175 1 5 1h14q.825 0 1.413.587Q21 2.175 21 3v18q0 .825-.587 1.413Q19.825 23 19 23Zm0-7h14V6H5Zm7 4.5q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q12.425 18.5 12 18.5t-.712.288Q11 19.075 11 19.5t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialTabletMacFilled.displayName = 'AmauiIconMaterialTabletMacFilled';

export default IconMaterialTabletMacFilled;
