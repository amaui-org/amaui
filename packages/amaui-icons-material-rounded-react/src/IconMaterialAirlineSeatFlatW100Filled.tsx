import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatW100Filled'

      short_name='AirlineSeatFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.7 12.7V9q0-.275.213-.488.212-.212.487-.212h6.9q1.125 0 1.912.787Q20 9.875 20 11v1.7Zm-5.35 2.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h15.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1.5-2.7q-.8 0-1.325-.525Q4 11.65 4 10.85q0-.8.525-1.325Q5.05 9 5.85 9q.8 0 1.325.525.525.525.525 1.325 0 .8-.525 1.325-.525.525-1.325.525Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatW100Filled.displayName = 'AmauiIconMaterialAirlineSeatFlatW100Filled';

export default IconMaterialAirlineSeatFlatW100Filled;
