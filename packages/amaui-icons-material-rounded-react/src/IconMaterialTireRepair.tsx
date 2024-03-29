import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTireRepair = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TireRepair'

      short_name='TireRepair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 8q-.425 0-.712-.287Q18 7.425 18 7q0-.2.087-.387.088-.188.213-.313.3-.3 1.375-.675l1.075-.375-.375 1.075q-.15.425-.337.825-.188.4-.338.55-.125.125-.312.212Q19.2 8 19 8ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V5q0-.825.588-1.413Q3.175 3 4 3h6q.825 0 1.413.587Q12 4.175 12 5v8.175q.225-.075.475-.125.25-.05.525-.05 1.25 0 2.125.875T16 16v2q0 .425.288.712.287.288.712.288t.712-.288Q18 18.425 18 18v-5h-1v-1.425q-1.35-.575-2.175-1.8Q14 8.55 14 7q0-2.075 1.463-3.537Q16.925 2 19 2t3.538 1.463Q24 4.925 24 7q0 1.55-.825 2.775Q22.35 11 21 11.575V13h-1v5q0 1.25-.875 2.125T17 21q-1.25 0-2.125-.875T14 18v-2q0-.425-.287-.713Q13.425 15 13 15t-.712.287Q12 15.575 12 16v3q0 .825-.587 1.413Q10.825 21 10 21Zm15-11q1.25 0 2.125-.875T22 7q0-1.25-.875-2.125T19 4q-1.25 0-2.125.875T16 7q0 1.25.875 2.125T19 10ZM4 19h6v-2l-2 2v-2.825l2-2V12l-2 2v-2.825l2-2V7L8 9V6.175L9.175 5h-4.35L6 6.175V9L4 7v2.175l2 2V14l-2-2v2.175l2 2V19l-2-2v2Zm3-7Z"/>
    </Icon>
  );
});

IconMaterialTireRepair.displayName = 'AmauiIconMaterialTireRepair';

export default IconMaterialTireRepair;
