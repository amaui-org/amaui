import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncSavedLocallyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSavedLocallyFilled'

      short_name='SyncSavedLocally'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.925 11.225 9.5 9.8q-.275-.275-.688-.288Q8.4 9.5 8.1 9.8q-.275.275-.275.7 0 .425.275.7l2.125 2.15q.3.3.7.3.4 0 .7-.3l4.65-4.25q0-.4-.05-.775t-.325-.65q-.3-.3-.712-.3-.413 0-.713.3ZM1 21v-2h21q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 21 22 21Zm3-3q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyFilled.displayName = 'AmauiIconMaterialSyncSavedLocallyFilled';

export default IconMaterialSyncSavedLocallyFilled;
