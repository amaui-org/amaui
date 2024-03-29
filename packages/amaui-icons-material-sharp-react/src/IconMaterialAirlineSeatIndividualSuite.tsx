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
      <path d="M1 17V7h2v8h8V7h12v10Zm12-2h8V9h-8Zm0 0V9v6Zm-6-1q-1.25 0-2.125-.875T4 11q0-1.25.875-2.125T7 8q1.25 0 2.125.875T10 11q0 1.25-.875 2.125T7 14Zm0-2q.425 0 .713-.288Q8 11.425 8 11t-.287-.713Q7.425 10 7 10t-.713.287Q6 10.575 6 11t.287.712Q6.575 12 7 12Zm0-1Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatIndividualSuite.displayName = 'AmauiIconMaterialAirlineSeatIndividualSuite';

export default IconMaterialAirlineSeatIndividualSuite;
