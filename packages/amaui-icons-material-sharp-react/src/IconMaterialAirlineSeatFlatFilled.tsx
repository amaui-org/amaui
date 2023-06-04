import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatFilled'

      short_name='AirlineSeatFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14V7h13v7Zm-7 3v-2h20v2Zm3-3q-1.25 0-2.125-.875T2 11q0-1.25.875-2.125T5 8q1.25 0 2.125.875T8 11q0 1.25-.875 2.125T5 14Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatFilled.displayName = 'AmauiIconMaterialAirlineSeatFlatFilled';

export default IconMaterialAirlineSeatFlatFilled;
