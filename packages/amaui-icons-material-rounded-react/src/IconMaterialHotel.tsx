import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hotel'

      short_name='Hotel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20q-.425 0-.712-.288Q1 19.425 1 19V6q0-.425.288-.713Q1.575 5 2 5t.713.287Q3 5.575 3 6v9h8V9q0-.825.588-1.413Q12.175 7 13 7h6q1.65 0 2.825 1.175Q23 9.35 23 11v8q0 .425-.288.712Q22.425 20 22 20t-.712-.288Q21 19.425 21 19v-2H3v2q0 .425-.287.712Q2.425 20 2 20Zm5-6q-1.25 0-2.125-.875T4 11q0-1.25.875-2.125T7 8q1.25 0 2.125.875T10 11q0 1.25-.875 2.125T7 14Zm6 1h8v-4q0-.825-.587-1.413Q19.825 9 19 9h-6Zm-6-3q.425 0 .713-.288Q8 11.425 8 11t-.287-.713Q7.425 10 7 10t-.713.287Q6 10.575 6 11t.287.712Q6.575 12 7 12Zm0-1Zm6-2v6Z"/>
    </Icon>
  );
});

IconMaterialHotel.displayName = 'AmauiIconMaterialHotel';

export default IconMaterialHotel;
