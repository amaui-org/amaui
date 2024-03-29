import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTireRepairFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TireRepairFilled'

      short_name='TireRepair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 8q-.425 0-.712-.287Q18 7.425 18 7q0-.2.087-.387.088-.188.213-.313.3-.3 1.375-.675l1.075-.375-.375 1.075q-.15.425-.337.825-.188.4-.338.55-.125.125-.312.212Q19.2 8 19 8ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V5q0-.825.588-1.413Q3.175 3 4 3h6q.825 0 1.413.587Q12 4.175 12 5v8h4v6h2v-6h-1v-1.425q-1.35-.575-2.175-1.8Q14 8.55 14 7q0-2.075 1.463-3.537Q16.925 2 19 2t3.538 1.463Q24 4.925 24 7q0 1.55-.825 2.775Q22.35 11 21 11.575V13h-1v8h-6v-6h-2v4q0 .825-.587 1.413Q10.825 21 10 21Zm15-11q1.25 0 2.125-.875T22 7q0-1.25-.875-2.125T19 4q-1.25 0-2.125.875T16 7q0 1.25.875 2.125T19 10ZM6 9V6.175L4.825 5H4v2Zm2 0 2-2V5h-.825L8 6.175Zm-2 5v-2.825l-2-2V12Zm2 0 2-2V9.175l-2 2Zm-2 5v-2.825l-2-2V17Zm2 0 2-2v-2.825l-2 2Z"/>
    </Icon>
  );
});

IconMaterialTireRepairFilled.displayName = 'AmauiIconMaterialTireRepairFilled';

export default IconMaterialTireRepairFilled;
