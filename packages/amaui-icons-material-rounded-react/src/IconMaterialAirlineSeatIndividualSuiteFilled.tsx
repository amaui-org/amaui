import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatIndividualSuiteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatIndividualSuiteFilled'

      short_name='AirlineSeatIndividualSuite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17q-.825 0-1.412-.587Q1 15.825 1 15V8q0-.425.288-.713Q1.575 7 2 7t.713.287Q3 7.575 3 8v7h8V9q0-.825.588-1.413Q12.175 7 13 7h6q1.65 0 2.825 1.175Q23 9.35 23 11v4q0 .825-.587 1.413Q21.825 17 21 17Zm4-3q-1.25 0-2.125-.875T4 11q0-1.25.875-2.125T7 8q1.25 0 2.125.875T10 11q0 1.25-.875 2.125T7 14Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatIndividualSuiteFilled.displayName = 'AmauiIconMaterialAirlineSeatIndividualSuiteFilled';

export default IconMaterialAirlineSeatIndividualSuiteFilled;
