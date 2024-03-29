import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletMac = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMac'

      short_name='TabletMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23q-.825 0-1.413-.587Q3 21.825 3 21V3q0-.825.587-1.413Q4.175 1 5 1h14q.825 0 1.413.587Q21 2.175 21 3v18q0 .825-.587 1.413Q19.825 23 19 23Zm0-7h14V6H5Zm0 2v3h14v-3ZM5 4h14V3H5Zm0-1v1-1Zm0 18v-3 3Zm7-.5q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q12.425 18.5 12 18.5t-.712.288Q11 19.075 11 19.5t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialTabletMac.displayName = 'AmauiIconMaterialTabletMac';

export default IconMaterialTabletMac;
