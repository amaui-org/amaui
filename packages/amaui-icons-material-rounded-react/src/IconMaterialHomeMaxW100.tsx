import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeMaxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxW100'

      short_name='HomeMax'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 17.4q-.3 0-.525-.2-.225-.2-.225-.5H5q-1.125 0-1.912-.788Q2.3 15.125 2.3 14V9q0-1.125.788-1.912Q3.875 6.3 5 6.3h14q1.125 0 1.913.788.787.787.787 1.912v5q0 1.125-.787 1.912-.788.788-1.913.788h-3.3q0 .3-.225.5t-.525.2ZM3 7V16 7Zm2 9h14q.825 0 1.413-.588Q21 14.825 21 14V9q0-.825-.587-1.413Q19.825 7 19 7H5q-.825 0-1.413.587Q3 8.175 3 9v5q0 .825.587 1.412Q4.175 16 5 16Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxW100.displayName = 'AmauiIconMaterialHomeMaxW100';

export default IconMaterialHomeMaxW100;
