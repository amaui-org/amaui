import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropane = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Propane'

      short_name='Propane'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 6h4V5h-4Zm6-1v1h1q2.5 0 4.25 1.75T23 12q0 2.5-1.75 4.25T17 18v2q0 .425-.288.712Q16.425 21 16 21t-.712-.288Q15 20.425 15 20v-2H9v2q0 .425-.287.712Q8.425 21 8 21t-.713-.288Q7 20.425 7 20v-2q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6h1V5q0-.825.588-1.413Q9.175 3 10 3h4q.825 0 1.413.587Q16 4.175 16 5ZM7 16h10q1.65 0 2.825-1.175Q21 13.65 21 12q0-1.65-1.175-2.825Q18.65 8 17 8H7Q5.35 8 4.175 9.175 3 10.35 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm5-4Z"/>
    </Icon>
  );
});

IconMaterialPropane.displayName = 'AmauiIconMaterialPropane';

export default IconMaterialPropane;
