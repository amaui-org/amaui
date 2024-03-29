import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeRepairService = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairService'

      short_name='HomeRepairService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18v-8q0-.825.588-1.413Q3.175 8 4 8h3V6q0-.825.588-1.412Q8.175 4 9 4h6q.825 0 1.413.588Q17 5.175 17 6v2h3q.825 0 1.413.587Q22 9.175 22 10v8q0 .825-.587 1.413Q20.825 20 20 20H4q-.825 0-1.412-.587Q2 18.825 2 18Zm2 0h16v-3h-2q0 .425-.288.712Q17.425 16 17 16t-.712-.288Q16 15.425 16 15H8q0 .425-.287.712Q7.425 16 7 16t-.713-.288Q6 15.425 6 15H4v3Zm0-8v3h2q0-.425.287-.713Q6.575 12 7 12t.713.287Q8 12.575 8 13h8q0-.425.288-.713Q16.575 12 17 12t.712.287Q18 12.575 18 13h2v-3H4Zm5-2h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairService.displayName = 'AmauiIconMaterialHomeRepairService';

export default IconMaterialHomeRepairService;
