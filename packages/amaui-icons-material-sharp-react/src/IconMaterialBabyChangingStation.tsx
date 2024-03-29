import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBabyChangingStation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BabyChangingStation'

      short_name='BabyChangingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V12l1.575-4.625q.275-.85 1.1-1.2.825-.35 1.625 0L11.45 8H14v2h-3L8.3 8.825 7 12.75V22ZM8 5q-.825 0-1.412-.588Q6 3.825 6 3t.588-1.413Q7.175 1 8 1t1.413.587Q10 2.175 10 3q0 .825-.587 1.412Q8.825 5 8 5Zm1 14v-2h12v2Zm10.5-3q-.625 0-1.062-.438Q18 15.125 18 14.5t.438-1.062Q18.875 13 19.5 13t1.062.438Q21 13.875 21 14.5t-.438 1.062Q20.125 16 19.5 16ZM11 16v-3H9v-2h4v2h2v-2h2v5Z"/>
    </Icon>
  );
});

IconMaterialBabyChangingStation.displayName = 'AmauiIconMaterialBabyChangingStation';

export default IconMaterialBabyChangingStation;
