import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatIndividualSuite = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatIndividualSuite'

      short_name='AirlineSeatIndividualSuite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17q-.825 0-1.412-.587Q1 15.825 1 15V8q0-.425.288-.713Q1.575 7 2 7t.713.287Q3 7.575 3 8v7h8V9q0-.825.588-1.413Q12.175 7 13 7h6q1.65 0 2.825 1.175Q23 9.35 23 11v4q0 .825-.587 1.413Q21.825 17 21 17Zm10-2h8v-4q0-.825-.587-1.413Q19.825 9 19 9h-6Zm0-6v6Zm-6 5q-1.25 0-2.125-.875T4 11q0-1.25.875-2.125T7 8q1.25 0 2.125.875T10 11q0 1.25-.875 2.125T7 14Zm0-2q.425 0 .713-.288Q8 11.425 8 11t-.287-.713Q7.425 10 7 10t-.713.287Q6 10.575 6 11t.287.712Q6.575 12 7 12Zm0-1Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatIndividualSuite.displayName = 'AmauiIconMaterialAirlineSeatIndividualSuite';

export default IconMaterialAirlineSeatIndividualSuite;
