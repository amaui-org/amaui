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
      <path d="M9 14V9q0-.825.588-1.413Q10.175 7 11 7h7q1.65 0 2.825 1.175Q22 9.35 22 11v3Zm-6 3q-.425 0-.712-.288Q2 16.425 2 16t.288-.713Q2.575 15 3 15h18q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 17 21 17Zm2-3q-1.25 0-2.125-.875T2 11q0-1.25.875-2.125T5 8q1.25 0 2.125.875T8 11q0 1.25-.875 2.125T5 14Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatFilled.displayName = 'AmauiIconMaterialAirlineSeatFlatFilled';

export default IconMaterialAirlineSeatFlatFilled;
