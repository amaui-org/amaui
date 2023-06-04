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
      <path d="M1 17V7h2v8h8V7h12v10Zm6-3q-1.25 0-2.125-.875T4 11q0-1.25.875-2.125T7 8q1.25 0 2.125.875T10 11q0 1.25-.875 2.125T7 14Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatIndividualSuiteFilled.displayName = 'AmauiIconMaterialAirlineSeatIndividualSuiteFilled';

export default IconMaterialAirlineSeatIndividualSuiteFilled;
