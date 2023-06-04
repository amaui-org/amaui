import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlat'

      short_name='AirlineSeatFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14V7h13v7Zm-7 3v-2h20v2Zm3-3q-1.25 0-2.125-.875T2 11q0-1.25.875-2.125T5 8q1.25 0 2.125.875T8 11q0 1.25-.875 2.125T5 14Zm0-2q.425 0 .713-.288Q6 11.425 6 11t-.287-.713Q5.425 10 5 10t-.713.287Q4 10.575 4 11t.287.712Q4.575 12 5 12Zm6 0h9V9h-9Zm-6-1Zm6 1V9v3Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlat.displayName = 'AmauiIconMaterialAirlineSeatFlat';

export default IconMaterialAirlineSeatFlat;
