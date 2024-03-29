import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationFilled'

      short_name='Medication'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.5q.625 0 1.062-.438.438-.437.438-1.062v-1h1q.625 0 1.062-.438Q16 14.125 16 13.5t-.438-1.062Q15.125 12 14.5 12h-1v-1q0-.625-.438-1.062Q12.625 9.5 12 9.5t-1.062.438Q10.5 10.375 10.5 11v1h-1q-.625 0-1.062.438Q8 12.875 8 13.5t.438 1.062Q8.875 15 9.5 15h1v1q0 .625.438 1.062.437.438 1.062.438ZM7 21q-.825 0-1.412-.587Q5 19.825 5 19V8q0-.825.588-1.412Q6.175 6 7 6h10q.825 0 1.413.588Q19 7.175 19 8v11q0 .825-.587 1.413Q17.825 21 17 21ZM7 5q-.425 0-.713-.288Q6 4.425 6 4t.287-.713Q6.575 3 7 3h10q.425 0 .712.287Q18 3.575 18 4t-.288.712Q17.425 5 17 5Z"/>
    </Icon>
  );
});

IconMaterialMedicationFilled.displayName = 'AmauiIconMaterialMedicationFilled';

export default IconMaterialMedicationFilled;
