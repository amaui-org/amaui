import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceFilled'

      short_name='HomeRepairService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 10q0-.825.588-1.413Q3.175 8 4 8h3V6q0-.825.588-1.412Q8.175 4 9 4h6q.825 0 1.413.588Q17 5.175 17 6v2h3q.825 0 1.413.587Q22 9.175 22 10v4h-4v-1q0-.425-.288-.713Q17.425 12 17 12t-.712.287Q16 12.575 16 13v1H8v-1q0-.425-.287-.713Q7.425 12 7 12t-.713.287Q6 12.575 6 13v1H2Zm7-2h6V6H9ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18v-3h4q0 .425.287.712Q6.575 16 7 16t.713-.288Q8 15.425 8 15h8q0 .425.288.712.287.288.712.288t.712-.288Q18 15.425 18 15h4v3q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceFilled.displayName = 'AmauiIconMaterialHomeRepairServiceFilled';

export default IconMaterialHomeRepairServiceFilled;
