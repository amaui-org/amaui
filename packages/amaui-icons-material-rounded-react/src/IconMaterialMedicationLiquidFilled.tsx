import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicationLiquidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidFilled'

      short_name='MedicationLiquid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 5q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h10q.425 0 .713.287Q15 3.575 15 4t-.287.712Q14.425 5 14 5Zm5 12.5q.625 0 1.062-.438.438-.437.438-1.062v-1h1q.625 0 1.062-.438Q13 14.125 13 13.5t-.438-1.062Q12.125 12 11.5 12h-1v-1q0-.625-.438-1.062Q9.625 9.5 9 9.5t-1.062.438Q7.5 10.375 7.5 11v1h-1q-.625 0-1.062.438Q5 12.875 5 13.5t.438 1.062Q5.875 15 6.5 15h1v1q0 .625.438 1.062.437.438 1.062.438ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V8q0-.825.588-1.412Q3.175 6 4 6h10q.825 0 1.413.588Q16 7.175 16 8v11q0 .825-.587 1.413Q14.825 21 14 21Zm16 0q-.425 0-.712-.288Q19 20.425 19 20v-6.25q-.875-.425-1.438-1.413Q17 11.35 17 10q0-1.7.863-2.85Q18.725 6 20 6t2.138 1.15Q23 8.3 23 10q0 1.35-.562 2.337-.563.988-1.438 1.413V20q0 .425-.288.712Q20.425 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidFilled.displayName = 'AmauiIconMaterialMedicationLiquidFilled';

export default IconMaterialMedicationLiquidFilled;
